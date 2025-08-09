import React from 'react';

const DepartmentsList = ({ departments, loading, handleEdit, handleDelete }) => {
  return (
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
  );
};

export default DepartmentsList;