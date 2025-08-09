import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
 
import DepartmentService from '../../services/DepartmentService';
import DepartmentForm from '../../components/admin/department/DepartmentForm';
import DepartmentsList from '../../components/admin/department/DepartmentsList';

const DepartmentManagement = () => {
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    icon: '',
    title: '',
    description: '',
    hero_img: ''
  });
  const [editMode, setEditMode] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  // Fetch departments
  const fetchDepartments = async () => {
    try {
      setLoading(true);
      const data = await DepartmentService.getAllDepartments();
      setDepartments(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching departments:', error);
      toast.error('Failed to load departments');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDepartments();
  }, []);

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editMode) {
        await DepartmentService.updateDepartment(currentId, formData);
        toast.success('Department updated successfully');
      } else {
        await DepartmentService.createDepartment(formData);
        toast.success('Department added successfully');
      }
      resetForm();
      fetchDepartments();
    } catch (error) {
      console.error('Error saving department:', error);
      toast.error(error.response?.data?.error || 'Failed to save department');
    }
  };

  // Reset form
  const resetForm = () => {
    setFormData({ icon: '', title: '', description: '', hero_img: '' });
    setEditMode(false);
    setCurrentId(null);
  };

  // Handle edit department
  const handleEdit = (department) => {
    setFormData({
      icon: department.icon,
      title: department.title,
      description: department.description,
      hero_img: department.hero_img || ''
    });
    setEditMode(true);
    setCurrentId(department._id);
  };

  // Handle delete department
  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this department?')) {
      try {
        await DepartmentService.deleteDepartment(id);
        toast.success('Department deleted successfully');
        fetchDepartments();
      } catch (error) {
        console.error('Error deleting department:', error);
        toast.error(error.response?.data?.error || 'Failed to delete department');
      }
    }
  };

  return (
    <div className="container p-4 mx-auto">
      <h1 className="mb-6 text-2xl font-bold">Department Management</h1>
      
      {/* Department Form Component */}
      <DepartmentForm
        formData={formData} 
        editMode={editMode} 
        handleChange={handleChange} 
        handleSubmit={handleSubmit} 
        handleCancel={resetForm} 
      />

      {/* Departments List Component */}
      <DepartmentsList
        departments={departments} 
        loading={loading} 
        handleEdit={handleEdit} 
        handleDelete={handleDelete} 
      />
    </div>
  );
};

export default DepartmentManagement;