import React from 'react';

const ContactInfoForm = ({ formData, handleChange }) => {
  return (
    <div className="pt-4 border-t">
      <h3 className="mb-3 text-lg font-medium">معلومات الاتصال</h3>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <label className="block mb-2 text-gray-700">رقم الهاتف</label>
          <input
            type="text"
            name="contactInfo.phone"
            value={formData.contactInfo.phone}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="+20-123-456-789"
            required
          />
        </div>
        <div>
          <label className="block mb-2 text-gray-700">البريد الإلكتروني</label>
          <input
            type="email"
            name="contactInfo.email"
            value={formData.contactInfo.email}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="doctor@example.com"
            required
          />
        </div>
      </div>
    </div>
  );
};

export default ContactInfoForm;