import React from 'react';
import { useTranslation } from 'react-i18next';

const DepartmentsList = ({ departments, loading, handleEdit, handleDelete, currentLanguage }) => {
  const { t } = useTranslation();

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="mb-4 text-xl font-semibold">{t('departmentsList')}</h2>
      {loading ? (
        <p>{t('loading')}</p>
      ) : departments.length === 0 ? (
        <p>{t('noDepartments')}</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="px-4 py-2 border-b">{t('iconClass')}</th>
                <th className="px-4 py-2 border-b">{t('departmentTitle')}</th>
                <th className="px-4 py-2 border-b">{t('departmentDescription')}</th>
                <th className="px-4 py-2 border-b">{t('actions')}</th>
              </tr>
            </thead>
            <tbody>
              {departments.map((department) => (
                <tr key={department._id}>
                  <td className="px-4 py-2 text-center border-b">
                    <i className={`${department.icon} text-secondary`}></i>
                  </td>
                  <td className="px-4 py-2 border-b">
                    {department.translations?.[currentLanguage]?.title || department.translations?.en?.title}
                  </td>
                  <td className="px-4 py-2 border-b">
                    {department.translations?.[currentLanguage]?.description?.substring(0, 50) || 
                     department.translations?.en?.description?.substring(0, 50)}...
                  </td>
                  <td className="px-4 py-2 border-b">
                    <button
                      onClick={() => handleEdit(department)}
                      className="px-3 py-1 mr-2 text-white bg-blue-500 rounded"
                    >
                      {t('edit')}
                    </button>
                    <button
                      onClick={() => {
                        if (window.confirm(t('confirmDelete'))) {
                          handleDelete(department._id);
                        }
                      }}
                      className="px-3 py-1 text-white bg-red-500 rounded"
                    >
                      {t('delete')}
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