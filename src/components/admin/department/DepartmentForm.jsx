import React from 'react';

const DepartmentForm = ({ formData, editMode, handleChange, handleSubmit, handleCancel }) => {
  return (
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
              className="p-2 w-full rounded border"
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
              className="p-2 w-full rounded border"
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
            className="p-2 w-full rounded border"
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
            className="p-2 w-full rounded border"
            placeholder="Image URL"
          />
        </div>
        <div className="flex justify-end">
          {editMode && (
            <button
              type="button"
              onClick={handleCancel}
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
  );
};

export default DepartmentForm;