import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import hero from "../../assets/img_doctors/hero_doctors.png";
import Hero_about from "../../components/About_com/Hero_about";
import DepartmentsData from "./departmentsData"; // Fallback data
import { useTranslation } from "react-i18next";
import axios from 'axios';

function Departments() {
  const { t, i18n } = useTranslation();
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        setLoading(true);
        const response = await axios.get('https://backend-itiddoctor-395g.vercel.app/api/departments');
        setDepartments(response.data.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching departments:', err);
        setError(t('departments.fetch_error', { defaultValue: 'Failed to load departments' }));
        setLoading(false);
        
        // Fallback to static data if API fails
        setDepartments(DepartmentsData);
      }
    };

    fetchDepartments();
  }, []);

  // دالة لاستخراج النص المترجم حسب اللغة الحالية
  const getTranslatedText = (item, field) => {
    if (item.translations) {
      // إذا كان هناك ترجمات مخزنة في الخادم
      return item.translations[i18n.language]?.[field] || 
             item.translations.en?.[field] || 
             item[field];
    }
    // إذا لم يكن هناك ترجمات، استخدم القيمة المباشرة مع الترجمة
    return t(`departments.${item.id}.${field}`, { defaultValue: item[field] });
  };

  return (
    <div className="">
      <Hero_about
        title={t('departments.hero_title', { defaultValue: 'Our Medical Departments' })}
        description={t('departments.hero_desc', { defaultValue: 'Explore our specialized medical departments and find the right care for you' })}
        reverseLayout={true}
        img={hero}
      />
      
      <div className="container">
        {loading ? (
          <div className="flex items-center justify-center py-10">
            <p className="text-xl">{t('departments.loading', { defaultValue: 'Loading departments...' })}</p>
          </div>
        ) : error && departments.length === 0 ? (
          <div className="flex items-center justify-center py-10">
            <p className="text-xl text-red-500">{error}</p>
          </div>
        ) : (
          <div className="grid gap-10 px-4 md:grid-cols-3 sm:grid-cols-1">
            {departments.map((item, index) => (
              <Link to={`/department/${item._id || item.id}`} key={item._id || index}>
                <div className="py-4 px-6 relative transition-shadow bg-white rounded-2xl shadow-[0px_0px_20px_1px_#307ac448] hover:shadow-[0px_0px_20px_10px_#307ac448] h-[100%]">
                  <i className={`${item.icon} text-3xl text-secondary rounded-full h-16 w-16 border border-1 border-secondary flex justify-center items-center`}></i>
                  <h3 className="py-2 text-2xl font-bold text-text_color">
                    {getTranslatedText(item, 'title')}
                  </h3>
                  <p className="pb-6 text-sm text-gray-500">
                    {getTranslatedText(item, 'description')}
                  </p>
                  
                  <div className="absolute bottom-0 right-0 px-4 py-1 rounded-br-2xl rounded-tl-md bg-secondary">
                    <i className="text-white fa-solid fa-arrow-right"></i>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Departments;