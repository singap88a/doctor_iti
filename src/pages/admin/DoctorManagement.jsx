import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { API_URL } from '../../config';
import DoctorForm from '../../components/admin/doctors/DoctorForm';
import DoctorsList from '../../components/admin/doctors/DoctorsList';

const DoctorManagement = () => {
  const [doctors, setDoctors] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    department: '',
    title: '',
    job: '',
    category: '',
    description: '',
    image: '',
    contactInfo: {
      phone: '',
      email: ''
    },
    socialMedia: {
      facebook: '',
      twitter: '',
      linkedin: '',
      whatsapp: ''
    },
    appointmentSchedules: [
      { day: '', time: '' }
    ],
    degrees: [
      { degree: '', institution: '', year: '' }
    ],
    experiences: [
      { position: '', hospital: '', years: '' }
    ],
    awards: [
      { award: '', year: '' }
    ]
  });
  
  const fileInputRef = useRef(null);
  const [editMode, setEditMode] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  // Fetch doctors and departments
  const fetchData = async () => {
    try {
      setLoading(true);
      const [doctorsRes, departmentsRes] = await Promise.all([
        axios.get(`${API_URL}/doctors`),
        axios.get(`${API_URL}/departments`)
      ]);
      setDoctors(doctorsRes.data.data);
      setDepartments(departmentsRes.data.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      toast.error('Failed to load data');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormData({
        ...formData,
        [parent]: {
          ...formData[parent],
          [child]: value
        }
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Handle array field changes
  const handleArrayChange = (e, index, field, subfield) => {
    const { value } = e.target;
    const updatedArray = [...formData[field]];
    updatedArray[index][subfield] = value;
    setFormData({ ...formData, [field]: updatedArray });
  };

  // Add new item to array fields
  const addArrayItem = (field, template) => {
    setFormData({
      ...formData,
      [field]: [...formData[field], template]
    });
  };

  // Remove item from array fields
  const removeArrayItem = (field, index) => {
    if (formData[field].length > 1) {
      const updatedArray = formData[field].filter((_, i) => i !== index);
      setFormData({ ...formData, [field]: updatedArray });
    } else {
      toast.warning(`At least one ${field} item is required`);
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editMode) {
        await axios.put(`${API_URL}/doctors/${currentId}`, formData);
        toast.success('Doctor updated successfully');
      } else {
        await axios.post(`${API_URL}/doctors`, formData);
        toast.success('Doctor added successfully');
      }
      resetForm();
      fetchData();
    } catch (error) {
      console.error('Error saving doctor:', error);
      toast.error(error.response?.data?.error || 'Failed to save doctor');
    }
  };

  // Reset form
  const resetForm = () => {
    setFormData({
      department: '',
      title: '',
      job: '',
      category: '',
      description: '',
      image: '',
      contactInfo: {
        phone: '',
        email: ''
      },
      socialMedia: {
        facebook: '',
        twitter: '',
        linkedin: '',
        whatsapp: ''
      },
      appointmentSchedules: [
        { day: '', time: '' }
      ],
      degrees: [
        { degree: '', institution: '', year: '' }
      ],
      experiences: [
        { position: '', hospital: '', years: '' }
      ],
      awards: [
        { award: '', year: '' }
      ]
    });
    
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    setEditMode(false);
    setCurrentId(null);
  };

  // Handle edit doctor
  const handleEdit = (doctor) => {
    setFormData({
      department: doctor.department._id || doctor.department,
      title: doctor.title,
      job: doctor.job,
      category: doctor.category,
      description: doctor.description,
      image: doctor.image || '',
      contactInfo: doctor.contactInfo,
      socialMedia: doctor.socialMedia || {
        facebook: '',
        twitter: '',
        linkedin: '',
        whatsapp: ''
      },
      appointmentSchedules: doctor.appointmentSchedules,
      degrees: doctor.degrees,
      experiences: doctor.experiences,
      awards: doctor.awards
    });
    setEditMode(true);
    setCurrentId(doctor._id);
  };

  // Handle delete doctor
  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this doctor?')) {
      try {
        await axios.delete(`${API_URL}/doctors/${id}`);
        toast.success('Doctor deleted successfully');
        fetchData();
      } catch (error) {
        console.error('Error deleting doctor:', error);
        toast.error(error.response?.data?.error || 'Failed to delete doctor');
      }
    }
  };

  return (
    <div className="container p-4 mx-auto" dir="rtl">
      <h1 className="mb-6 text-2xl font-bold">إدارة الأطباء</h1>
      
      {/* Doctor Form */}
      <DoctorForm 
        formData={formData}
        handleChange={handleChange}
        handleArrayChange={handleArrayChange}
        addArrayItem={addArrayItem}
        removeArrayItem={removeArrayItem}
        handleSubmit={handleSubmit}
        resetForm={resetForm}
        editMode={editMode}
        departments={departments}
        fileInputRef={fileInputRef}
      />

      {/* Doctors List */}
      <DoctorsList 
        doctors={doctors}
        loading={loading}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default DoctorManagement;