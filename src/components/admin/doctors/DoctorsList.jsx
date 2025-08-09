import React from 'react';

const DoctorsList = ({ doctors, loading, handleEdit, handleDelete }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="mb-4 text-xl font-semibold">قائمة الأطباء</h2>
      {loading ? (
        <p>جاري تحميل بيانات الأطباء...</p>
      ) : doctors.length === 0 ? (
        <p>لا يوجد أطباء مسجلين.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="px-4 py-2 border-b">الاسم</th>
                <th className="px-4 py-2 border-b">القسم</th>
                <th className="px-4 py-2 border-b">التخصص</th>
                <th className="px-4 py-2 border-b">الإجراءات</th>
              </tr>
            </thead>
            <tbody>
              {doctors.map((doctor) => (
                <tr key={doctor._id}>
                  <td className="px-4 py-2 border-b">{doctor.title}</td>
                  <td className="px-4 py-2 border-b">{doctor.departmentName}</td>
                  <td className="px-4 py-2 border-b">{doctor.job}</td>
                  <td className="px-4 py-2 border-b">
                    <button
                      onClick={() => handleEdit(doctor)}
                      className="px-3 py-1 mr-2 text-white bg-blue-500 rounded"
                    >
                      تعديل
                    </button>
                    <button
                      onClick={() => handleDelete(doctor._id)}
                      className="px-3 py-1 text-white bg-red-500 rounded"
                    >
                      حذف
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

export default DoctorsList;