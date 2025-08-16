import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Hero_about from "../../components/About_com/Hero_about";
import { FaFacebook, FaTwitter, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import hero_img from "../../assets/img_doctors/hero_doctors.png";

function Doctors() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [departments, setDepartments] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        // Fetch departments
        const deptResponse = await fetch('https://backend-itiddoctor-395g.vercel.app/api/departments');
        if (!deptResponse.ok) throw new Error('Failed to fetch departments');
        const deptData = await deptResponse.json();
        
        // Fetch doctors
        const docResponse = await fetch('https://backend-itiddoctor-395g.vercel.app/api/doctors');
        if (!docResponse.ok) throw new Error('Failed to fetch doctors');
        const docData = await docResponse.json();

        setDoctors(docData.data);
        setDepartments(deptData.data);
        setError(null);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError(t('doctors.fetch_error'));
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [t]);

  const filteredDoctors = selectedCategory === "all" 
    ? doctors 
    : doctors.filter(doctor => doctor.department?._id === selectedCategory);

  return (
    <div>
      <Hero_about
        titleKey="doctors.hero.title"
        descriptionKey="doctors.hero.description"
        reverseLayout={true}
        img={hero_img}
      />

      <div className="container">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 my-6">
          <button
            className={`px-4 py-1 rounded-[20px] border-2 border-secondary ${
              selectedCategory === "all"
                ? "bg-secondary text-white"
                : "hover:bg-[#3c89cd3e] transition-all"
            }`}
            onClick={() => setSelectedCategory("all")}
          >
            {t('doctors.all')}
          </button>

          {departments.map((dept) => (
            <button
              key={dept._id}
              className={`px-4 py-1 rounded-[20px] border-2 border-secondary ${
                selectedCategory === dept._id
                  ? "bg-secondary text-white"
                  : "hover:bg-[#3c89cd3e] transition-all"
              }`}
              onClick={() => setSelectedCategory(dept._id)}
            >
              {dept.translations[i18n.language]?.title || dept.translations.en?.title}
            </button>
          ))}
        </div>

        {/* Doctors Cards */}
        {loading ? (
          <div className="flex items-center justify-center h-64">
            <div className="text-xl text-secondary">{t('doctors.loading')}</div>
          </div>
        ) : error ? (
          <div className="flex items-center justify-center h-64">
            <div className="text-xl text-red-500">{error}</div>
          </div>
        ) : (
          <div className="grid gap-10 text-center md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4">
            {filteredDoctors.length > 0 ? (
              filteredDoctors.map((doctor) => {
                const translation = doctor.translations[i18n.language] || doctor.translations.en;
                const deptTranslation = doctor.department?.translations[i18n.language] || 
                                       doctor.department?.translations.en;
                
                return (
                  <Link to={`/doctor/${doctor._id}`} key={doctor._id} className="card">
                    <div className="bg-[#75a7cf36] rounded-t-md relative">
                      <img 
                        src={doctor.image} 
                        alt={translation.name} 
                        className="w-full h-[250px] object-cover" 
                      />
                      <h2 className="p-2 mx-auto w-[70%] rounded-t-[10px] bg-secondary text-white absolute bottom-0 left-1/2 transform -translate-x-1/2 text-center">
                        {deptTranslation?.title}
                      </h2>
                    </div>
                    <div className="p-4 shadow rounded-b-md">
                      <h1 className="text-xl font-bold text-text_color">
                        {translation.name}
                      </h1>
                      <h4 className="font-semibold text-text_color">
                        {translation.jobTitle}
                      </h4>
                      <p className="my-4 text-Paragraph line-clamp-3">
                        {translation.bio}
                      </p>
                      <div className="flex justify-center mt-4 space-x-4">
                        {doctor.socialMedia && Object.entries(doctor.socialMedia).map(([platform, url], i) => {
                          if (!url) return null;
                          
                          const Icon = {
                            facebook: FaFacebook,
                            twitter: FaTwitter,
                            linkedin: FaLinkedin,
                            whatsapp: FaWhatsapp
                          }[platform];
                          
                          if (!Icon) return null;
                          
                          return (
                            <a
                              key={i}
                              href={url}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`${t('doctors.visit_profile')} ${platform}`}
                              className="bg-[#7fb8f4] text-xl text-white rounded-full p-2 transition-transform duration-300 hover:scale-110 flex items-center justify-center"
                            >
                              <Icon />
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  </Link>
                );
              })
            ) : (
              <h1 className="font-bold text-center text-secondary col-span-full">
                {t('doctors.no_doctors_found')}
              </h1>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Doctors;