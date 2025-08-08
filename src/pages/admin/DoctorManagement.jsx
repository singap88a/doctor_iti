import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const DoctorManagement = () => {
  const [doctors, setDoctors] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    department: '',
    title: '',
    job: '',
    category: '',
    description: '',
    image: '',
    contactInfo: {
      phone: '',
      email: ''
    },
    socialMedia: {
      facebook: '',
      twitter: '',
      linkedin: '',
      whatsapp: ''
    },
    appointmentSchedules: [
      { day: '', time: '' }
    ],
    degrees: [
      { degree: '', institution: '', year: '' }
    ],
    experiences: [
      { position: '', hospital: '', years: '' }
    ],
    awards: [
      { award: '', year: '' }
    ]
  });
  
  // Function to compress and convert image to base64
  const compressAndConvertImage = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target.result;
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const MAX_WIDTH = 800;
        const MAX_HEIGHT = 800;
        let width = img.width;
        let height = img.height;
        
        if (width > height) {
          if (width > MAX_WIDTH) {
            height *= MAX_WIDTH / width;
            width = MAX_WIDTH;
          }
        } else {
          if (height > MAX_HEIGHT) {
            width *= MAX_HEIGHT / height;
            height = MAX_HEIGHT;
          }
        }
        
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        // Fill canvas with white background first
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(0, 0, width, height);
        ctx.drawImage(img, 0, 0, width, height);
        
        const dataUrl = canvas.toDataURL('image/jpeg', 0.7);
        setFormData(prev => ({ ...prev, image: dataUrl }));
      };
    };
    reader.onerror = (error) => {
      console.error('Error reading file:', error);
      toast.error('Failed to process image');
    };
  };
  
  const fileInputRef = useRef(null);
  const [editMode, setEditMode] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  // Fetch doctors and departments
  const fetchData = async () => {
    try {
      setLoading(true);
      const [doctorsRes, departmentsRes] = await Promise.all([
        axios.get('https://backend-itiddoctor-395g.vercel.app/api/doctors'),
        axios.get('https://backend-itiddoctor-395g.vercel.app/api/departments')
      ]);
      setDoctors(doctorsRes.data.data);
      setDepartments(departmentsRes.data.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      toast.error('Failed to load data');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormData({
        ...formData,
        [parent]: {
          ...formData[parent],
          [child]: value
        }
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Handle array field changes
  const handleArrayChange = (e, index, field, subfield) => {
    const { value } = e.target;
    const updatedArray = [...formData[field]];
    updatedArray[index][subfield] = value;
    setFormData({ ...formData, [field]: updatedArray });
  };

  // Add new item to array fields
  const addArrayItem = (field, template) => {
    setFormData({
      ...formData,
      [field]: [...formData[field], template]
    });
  };

  // Remove item from array fields
  const removeArrayItem = (field, index) => {
    if (formData[field].length > 1) {
      const updatedArray = formData[field].filter((_, i) => i !== index);
      setFormData({ ...formData, [field]: updatedArray });
    } else {
      toast.warning(`At least one ${field} item is required`);
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editMode) {
        await axios.put(`https://backend-itiddoctor-395g.vercel.app/api/doctors/${currentId}`, formData);
        toast.success('Doctor updated successfully');
      } else {
        await axios.post('https://backend-itiddoctor-395g.vercel.app/api/doctors', formData);
        toast.success('Doctor added successfully');
      }
      resetForm();
      fetchData();
    } catch (error) {
      console.error('Error saving doctor:', error);
      toast.error(error.response?.data?.error || 'Failed to save doctor');
    }
  };

  // Reset form
  const resetForm = () => {
    setFormData({
      department: '',
      title: '',
      job: '',
      category: '',
      description: '',
      image: '',
      contactInfo: {
        phone: '',
        email: ''
      },
      socialMedia: {
        facebook: '',
        twitter: '',
        linkedin: '',
        whatsapp: ''
      },
      appointmentSchedules: [
        { day: '', time: '' }
      ],
      degrees: [
        { degree: '', institution: '', year: '' }
      ],
      experiences: [
        { position: '', hospital: '', years: '' }
      ],
      awards: [
        { award: '', year: '' }
      ]
    });
    
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    setEditMode(false);
    setCurrentId(null);
  };

  // Handle edit doctor
  const handleEdit = (doctor) => {
    setFormData({
      department: doctor.department._id || doctor.department,
      title: doctor.title,
      job: doctor.job,
      category: doctor.category,
      description: doctor.description,
      image: doctor.image || '',
      contactInfo: doctor.contactInfo,
      socialMedia: doctor.socialMedia || {
        facebook: '',
        twitter: '',
        linkedin: '',
        whatsapp: ''
      },
      appointmentSchedules: doctor.appointmentSchedules,
      degrees: doctor.degrees,
      experiences: doctor.experiences,
      awards: doctor.awards
    });
    setEditMode(true);
    setCurrentId(doctor._id);
  };

  // Handle delete doctor
  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this doctor?')) {
      try {
        await axios.delete(`https://backend-itiddoctor-395g.vercel.app/api/doctors/${id}`);
        toast.success('Doctor deleted successfully');
        fetchData();
      } catch (error) {
        console.error('Error deleting doctor:', error);
        toast.error(error.response?.data?.error || 'Failed to delete doctor');
      }
    }
  };

  return (
    <div className="container p-4 mx-auto" dir="rtl">
      <h1 className="mb-6 text-2xl font-bold">إدارة الأطباء</h1>
      
      {/* Doctor Form */}
      <div className="p-6 mb-8 bg-white rounded-lg shadow-md">
        <h2 className="mb-4 text-xl font-semibold">
          {editMode ? 'تعديل بيانات الطبيب' : 'إضافة طبيب جديد'}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Information */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label className="block mb-2 text-gray-700">القسم</label>
              <select
                name="department"
                value={formData.department}
                onChange={handleChange}
                className="w-full p-2 border rounded"
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
                className="w-full p-2 border rounded"
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
                className="w-full p-2 border rounded"
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
                className="w-full p-2 border rounded"
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
              className="w-full p-2 border rounded"
              rows="3"
              placeholder="السيرة الذاتية والتخصصات"
              required
            ></textarea>
          </div>

          <div>
            <label className="block mb-2 text-gray-700">صورة الطبيب</label>
            <div 
              className="p-6 text-center transition-colors border-2 border-gray-300 border-dashed rounded-lg cursor-pointer hover:bg-gray-50"
              onClick={() => fileInputRef.current.click()}
              onDrop={(e) => {
                e.preventDefault();
                const file = e.dataTransfer.files[0];
                if (file) {
                  compressAndConvertImage(file);
                }
              }}
              onDragOver={(e) => e.preventDefault()}
            >
              {formData.image ? (
                <div className="relative">
                  <img 
                    src={formData.image} 
                    alt="Doctor preview" 
                    className="mx-auto bg-white max-h-40"
                    style={{ backgroundColor: '#FFFFFF' }}
                  />
                  <p className="mt-2 text-sm text-gray-500">اسحب صورة أخرى هنا أو انقر للتغيير</p>
                </div>
              ) : (
                <div>
                  <i className="mb-2 text-3xl text-gray-400 fas fa-cloud-upload-alt"></i>
                  <p className="text-gray-500">اسحب وأفلت الصورة هنا أو انقر للاختيار</p>
                </div>
              )}
            </div>
            <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files[0];
                if (file) {
                  compressAndConvertImage(file);
                }
              }}
            />
          </div>
 
          {/* Contact Information */}
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

          {/* Social Media */}
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

      {/* Doctors List */}
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
    </div>
        
  );
};

export default DoctorManagement;