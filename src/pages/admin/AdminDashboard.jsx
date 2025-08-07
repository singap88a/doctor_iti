import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Admin Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Departments Management Card */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
          <div className="p-6">
            <div className="flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-500 rounded-full mb-4 mx-auto">
              <i className="fa-solid fa-hospital text-2xl"></i>
            </div>
            <h2 className="text-xl font-semibold text-center mb-2">Departments</h2>
            <p className="text-gray-600 text-center mb-4">
              Manage hospital departments, add new ones, or update existing departments.
            </p>
            <Link 
              to="/admin/departments" 
              className="block text-center bg-secondary text-white py-2 px-4 rounded hover:bg-opacity-90 transition-colors"
            >
              Manage Departments
            </Link>
          </div>
        </div>

        {/* Doctors Management Card */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
          <div className="p-6">
            <div className="flex items-center justify-center w-16 h-16 bg-green-100 text-green-500 rounded-full mb-4 mx-auto">
              <i className="fa-solid fa-user-doctor text-2xl"></i>
            </div>
            <h2 className="text-xl font-semibold text-center mb-2">Doctors</h2>
            <p className="text-gray-600 text-center mb-4">
              Manage doctors, their profiles, specialties, and department assignments.
            </p>
            <Link 
              to="/admin/doctors" 
              className="block text-center bg-secondary text-white py-2 px-4 rounded hover:bg-opacity-90 transition-colors"
            >
              Manage Doctors
            </Link>
          </div>
        </div>

        {/* Appointments Management Card */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
          <div className="p-6">
            <div className="flex items-center justify-center w-16 h-16 bg-purple-100 text-purple-500 rounded-full mb-4 mx-auto">
              <i className="fa-solid fa-calendar-check text-2xl"></i>
            </div>
            <h2 className="text-xl font-semibold text-center mb-2">Appointments</h2>
            <p className="text-gray-600 text-center mb-4">
              View and manage patient appointments, update status, and schedule.
            </p>
            <Link 
              to="/admin/appointments" 
              className="block text-center bg-secondary text-white py-2 px-4 rounded hover:bg-opacity-90 transition-colors"
            >
              Manage Appointments
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <Link 
          to="/" 
          className="text-secondary hover:underline"
        >
          <i className="fa-solid fa-arrow-left mr-2"></i>
          Back to Website
        </Link>
      </div>
    </div>
  );
};

export default AdminDashboard;