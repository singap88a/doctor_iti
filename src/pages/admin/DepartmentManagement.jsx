import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

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
      const res = await axios.get('https://backend-itiddoctor-395g.vercel.app/api/departments');
      setDepartments(res.data.data);
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
        await axios.put(`https://backend-itiddoctor-395g.vercel.app/api/departments/${currentId}`, formData);
        toast.success('Department updated successfully');
      } else {
        await axios.post('https://backend-itiddoctor-395g.vercel.app/api/departments', formData);
        toast.success('Department added successfully');
      }
      setFormData({ icon: '', title: '', description: '', hero_img: '' });
      setEditMode(false);
      setCurrentId(null);
      fetchDepartments();
    } catch (error) {
      console.error('Error saving department:', error);
      toast.error(error.response?.data?.error || 'Failed to save department');
    }
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
        await axios.delete(`https://backend-itiddoctor-395g.vercel.app/api/departments/${id}`);
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
      
      {/* Department Form */}
      <div className="p-6 mb-8 bg-white rounded-lg shadow-md">
        <h2 className="mb-4 text-xl font-semibold">
          {editMode ? 'Edit Department' : 'Add New Department'}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="mb-4">
              <label className="block mb-2 text-gray-700">Icon Class (FontAwesome)</label>
              <input
                type="text"
                name="icon"
                value={formData.icon}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                placeholder="fa-solid fa-hospital"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-gray-700">Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                placeholder="Department Title"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-gray-700">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              rows="3"
              placeholder="Department Description"
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-gray-700">Hero Image URL</label>
            <input
              type="text"
              name="hero_img"
              value={formData.hero_img}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              placeholder="Image URL"
            />
          </div>
          <div className="flex justify-end">
            {editMode && (
              <button
                type="button"
                onClick={() => {
                  setFormData({ icon: '', title: '', description: '', hero_img: '' });
                  setEditMode(false);
                  setCurrentId(null);
                }}
                className="px-4 py-2 mr-2 text-white bg-gray-500 rounded"
              >
                Cancel
              </button>
            )}
            <button
              type="submit"
              className="px-4 py-2 text-white rounded bg-secondary"
            >
              {editMode ? 'Update Department' : 'Add Department'}
            </button>
          </div>
        </form>
      </div>

      {/* Departments List */}
      <div className="p-6 bg-white rounded-lg shadow-md">
        <h2 className="mb-4 text-xl font-semibold">Departments List</h2>
        {loading ? (
          <p>Loading departments...</p>
        ) : departments.length === 0 ? (
          <p>No departments found.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="px-4 py-2 border-b">Icon</th>
                  <th className="px-4 py-2 border-b">Title</th>
                  <th className="px-4 py-2 border-b">Description</th>
                  <th className="px-4 py-2 border-b">Actions</th>
                </tr>
              </thead>
              <tbody>
                {departments.map((department) => (
                  <tr key={department._id}>
                    <td className="px-4 py-2 text-center border-b">
                      <i className={`${department.icon} text-secondary`}></i>
                    </td>
                    <td className="px-4 py-2 border-b">{department.title}</td>
                    <td className="px-4 py-2 border-b">
                      {department.description.length > 50
                        ? `${department.description.substring(0, 50)}...`
                        : department.description}
                    </td>
                    <td className="px-4 py-2 border-b">
                      <button
                        onClick={() => handleEdit(department)}
                        className="px-3 py-1 mr-2 text-white bg-blue-500 rounded"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(department._id)}
                        className="px-3 py-1 text-white bg-red-500 rounded"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default DepartmentManagement;