import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import DepartmentService from '../../services/DepartmentService';
import DepartmentForm from '../../components/admin/department/DepartmentForm';
import DepartmentsList from '../../components/admin/department/DepartmentsList';

const DepartmentManagement = () => {
  const { t, i18n } = useTranslation();
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    icon: '',
    hero_img: '',
    socialIcons: [],
    translations: {
      en: { title: '', description: '' },
      ar: { title: '', description: '' }
    }
  });
  const [editMode, setEditMode] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  // تعريف دالة resetForm قبل استخدامها
  const resetForm = () => {
    setFormData({
      icon: '',
      hero_img: '',
      socialIcons: [],
      translations: {
        en: { title: '', description: '' },
        ar: { title: '', description: '' }
      }
    });
    setEditMode(false);
    setCurrentId(null);
  };

  const fetchDepartments = async () => {
    try {
      setLoading(true);
      const data = await DepartmentService.getAllDepartments();
      setDepartments(data);
    } catch (error) {
      console.error('Error fetching departments:', error);
      toast.error(t('fetchError', { defaultValue: 'Failed to load departments' }));
      
      if (error.response?.status === 401 || error.response?.status === 403) {
        window.location.href = '/login';
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDepartments();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if (name.startsWith('translations.')) {
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
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editMode) {
        await DepartmentService.updateDepartment(currentId, formData);
        toast.success(t('departmentUpdated', { defaultValue: 'Department updated successfully' }));
      } else {
        await DepartmentService.createDepartment(formData);
        toast.success(t('departmentAdded', { defaultValue: 'Department added successfully' }));
      }
      resetForm(); // استخدام الدالة بعد تعريفها
      await fetchDepartments();
    } catch (error) {
      console.error('Error saving department:', error);
      let errorMessage = t('saveError', { defaultValue: 'Failed to save department' });
      
      if (error.response) {
        if (error.response.status === 403) {
          errorMessage = t('auth.forbidden', { defaultValue: 'You do not have permission to perform this action' });
        } else if (error.response.data?.message) {
          errorMessage = error.response.data.message;
        }
      }
      
      toast.error(errorMessage);
    }
  };

  const handleEdit = (department) => {
    setFormData({
      icon: department.icon,
      hero_img: department.hero_img || '',
      socialIcons: department.socialIcons || [],
      translations: department.translations || {
        en: { title: '', description: '' },
        ar: { title: '', description: '' }
      }
    });
    setEditMode(true);
    setCurrentId(department._id);
  };

  const handleDelete = async (id) => {
    if (window.confirm(t('confirmDelete', { defaultValue: 'Are you sure you want to delete this department?' }))) {
      try {
        await DepartmentService.deleteDepartment(id);
        toast.success(t('departmentDeleted', { defaultValue: 'Department deleted successfully' }));
        fetchDepartments();
      } catch (error) {
        console.error('Error deleting department:', error);
        toast.error(t('deleteError', { defaultValue: 'Failed to delete department' }));
      }
    }
  };

  return (
    <div className="container p-4 mx-auto">
      <h1 className="mb-6 text-2xl font-bold">{t('departmentManagement', { defaultValue: 'Department Management' })}</h1>
      
      <DepartmentForm
        formData={formData}
        editMode={editMode}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleCancel={resetForm} // هنا يتم تمرير الدالة بشكل صحيح
      />

      <DepartmentsList
        departments={departments}
        loading={loading}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        currentLanguage={i18n.language}
      />
    </div>
  );
};

export default DepartmentManagement;