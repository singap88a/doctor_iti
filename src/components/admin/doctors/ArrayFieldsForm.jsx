import React from 'react';

const ArrayFieldsForm = ({ formData, handleArrayChange, addArrayItem, removeArrayItem }) => {
  return (
    <>
      {/* Appointment Schedules */}
      <div className="pt-4 border-t">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-medium">مواعيد العيادة</h3>
          <button
            type="button"
            onClick={() => addArrayItem('appointmentSchedules', { day: '', time: '' })}
            className="px-2 py-1 text-sm text-white bg-green-500 rounded"
          >
            + إضافة موعد
          </button>
        </div>
        {formData.appointmentSchedules.map((schedule, index) => (
          <div key={index} className="flex items-center gap-4 mb-2">
            <div className="flex-1">
              <input
                type="text"
                value={schedule.day}
                onChange={(e) => handleArrayChange(e, index, 'appointmentSchedules', 'day')}
                className="w-full p-2 border rounded"
                placeholder="اليوم"
                required
              />
            </div>
            <div className="flex-1">
              <input
                type="text"
                value={schedule.time}
                onChange={(e) => handleArrayChange(e, index, 'appointmentSchedules', 'time')}
                className="w-full p-2 border rounded"
                placeholder="الوقت"
                required
              />
            </div>
            <button
              type="button"
              onClick={() => removeArrayItem('appointmentSchedules', index)}
              className="px-2 py-1 text-white bg-red-500 rounded"
            >
              حذف
            </button>
          </div>
        ))}
      </div>

      {/* Degrees */}
      <div className="pt-4 border-t">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-medium">الشهادات العلمية</h3>
          <button
            type="button"
            onClick={() => addArrayItem('degrees', { degree: '', institution: '', year: '' })}
            className="px-2 py-1 text-sm text-white bg-green-500 rounded"
          >
            + إضافة شهادة
          </button>
        </div>
        {formData.degrees.map((degree, index) => (
          <div key={index} className="grid items-center grid-cols-3 gap-2 mb-2">
            <input
              type="text"
              value={degree.degree}
              onChange={(e) => handleArrayChange(e, index, 'degrees', 'degree')}
              className="p-2 border rounded"
              placeholder="الشهادة"
              required
            />
            <input
              type="text"
              value={degree.institution}
              onChange={(e) => handleArrayChange(e, index, 'degrees', 'institution')}
              className="p-2 border rounded"
              placeholder="المؤسسة التعليمية"
              required
            />
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={degree.year}
                onChange={(e) => handleArrayChange(e, index, 'degrees', 'year')}
                className="flex-1 p-2 border rounded"
                placeholder="السنة"
                required
              />
              <button
                type="button"
                onClick={() => removeArrayItem('degrees', index)}
                className="px-2 py-1 text-white bg-red-500 rounded"
              >
                حذف
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Experiences */}
      <div className="pt-4 border-t">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-medium">الخبرات العملية</h3>
          <button
            type="button"
            onClick={() => addArrayItem('experiences', { position: '', hospital: '', years: '' })}
            className="px-2 py-1 text-sm text-white bg-green-500 rounded"
          >
            + إضافة خبرة
          </button>
        </div>
        {formData.experiences.map((exp, index) => (
          <div key={index} className="grid items-center grid-cols-3 gap-2 mb-2">
            <input
              type="text"
              value={exp.position}
              onChange={(e) => handleArrayChange(e, index, 'experiences', 'position')}
              className="p-2 border rounded"
              placeholder="المنصب"
              required
            />
            <input
              type="text"
              value={exp.hospital}
              onChange={(e) => handleArrayChange(e, index, 'experiences', 'hospital')}
              className="p-2 border rounded"
              placeholder="المستشفى/المؤسسة"
              required
            />
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={exp.years}
                onChange={(e) => handleArrayChange(e, index, 'experiences', 'years')}
                className="flex-1 p-2 border rounded"
                placeholder="سنوات الخبرة"
                required
              />
              <button
                type="button"
                onClick={() => removeArrayItem('experiences', index)}
                className="px-2 py-1 text-white bg-red-500 rounded"
              >
                حذف
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Awards */}
      <div className="pt-4 border-t">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-medium">الجوائز والتكريمات</h3>
          <button
            type="button"
            onClick={() => addArrayItem('awards', { award: '', year: '' })}
            className="px-2 py-1 text-sm text-white bg-green-500 rounded"
          >
            + إضافة جائزة
          </button>
        </div>
        {formData.awards.map((award, index) => (
          <div key={index} className="flex items-center gap-4 mb-2">
            <div className="flex-1">
              <input
                type="text"
                value={award.award}
                onChange={(e) => handleArrayChange(e, index, 'awards', 'award')}
                className="w-full p-2 border rounded"
                placeholder="اسم الجائزة"
                required
              />
            </div>
            <div className="flex items-center w-1/4 gap-2">
              <input
                type="text"
                value={award.year}
                onChange={(e) => handleArrayChange(e, index, 'awards', 'year')}
                className="w-full p-2 border rounded"
                placeholder="السنة"
                required
              />
              <button
                type="button"
                onClick={() => removeArrayItem('awards', index)}
                className="px-2 py-1 text-white bg-red-500 rounded"
              >
                حذف
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ArrayFieldsForm;