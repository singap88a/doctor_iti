import React from 'react';
import { useTranslation } from 'react-i18next';

const DepartmentForm = ({ formData, editMode, handleChange, handleSubmit, handleCancel }) => {
  const { t } = useTranslation();

  return (
    <div className="p-6 mb-8 bg-white rounded-lg shadow-md">
      <h2 className="mb-4 text-xl font-semibold">
        {editMode ? t('editDepartment') : t('addDepartment')}
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="mb-4">
            <label className="block mb-2 text-gray-700">{t('iconClass')}</label>
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
            <label className="block mb-2 text-gray-700">{t('departmentTitle')}</label>
            <input
              type="text"
              name="translations.en.title"
              value={formData.translations?.en?.title || ''}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              placeholder="English Title"
              required
            />
            <input
              type="text"
              name="translations.ar.title"
              value={formData.translations?.ar?.title || ''}
              onChange={handleChange}
              className="w-full p-2 mt-2 border rounded"
              placeholder="العنوان بالعربية"
              required
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-gray-700">{t('departmentDescription')}</label>
          <textarea
            name="translations.en.description"
            value={formData.translations?.en?.description || ''}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            rows="3"
            placeholder="English Description"
            required
          ></textarea>
          <textarea
            name="translations.ar.description"
            value={formData.translations?.ar?.description || ''}
            onChange={handleChange}
            className="w-full p-2 mt-2 border rounded"
            rows="3"
            placeholder="الوصف بالعربية"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-gray-700">{t('heroImage')}</label>
          <input
            type="text"
            name="hero_img"
            value={formData.hero_img || ''}
            onChange={handleChange}
            className="w-full p-2 border rounded"
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
              {t('cancel')}
            </button>
          )}
          <button
            type="submit"
            className="px-4 py-2 text-white rounded bg-secondary"
          >
            {editMode ? t('save') : t('addDepartment')}
          </button>
        </div>
      </form>
    </div>
  );
};

export default DepartmentForm;