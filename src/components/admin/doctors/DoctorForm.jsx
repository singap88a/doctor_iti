import React from 'react';
import BasicInfoForm from './BasicInfoForm';
import ImageUploader from './ImageUploader';
import ContactInfoForm from './ContactInfoForm';
import SocialMediaForm from './SocialMediaForm';
import ArrayFieldsForm from './ArrayFieldsForm';

const DoctorForm = ({
  formData,
  handleChange,
  handleArrayChange,
  addArrayItem,
  removeArrayItem,
  handleSubmit,
  resetForm,
  editMode,
  departments,
  fileInputRef
}) => {
  return (
    <div className="p-6 mb-8 bg-white rounded-lg shadow-md">
      <h2 className="mb-4 text-xl font-semibold">
        {editMode ? 'تعديل بيانات الطبيب' : 'إضافة طبيب جديد'}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Information */}
        <BasicInfoForm 
          formData={formData} 
          handleChange={handleChange} 
          departments={departments} 
        />

        {/* Image Upload */}
        <ImageUploader 
          image={formData.image} 
          setFormData={(updater) => {
            // Call the updater function to get the new state
            const updatedData = updater(formData);
            // Directly update the image field using handleChange
            handleChange({
              target: { name: 'image', value: updatedData.image }
            });
          }} 
          fileInputRef={fileInputRef} 
        />

        {/* Contact Information */}
        <ContactInfoForm 
          formData={formData} 
          handleChange={handleChange} 
        />

        {/* Social Media */}
        <SocialMediaForm 
          formData={formData} 
          handleChange={handleChange} 
        />

        {/* Array Fields (Schedules, Degrees, Experiences, Awards) */}
        <ArrayFieldsForm 
          formData={formData}
          handleArrayChange={handleArrayChange}
          addArrayItem={addArrayItem}
          removeArrayItem={removeArrayItem}
        />

        <div className="flex justify-end pt-4">
          {editMode && (
            <button
              type="button"
              onClick={resetForm}
              className="px-4 py-2 mr-2 text-white bg-gray-500 rounded"
            >
              إلغاء
            </button>
          )}
          <button
            type="submit"
            className="px-4 py-2 text-white rounded bg-secondary"
          >
            {editMode ? 'تحديث بيانات الطبيب' : 'إضافة طبيب'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default DoctorForm;