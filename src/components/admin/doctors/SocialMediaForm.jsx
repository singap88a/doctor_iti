import React from 'react';

const SocialMediaForm = ({ formData, handleChange }) => {
  return (
    <div className="pt-4 border-t">
      <h3 className="mb-3 text-lg font-medium">وسائل التواصل الاجتماعي</h3>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <label className="block mb-2 text-gray-700">فيسبوك</label>
          <div className="flex items-center overflow-hidden border rounded">
            <span className="p-2 text-white bg-blue-600"><i className="fab fa-facebook-f"></i></span>
            <input
              type="text"
              name="socialMedia.facebook"
              value={formData.socialMedia.facebook}
              onChange={handleChange}
              className="w-full p-2"
              placeholder="رابط صفحة الفيسبوك"
            />
          </div>
        </div>
        <div>
          <label className="block mb-2 text-gray-700">تويتر</label>
          <div className="flex items-center overflow-hidden border rounded">
            <span className="p-2 text-white bg-blue-400"><i className="fab fa-twitter"></i></span>
            <input
              type="text"
              name="socialMedia.twitter"
              value={formData.socialMedia.twitter}
              onChange={handleChange}
              className="w-full p-2"
              placeholder="رابط حساب تويتر"
            />
          </div>
        </div>
        <div>
          <label className="block mb-2 text-gray-700">لينكد إن</label>
          <div className="flex items-center overflow-hidden border rounded">
            <span className="p-2 text-white bg-blue-800"><i className="fab fa-linkedin-in"></i></span>
            <input
              type="text"
              name="socialMedia.linkedin"
              value={formData.socialMedia.linkedin}
              onChange={handleChange}
              className="w-full p-2"
              placeholder="رابط حساب لينكد إن"
            />
          </div>
        </div>
        <div>
          <label className="block mb-2 text-gray-700">واتساب</label>
          <div className="flex items-center overflow-hidden border rounded">
            <span className="p-2 text-white bg-green-500"><i className="fab fa-whatsapp"></i></span>
            <input
              type="text"
              name="socialMedia.whatsapp"
              value={formData.socialMedia.whatsapp}
              onChange={handleChange}
              className="w-full p-2"
              placeholder="رقم الواتساب مع كود الدولة"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaForm;