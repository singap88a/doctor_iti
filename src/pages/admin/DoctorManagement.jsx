import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DoctorManagement = () => {
  const { t, i18n } = useTranslation();
  const [doctors, setDoctors] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [currentDoctorId, setCurrentDoctorId] = useState(null);
  
  // Form data structure
  const [formData, setFormData] = useState({
    translations: {
      en: {
        name: '',
        jobTitle: '',
        specialty: '',
        bio: '',
        workingHoursTitle: 'Working Schedule',
        qualificationsTitle: 'Academic Qualifications',
        experiencesTitle: 'Professional Experience',
        awardsTitle: 'Honors & Awards'
      },
      ar: {
        name: '',
        jobTitle: '',
        specialty: '',
        bio: '',
        workingHoursTitle: 'مواعيد العمل',
        qualificationsTitle: 'المؤهلات العلمية',
        experiencesTitle: 'الخبرات العملية',
        awardsTitle: 'الجوائز والتكريمات'
      }
    },
    department: '',
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
    workingHours: [],
    qualifications: [],
    experiences: [],
    awards: [],
    isFeatured: false
  });

  // Temporary fields for adding items
  const [newWorkingHour, setNewWorkingHour] = useState({
    day: { en: '', ar: '' },
    time: { en: '', ar: '' }
  });
  const [newQualification, setNewQualification] = useState({
    degree: { en: '', ar: '' },
    institution: { en: '', ar: '' },
    year: ''
  });
  const [newExperience, setNewExperience] = useState({
    position: { en: '', ar: '' },
    organization: { en: '', ar: '' },
    duration: { en: '', ar: '' }
  });
  const [newAward, setNewAward] = useState({
    title: { en: '', ar: '' },
    year: ''
  });

  // Fetch data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        const headers = { Authorization: `Bearer ${token}` };

        const [doctorsRes, departmentsRes] = await Promise.all([
          axios.get('http://localhost:5000/api/doctors', { headers }),
          axios.get('http://localhost:5000/api/departments', { headers })
        ]);

        setDoctors(doctorsRes.data.data);
        setDepartments(departmentsRes.data.data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        toast.error(t('error_fetching_data'));
        setIsLoading(false);
      }
    };

    fetchData();
  }, [t]);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    if (name.includes('translations.')) {
      const [_, lang, field] = name.split('.');
      setFormData(prev => ({
        ...prev,
        translations: {
          ...prev.translations,
          [lang]: {
            ...prev.translations[lang],
            [field]: value
          }
        }
      }));
    } else if (name.includes('contactInfo.')) {
      const [_, field] = name.split('.');
      setFormData(prev => ({
        ...prev,
        contactInfo: {
          ...prev.contactInfo,
          [field]: value
        }
      }));
    } else if (name.includes('socialMedia.')) {
      const [_, field] = name.split('.');
      setFormData(prev => ({
        ...prev,
        socialMedia: {
          ...prev.socialMedia,
          [field]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  // Add working hours
  const addWorkingHour = () => {
    if (!newWorkingHour.day.en || !newWorkingHour.day.ar || 
        !newWorkingHour.time.en || !newWorkingHour.time.ar) {
      toast.error(t('fill_all_fields'));
      return;
    }

    setFormData(prev => ({
      ...prev,
      workingHours: [...prev.workingHours, newWorkingHour]
    }));
    
    setNewWorkingHour({
      day: { en: '', ar: '' },
      time: { en: '', ar: '' }
    });
  };

  // Remove working hour
  const removeWorkingHour = (index) => {
    setFormData(prev => ({
      ...prev,
      workingHours: prev.workingHours.filter((_, i) => i !== index)
    }));
  };

  // Add qualification
  const addQualification = () => {
    if (!newQualification.degree.en || !newQualification.degree.ar || 
        !newQualification.institution.en || !newQualification.institution.ar || 
        !newQualification.year) {
      toast.error(t('fill_all_fields'));
      return;
    }

    setFormData(prev => ({
      ...prev,
      qualifications: [...prev.qualifications, newQualification]
    }));
    
    setNewQualification({
      degree: { en: '', ar: '' },
      institution: { en: '', ar: '' },
      year: ''
    });
  };

  // Remove qualification
  const removeQualification = (index) => {
    setFormData(prev => ({
      ...prev,
      qualifications: prev.qualifications.filter((_, i) => i !== index)
    }));
  };

  // Add experience
  const addExperience = () => {
    if (!newExperience.position.en || !newExperience.position.ar || 
        !newExperience.organization.en || !newExperience.organization.ar || 
        !newExperience.duration.en || !newExperience.duration.ar) {
      toast.error(t('fill_all_fields'));
      return;
    }

    setFormData(prev => ({
      ...prev,
      experiences: [...prev.experiences, newExperience]
    }));
    
    setNewExperience({
      position: { en: '', ar: '' },
      organization: { en: '', ar: '' },
      duration: { en: '', ar: '' }
    });
  };

  // Remove experience
  const removeExperience = (index) => {
    setFormData(prev => ({
      ...prev,
      experiences: prev.experiences.filter((_, i) => i !== index)
    }));
  };

  // Add award
  const addAward = () => {
    if (!newAward.title.en || !newAward.title.ar || !newAward.year) {
      toast.error(t('fill_all_fields'));
      return;
    }

    setFormData(prev => ({
      ...prev,
      awards: [...prev.awards, newAward]
    }));
    
    setNewAward({
      title: { en: '', ar: '' },
      year: ''
    });
  };

  // Remove award
  const removeAward = (index) => {
    setFormData(prev => ({
      ...prev,
      awards: prev.awards.filter((_, i) => i !== index)
    }));
  };

  // Form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const headers = { Authorization: `Bearer ${token}` };

      if (currentDoctorId) {
        // Update existing doctor
        await axios.put(`http://localhost:5000/api/doctors/${currentDoctorId}`, formData, { headers });
        toast.success(t('doctor_updated_successfully'));
      } else {
        // Create new doctor
        await axios.post('http://localhost:5000/api/doctors', formData, { headers });
        toast.success(t('doctor_created_successfully'));
      }

      // Refresh data
      const res = await axios.get('http://localhost:5000/api/doctors', { headers });
      setDoctors(res.data.data);
      resetForm();
    } catch (error) {
      console.error('Error saving doctor:', error);
      toast.error(t('error_saving_doctor'));
    }
  };

  // Delete doctor
  const handleDelete = async () => {
    try {
      const token = localStorage.getItem('token');
      const headers = { Authorization: `Bearer ${token}` };

      await axios.delete(`http://localhost:5000/api/doctors/${currentDoctorId}`, { headers });
      toast.success(t('doctor_deleted_successfully'));

      // Refresh data
      const res = await axios.get('http://localhost:5000/api/doctors', { headers });
      setDoctors(res.data.data);
      closeDeleteModal();
    } catch (error) {
      console.error('Error deleting doctor:', error);
      toast.error(t('error_deleting_doctor'));
    }
  };

  // Reset form
  const resetForm = () => {
    setFormData({
      translations: {
        en: {
          name: '',
          jobTitle: '',
          specialty: '',
          bio: '',
          workingHoursTitle: 'Working Schedule',
          qualificationsTitle: 'Academic Qualifications',
          experiencesTitle: 'Professional Experience',
          awardsTitle: 'Honors & Awards'
        },
        ar: {
          name: '',
          jobTitle: '',
          specialty: '',
          bio: '',
          workingHoursTitle: 'مواعيد العمل',
          qualificationsTitle: 'المؤهلات العلمية',
          experiencesTitle: 'الخبرات العملية',
          awardsTitle: 'الجوائز والتكريمات'
        }
      },
      department: '',
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
      workingHours: [],
      qualifications: [],
      experiences: [],
      awards: [],
      isFeatured: false
    });
    setCurrentDoctorId(null);
  };

  // Open edit mode for a doctor
  const editDoctor = (doctor) => {
    setCurrentDoctorId(doctor._id);
    setFormData({
      ...doctor,
      department: doctor.department._id,
      workingHours: doctor.workingHours || [],
      qualifications: doctor.qualifications || [],
      experiences: doctor.experiences || [],
      awards: doctor.awards || []
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Open delete confirmation modal
  const openDeleteModal = (doctorId) => {
    setCurrentDoctorId(doctorId);
    setIsDeleteModalOpen(true);
  };

  // Close delete confirmation modal
  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setCurrentDoctorId(null);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="w-32 h-32 border-t-2 border-b-2 border-blue-500 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="container px-4 py-8 mx-auto">
      <div className="flex flex-col gap-8">
        {/* Form Section */}
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="mb-6 text-2xl font-bold text-gray-800">
            {currentDoctorId ? t('edit_doctor') : t('add_new_doctor')}
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Image Upload */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                {t('image_url')}
              </label>
              <div className="flex items-center gap-4">
                <div className="relative flex-shrink-0 w-24 h-24 overflow-hidden bg-gray-200 rounded-full">
                  {formData.image ? (
                    <img 
                      src={formData.image} 
                      alt="Doctor" 
                      className="object-cover w-full h-full"
                    />
                  ) : (
                    <div className="flex items-center justify-center w-full h-full text-gray-400">
                      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                  )}
                </div>
                <div className="flex-1">
                  <input
                    type="url"
                    name="image"
                    value={formData.image}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter image URL"
                  />
                </div>
              </div>
            </div>

            {/* Basic Info Section */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="p-4 border border-gray-200 rounded-lg">
                <h3 className="mb-4 text-lg font-medium text-gray-900">{t('basic_info')}</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block mb-1 text-sm font-medium text-gray-700">
                      {t('department')} *
                    </label>
                    <select
                      name="department"
                      value={formData.department}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      required
                    >
                      <option value="">{t('select_department')}</option>
                      {departments.map((dept) => (
                        <option key={dept._id} value={dept._id}>
                          {dept.translations[i18n.language]?.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block mb-1 text-sm font-medium text-gray-700">
                      {t('name_en')} *
                    </label>
                    <input
                      type="text"
                      name="translations.en.name"
                      value={formData.translations.en.name}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block mb-1 text-sm font-medium text-gray-700">
                      {t('name_ar')} *
                    </label>
                    <input
                      type="text"
                      name="translations.ar.name"
                      value={formData.translations.ar.name}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      required
                      dir="rtl"
                    />
                  </div>

                  <div>
                    <label className="block mb-1 text-sm font-medium text-gray-700">
                      {t('job_title_en')} *
                    </label>
                    <input
                      type="text"
                      name="translations.en.jobTitle"
                      value={formData.translations.en.jobTitle}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block mb-1 text-sm font-medium text-gray-700">
                      {t('job_title_ar')} *
                    </label>
                    <input
                      type="text"
                      name="translations.ar.jobTitle"
                      value={formData.translations.ar.jobTitle}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      required
                      dir="rtl"
                    />
                  </div>
                </div>
              </div>

              {/* Contact Info Section */}
              <div className="p-4 border border-gray-200 rounded-lg">
                <h3 className="mb-4 text-lg font-medium text-gray-900">{t('contact_info')}</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block mb-1 text-sm font-medium text-gray-700">
                      {t('specialty_en')} *
                    </label>
                    <input
                      type="text"
                      name="translations.en.specialty"
                      value={formData.translations.en.specialty}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block mb-1 text-sm font-medium text-gray-700">
                      {t('specialty_ar')} *
                    </label>
                    <input
                      type="text"
                      name="translations.ar.specialty"
                      value={formData.translations.ar.specialty}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      required
                      dir="rtl"
                    />
                  </div>

                  <div>
                    <label className="block mb-1 text-sm font-medium text-gray-700">
                      {t('phone')} *
                    </label>
                    <input
                      type="tel"
                      name="contactInfo.phone"
                      value={formData.contactInfo.phone}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block mb-1 text-sm font-medium text-gray-700">
                      {t('email')} *
                    </label>
                    <input
                      type="email"
                      name="contactInfo.email"
                      value={formData.contactInfo.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Biography Section */}
            <div className="p-4 border border-gray-200 rounded-lg">
              <h3 className="mb-4 text-lg font-medium text-gray-900">{t('bio')}</h3>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-700">
                    {t('bio_en')} *
                  </label>
                  <textarea
                    name="translations.en.bio"
                    value={formData.translations.en.bio}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    required
                  ></textarea>
                </div>
                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-700">
                    {t('bio_ar')} *
                  </label>
                  <textarea
                    name="translations.ar.bio"
                    value={formData.translations.ar.bio}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    required
                    dir="rtl"
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Working Hours Section */}
            <div className="p-4 border border-gray-200 rounded-lg">
              <h3 className="mb-4 text-lg font-medium text-gray-900">{t('working_hours')}</h3>
              
              {formData.workingHours.map((wh, index) => (
                <div key={index} className="flex items-center gap-4 p-3 mb-3 rounded-md bg-gray-50">
                  <div className="grid flex-1 grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                      <label className="block mb-1 text-xs font-medium text-gray-500">
                        {t('day_en')}
                      </label>
                      <input
                        type="text"
                        value={wh.day.en}
                        readOnly
                        className="w-full px-3 py-2 text-sm text-gray-700 bg-gray-100 border border-gray-300 rounded-md"
                      />
                    </div>
                    <div>
                      <label className="block mb-1 text-xs font-medium text-gray-500">
                        {t('day_ar')}
                      </label>
                      <input
                        type="text"
                        value={wh.day.ar}
                        readOnly
                        className="w-full px-3 py-2 text-sm text-gray-700 bg-gray-100 border border-gray-300 rounded-md"
                        dir="rtl"
                      />
                    </div>
                    <div>
                      <label className="block mb-1 text-xs font-medium text-gray-500">
                        {t('time_en')}
                      </label>
                      <input
                        type="text"
                        value={wh.time.en}
                        readOnly
                        className="w-full px-3 py-2 text-sm text-gray-700 bg-gray-100 border border-gray-300 rounded-md"
                      />
                    </div>
                    <div>
                      <label className="block mb-1 text-xs font-medium text-gray-500">
                        {t('time_ar')}
                      </label>
                      <input
                        type="text"
                        value={wh.time.ar}
                        readOnly
                        className="w-full px-3 py-2 text-sm text-gray-700 bg-gray-100 border border-gray-300 rounded-md"
                        dir="rtl"
                      />
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeWorkingHour(index)}
                    className="p-2 text-red-600 transition-colors duration-200 rounded-full hover:bg-red-100"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              ))}

              <div className="grid grid-cols-1 gap-4 p-4 rounded-md bg-gray-50 md:grid-cols-2">
                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-700">
                    {t('day_en')}
                  </label>
                  <input
                    type="text"
                    value={newWorkingHour.day.en}
                    onChange={(e) => setNewWorkingHour({...newWorkingHour, day: {...newWorkingHour.day, en: e.target.value}})}
                    className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="e.g. Sunday"
                  />
                </div>
                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-700">
                    {t('day_ar')}
                  </label>
                  <input
                    type="text"
                    value={newWorkingHour.day.ar}
                    onChange={(e) => setNewWorkingHour({...newWorkingHour, day: {...newWorkingHour.day, ar: e.target.value}})}
                    className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="مثال: الأحد"
                    dir="rtl"
                  />
                </div>
                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-700">
                    {t('time_en')}
                  </label>
                  <input
                    type="text"
                    value={newWorkingHour.time.en}
                    onChange={(e) => setNewWorkingHour({...newWorkingHour, time: {...newWorkingHour.time, en: e.target.value}})}
                    className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="e.g. 9:00 AM - 5:00 PM"
                  />
                </div>
                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-700">
                    {t('time_ar')}
                  </label>
                  <input
                    type="text"
                    value={newWorkingHour.time.ar}
                    onChange={(e) => setNewWorkingHour({...newWorkingHour, time: {...newWorkingHour.time, ar: e.target.value}})}
                    className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="مثال: 9 صباحًا - 5 مساءً"
                    dir="rtl"
                  />
                </div>
              </div>
              <button
                type="button"
                onClick={addWorkingHour}
                className="px-4 py-2 mt-2 text-sm text-white bg-blue-600 rounded-md hover:bg-blue-700"
              >
                {t('add_working_hour')}
              </button>
            </div>

            {/* Qualifications Section */}
            <div className="p-4 border border-gray-200 rounded-lg">
              <h3 className="mb-4 text-lg font-medium text-gray-900">{t('qualifications')}</h3>
              
              {formData.qualifications.map((qual, index) => (
                <div key={index} className="flex items-center gap-4 p-3 mb-3 rounded-md bg-gray-50">
                  <div className="grid flex-1 grid-cols-1 gap-4 md:grid-cols-3">
                    <div>
                      <label className="block mb-1 text-xs font-medium text-gray-500">
                        {t('degree_en')}
                      </label>
                      <input
                        type="text"
                        value={qual.degree.en}
                        readOnly
                        className="w-full px-3 py-2 text-sm text-gray-700 bg-gray-100 border border-gray-300 rounded-md"
                      />
                    </div>
                    <div>
                      <label className="block mb-1 text-xs font-medium text-gray-500">
                        {t('degree_ar')}
                      </label>
                      <input
                        type="text"
                        value={qual.degree.ar}
                        readOnly
                        className="w-full px-3 py-2 text-sm text-gray-700 bg-gray-100 border border-gray-300 rounded-md"
                        dir="rtl"
                      />
                    </div>
                    <div>
                      <label className="block mb-1 text-xs font-medium text-gray-500">
                        {t('institution_en')}
                      </label>
                      <input
                        type="text"
                        value={qual.institution.en}
                        readOnly
                        className="w-full px-3 py-2 text-sm text-gray-700 bg-gray-100 border border-gray-300 rounded-md"
                      />
                    </div>
                    <div>
                      <label className="block mb-1 text-xs font-medium text-gray-500">
                        {t('institution_ar')}
                      </label>
                      <input
                        type="text"
                        value={qual.institution.ar}
                        readOnly
                        className="w-full px-3 py-2 text-sm text-gray-700 bg-gray-100 border border-gray-300 rounded-md"
                        dir="rtl"
                      />
                    </div>
                    <div>
                      <label className="block mb-1 text-xs font-medium text-gray-500">
                        {t('year')}
                      </label>
                      <input
                        type="text"
                        value={qual.year}
                        readOnly
                        className="w-full px-3 py-2 text-sm text-gray-700 bg-gray-100 border border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeQualification(index)}
                    className="p-2 text-red-600 transition-colors duration-200 rounded-full hover:bg-red-100"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              ))}

              <div className="grid grid-cols-1 gap-4 p-4 rounded-md bg-gray-50 md:grid-cols-3">
                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-700">
                    {t('degree_en')}
                  </label>
                  <input
                    type="text"
                    value={newQualification.degree.en}
                    onChange={(e) => setNewQualification({...newQualification, degree: {...newQualification.degree, en: e.target.value}})}
                    className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="e.g. PhD in Medicine"
                  />
                </div>
                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-700">
                    {t('degree_ar')}
                  </label>
                  <input
                    type="text"
                    value={newQualification.degree.ar}
                    onChange={(e) => setNewQualification({...newQualification, degree: {...newQualification.degree, ar: e.target.value}})}
                    className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="مثال: دكتوراه في الطب"
                    dir="rtl"
                  />
                </div>
                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-700">
                    {t('institution_en')}
                  </label>
                  <input
                    type="text"
                    value={newQualification.institution.en}
                    onChange={(e) => setNewQualification({...newQualification, institution: {...newQualification.institution, en: e.target.value}})}
                    className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="e.g. Harvard University"
                  />
                </div>
                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-700">
                    {t('institution_ar')}
                  </label>
                  <input
                    type="text"
                    value={newQualification.institution.ar}
                    onChange={(e) => setNewQualification({...newQualification, institution: {...newQualification.institution, ar: e.target.value}})}
                    className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="مثال: جامعة هارفارد"
                    dir="rtl"
                  />
                </div>
                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-700">
                    {t('year')}
                  </label>
                  <input
                    type="text"
                    value={newQualification.year}
                    onChange={(e) => setNewQualification({...newQualification, year: e.target.value})}
                    className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="e.g. 2015"
                  />
                </div>
              </div>
              <button
                type="button"
                onClick={addQualification}
                className="px-4 py-2 mt-2 text-sm text-white bg-blue-600 rounded-md hover:bg-blue-700"
              >
                {t('add_qualification')}
              </button>
            </div>

            {/* Experiences Section */}
            <div className="p-4 border border-gray-200 rounded-lg">
              <h3 className="mb-4 text-lg font-medium text-gray-900">{t('experiences')}</h3>
              
              {formData.experiences.map((exp, index) => (
                <div key={index} className="flex items-center gap-4 p-3 mb-3 rounded-md bg-gray-50">
                  <div className="grid flex-1 grid-cols-1 gap-4 md:grid-cols-3">
                    <div>
                      <label className="block mb-1 text-xs font-medium text-gray-500">
                        {t('position_en')}
                      </label>
                      <input
                        type="text"
                        value={exp.position.en}
                        readOnly
                        className="w-full px-3 py-2 text-sm text-gray-700 bg-gray-100 border border-gray-300 rounded-md"
                      />
                    </div>
                    <div>
                      <label className="block mb-1 text-xs font-medium text-gray-500">
                        {t('position_ar')}
                      </label>
                      <input
                        type="text"
                        value={exp.position.ar}
                        readOnly
                        className="w-full px-3 py-2 text-sm text-gray-700 bg-gray-100 border border-gray-300 rounded-md"
                        dir="rtl"
                      />
                    </div>
                    <div>
                      <label className="block mb-1 text-xs font-medium text-gray-500">
                        {t('organization_en')}
                      </label>
                      <input
                        type="text"
                        value={exp.organization.en}
                        readOnly
                        className="w-full px-3 py-2 text-sm text-gray-700 bg-gray-100 border border-gray-300 rounded-md"
                      />
                    </div>
                    <div>
                      <label className="block mb-1 text-xs font-medium text-gray-500">
                        {t('organization_ar')}
                      </label>
                      <input
                        type="text"
                        value={exp.organization.ar}
                        readOnly
                        className="w-full px-3 py-2 text-sm text-gray-700 bg-gray-100 border border-gray-300 rounded-md"
                        dir="rtl"
                      />
                    </div>
                    <div>
                      <label className="block mb-1 text-xs font-medium text-gray-500">
                        {t('duration_en')}
                      </label>
                      <input
                        type="text"
                        value={exp.duration.en}
                        readOnly
                        className="w-full px-3 py-2 text-sm text-gray-700 bg-gray-100 border border-gray-300 rounded-md"
                      />
                    </div>
                    <div>
                      <label className="block mb-1 text-xs font-medium text-gray-500">
                        {t('duration_ar')}
                      </label>
                      <input
                        type="text"
                        value={exp.duration.ar}
                        readOnly
                        className="w-full px-3 py-2 text-sm text-gray-700 bg-gray-100 border border-gray-300 rounded-md"
                        dir="rtl"
                      />
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeExperience(index)}
                    className="p-2 text-red-600 transition-colors duration-200 rounded-full hover:bg-red-100"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              ))}

              <div className="grid grid-cols-1 gap-4 p-4 rounded-md bg-gray-50 md:grid-cols-3">
                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-700">
                    {t('position_en')}
                  </label>
                  <input
                    type="text"
                    value={newExperience.position.en}
                    onChange={(e) => setNewExperience({...newExperience, position: {...newExperience.position, en: e.target.value}})}
                    className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="e.g. Senior Surgeon"
                  />
                </div>
                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-700">
                    {t('position_ar')}
                  </label>
                  <input
                    type="text"
                    value={newExperience.position.ar}
                    onChange={(e) => setNewExperience({...newExperience, position: {...newExperience.position, ar: e.target.value}})}
                    className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="مثال: جراح أول"
                    dir="rtl"
                  />
                </div>
                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-700">
                    {t('organization_en')}
                  </label>
                  <input
                    type="text"
                    value={newExperience.organization.en}
                    onChange={(e) => setNewExperience({...newExperience, organization: {...newExperience.organization, en: e.target.value}})}
                    className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="e.g. Boston Medical Center"
                  />
                </div>
                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-700">
                    {t('organization_ar')}
                  </label>
                  <input
                    type="text"
                    value={newExperience.organization.ar}
                    onChange={(e) => setNewExperience({...newExperience, organization: {...newExperience.organization, ar: e.target.value}})}
                    className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="مثال: المركز الطبي ببوسطن"
                    dir="rtl"
                  />
                </div>
                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-700">
                    {t('duration_en')}
                  </label>
                  <input
                    type="text"
                    value={newExperience.duration.en}
                    onChange={(e) => setNewExperience({...newExperience, duration: {...newExperience.duration, en: e.target.value}})}
                    className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="e.g. 2015-2020"
                  />
                </div>
                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-700">
                    {t('duration_ar')}
                  </label>
                  <input
                    type="text"
                    value={newExperience.duration.ar}
                    onChange={(e) => setNewExperience({...newExperience, duration: {...newExperience.duration, ar: e.target.value}})}
                    className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="مثال: 2015-2020"
                    dir="rtl"
                  />
                </div>
              </div>
              <button
                type="button"
                onClick={addExperience}
                className="px-4 py-2 mt-2 text-sm text-white bg-blue-600 rounded-md hover:bg-blue-700"
              >
                {t('add_experience')}
              </button>
            </div>

            {/* Awards Section */}
            <div className="p-4 border border-gray-200 rounded-lg">
              <h3 className="mb-4 text-lg font-medium text-gray-900">{t('awards')}</h3>
              
              {formData.awards.map((award, index) => (
                <div key={index} className="flex items-center gap-4 p-3 mb-3 rounded-md bg-gray-50">
                  <div className="grid flex-1 grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                      <label className="block mb-1 text-xs font-medium text-gray-500">
                        {t('title_en')}
                      </label>
                      <input
                        type="text"
                        value={award.title.en}
                        readOnly
                        className="w-full px-3 py-2 text-sm text-gray-700 bg-gray-100 border border-gray-300 rounded-md"
                      />
                    </div>
                    <div>
                      <label className="block mb-1 text-xs font-medium text-gray-500">
                        {t('title_ar')}
                      </label>
                      <input
                        type="text"
                        value={award.title.ar}
                        readOnly
                        className="w-full px-3 py-2 text-sm text-gray-700 bg-gray-100 border border-gray-300 rounded-md"
                        dir="rtl"
                      />
                    </div>
                    <div>
                      <label className="block mb-1 text-xs font-medium text-gray-500">
                        {t('year')}
                      </label>
                      <input
                        type="text"
                        value={award.year}
                        readOnly
                        className="w-full px-3 py-2 text-sm text-gray-700 bg-gray-100 border border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeAward(index)}
                    className="p-2 text-red-600 transition-colors duration-200 rounded-full hover:bg-red-100"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              ))}

              <div className="grid grid-cols-1 gap-4 p-4 rounded-md bg-gray-50 md:grid-cols-2">
                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-700">
                    {t('title_en')}
                  </label>
                  <input
                    type="text"
                    value={newAward.title.en}
                    onChange={(e) => setNewAward({...newAward, title: {...newAward.title, en: e.target.value}})}
                    className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="e.g. Excellence in Medicine Award"
                  />
                </div>
                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-700">
                    {t('title_ar')}
                  </label>
                  <input
                    type="text"
                    value={newAward.title.ar}
                    onChange={(e) => setNewAward({...newAward, title: {...newAward.title, ar: e.target.value}})}
                    className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="مثال: جائزة التميز في الطب"
                    dir="rtl"
                  />
                </div>
                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-700">
                    {t('year')}
                  </label>
                  <input
                    type="text"
                    value={newAward.year}
                    onChange={(e) => setNewAward({...newAward, year: e.target.value})}
                    className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="e.g. 2020"
                  />
                </div>
              </div>
              <button
                type="button"
                onClick={addAward}
                className="px-4 py-2 mt-2 text-sm text-white bg-blue-600 rounded-md hover:bg-blue-700"
              >
                {t('add_award')}
              </button>
            </div>

            {/* Social Media Section */}
            <div className="p-4 border border-gray-200 rounded-lg">
              <h3 className="mb-4 text-lg font-medium text-gray-900">{t('social_media')}</h3>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-700">
                    Facebook
                  </label>
                  <input
                    type="url"
                    name="socialMedia.facebook"
                    value={formData.socialMedia.facebook}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="https://facebook.com/username"
                  />
                </div>
                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-700">
                    Twitter
                  </label>
                  <input
                    type="url"
                    name="socialMedia.twitter"
                    value={formData.socialMedia.twitter}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="https://twitter.com/username"
                  />
                </div>
                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-700">
                    LinkedIn
                  </label>
                  <input
                    type="url"
                    name="socialMedia.linkedin"
                    value={formData.socialMedia.linkedin}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="https://linkedin.com/in/username"
                  />
                </div>
                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-700">
                    WhatsApp
                  </label>
                  <input
                    type="tel"
                    name="socialMedia.whatsapp"
                    value={formData.socialMedia.whatsapp}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Phone number"
                  />
                </div>
              </div>
            </div>

            {/* Additional Settings */}
            <div className="p-4 border border-gray-200 rounded-lg">
              <h3 className="mb-4 text-lg font-medium text-gray-900">{t('additional_settings')}</h3>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="isFeatured"
                  checked={formData.isFeatured}
                  onChange={(e) => setFormData({...formData, isFeatured: e.target.checked})}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label className="ml-2 text-sm font-medium text-gray-700">
                  {t('featured_doctor')}
                </label>
              </div>
            </div>

            {/* Form Actions */}
            <div className="flex justify-end gap-4 pt-4">
              <button
                type="button"
                onClick={resetForm}
                className="px-6 py-2 text-gray-700 bg-gray-200 border border-gray-300 rounded-md shadow-sm hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                {t('reset')}
              </button>
              <button
                type="submit"
                className="px-6 py-2 text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                {currentDoctorId ? t('update') : t('save')}
              </button>
            </div>
          </form>
        </div>

        {/* Doctors List Section */}
        <div className="p-6 bg-white rounded-lg shadow-md">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800">{t('doctors_list')}</h2>
            <div className="flex gap-4">
              <button
                onClick={() => i18n.changeLanguage('en')}
                className={`px-4 py-2 rounded-md ${i18n.language === 'en' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'}`}
              >
                English
              </button>
              <button
                onClick={() => i18n.changeLanguage('ar')}
                className={`px-4 py-2 rounded-md ${i18n.language === 'ar' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'}`}
                dir="rtl"
              >
                العربية
              </button>
            </div>
          </div>

          {/* Doctors Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                    {t('name')}
                  </th>
                  <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                    {t('specialty')}
                  </th>
                  <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                    {t('department')}
                  </th>
                  <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                    {t('featured')}
                  </th>
                  <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                    {t('actions')}
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {doctors.map((doctor) => (
                  <tr key={doctor._id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        {doctor.image && (
                          <div className="flex-shrink-0 w-10 h-10">
                            <img 
                              className="w-10 h-10 rounded-full" 
                              src={doctor.image} 
                              alt={doctor.translations[i18n.language]?.name} 
                            />
                          </div>
                        )}
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {doctor.translations[i18n.language]?.name}
                          </div>
                          <div className="text-sm text-gray-500">
                            {doctor.translations[i18n.language]?.jobTitle}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                      {doctor.translations[i18n.language]?.specialty}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                      {doctor.department?.translations[i18n.language]?.title}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 text-xs font-semibold leading-5 rounded-full ${doctor.isFeatured ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                        {doctor.isFeatured ? t('yes') : t('no')}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium whitespace-nowrap">
                      <button
                        onClick={() => editDoctor(doctor)}
                        className="mr-3 text-blue-600 hover:text-blue-900"
                      >
                        {t('edit')}
                      </button>
                      <button
                        onClick={() => openDeleteModal(doctor._id)}
                        className="text-red-600 hover:text-red-900"
                      >
                        {t('delete')}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {isDeleteModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-600 bg-opacity-50">
          <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-900">
                {t('confirm_delete')}
              </h2>
              <button 
                onClick={closeDeleteModal}
                className="text-gray-400 hover:text-gray-500"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <p className="mb-6 text-gray-700">
              {t('are_you_sure_delete_doctor')}
            </p>

            <div className="flex justify-end gap-4">
              <button
                onClick={closeDeleteModal}
                className="px-4 py-2 text-gray-700 bg-gray-200 border border-gray-300 rounded-md shadow-sm hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                {t('cancel')}
              </button>
              <button
                onClick={handleDelete}
                className="px-4 py-2 text-white bg-red-600 border border-transparent rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                {t('delete')}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DoctorManagement;