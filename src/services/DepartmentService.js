import axios from 'axios';
import { API_URL } from '../config';

const DepartmentService = {
  // Get all departments
  getAllDepartments: async () => {
    try {
      const response = await axios.get(`${API_URL}/departments`);
      return response.data.data;
    } catch (error) {
      throw error;
    }
  },

  // Create new department
  createDepartment: async (departmentData) => {
    try {
      const response = await axios.post(`${API_URL}/departments`, departmentData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Update department
  updateDepartment: async (id, departmentData) => {
    try {
      const response = await axios.put(`${API_URL}/departments/${id}`, departmentData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Delete department
  deleteDepartment: async (id) => {
    try {
      const response = await axios.delete(`${API_URL}/departments/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
};

export default DepartmentService;