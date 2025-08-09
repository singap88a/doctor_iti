import React from 'react';

const BasicInfoForm = ({ formData, handleChange, departments }) => {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <label className="block mb-2 text-gray-700">القسم</label>
          <select
            name="department"
            value={formData.department}
            onChange={handleChange}
            className="p-2 w-full rounded border"
            required
          >
            <option value="">اختر القسم</option>
            {departments.map((dept) => (
              <option key={dept._id} value={dept._id}>
                {dept.title}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block mb-2 text-gray-700">اسم الطبيب</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="p-2 w-full rounded border"
            placeholder="د. الاسم الكامل"
            required
          />
        </div>
        <div>
          <label className="block mb-2 text-gray-700">المسمى الوظيفي</label>
          <input
            type="text"
            name="job"
            value={formData.job}
            onChange={handleChange}
            className="p-2 w-full rounded border"
            placeholder="أخصائي / استشاري"
            required
          />
        </div>
        <div>
          <label className="block mb-2 text-gray-700">التخصص</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="p-2 w-full rounded border"
            placeholder="التخصص الطبي"
            required
          />
        </div>
      </div>

      <div>
        <label className="block mb-2 text-gray-700">نبذة عن الطبيب</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="p-2 w-full rounded border"
          rows="3"
          placeholder="السيرة الذاتية والتخصصات"
          required
        ></textarea>
      </div>
    </>
  );
};

export default BasicInfoForm;