import hero_img from "../../assets/img_doctors/hero_doctors.png";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Hero_about from "../../components/About_com/Hero_about";
import { FaFacebook, FaTwitter, FaLinkedin, FaWhatsapp } from "react-icons/fa";

function Doctors() {
  const [selectedCategory, setSelectedCategory] = useState("الكل");
  const [departments, setDepartments] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { t } = useTranslation();

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://backend-itiddoctor-395g.vercel.app/api/doctors');
        
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const data = await response.json();
        setDoctors(data.data);

         const uniqueDepartments = [
        ...new Set(data.data.map(doc => doc.department?.title))
      ];
      setDepartments(uniqueDepartments);


        setError(null);
      } catch (err) {
        console.error('Error fetching doctors:', err);
        setError('Failed to load doctors data');
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []);

  // فلترة البيانات حسب التصنيف فقط بدون تقطيع صفحات
  const filteredTracks =
    selectedCategory === "الكل"
      ? doctors
      : doctors.filter((doctor) => doctor.department?.title === selectedCategory);

  return (
    <div>
      <Hero_about
      titleKey="doctors.hero.title"
      descriptionKey="doctors.hero.description"
      reverseLayout={true}
      img={hero_img}
      />

      <div className="container">
        {/* أزرار التصنيف */}
        <div className="flex flex-wrap justify-center gap-2 my-6 space-x-4">
          <button
             className={`px-4 py-1 rounded-[20px] border-2 border-secondary ${
             selectedCategory === "الكل"
               ? "bg-secondary text-white"
               : "hover:bg-[#3c89cd3e] transition-all"
              }`}
              onClick={() => setSelectedCategory("الكل")}
             >
              الكل
             </button>

           {departments.map((dept, idx) => (
           <button
              key={idx}
             className={`px-4 py-1 rounded-[20px] border-2 border-secondary ${
             selectedCategory === dept
              ? "bg-secondary text-white"
              : "hover:bg-[#3c89cd3e] transition-all"
             }`}
               onClick={() => setSelectedCategory(dept)}
             >
               {dept}
            </button>
  ))}
        </div>

        {/* كروت الأطباء */}
        {loading ? (
          <div className="flex items-center justify-center h-64">
            <div className="text-xl text-secondary">Loading...</div>
          </div>
        ) : error ? (
          <div className="flex items-center justify-center h-64">
            <div className="text-xl text-red-500">{error}</div>
          </div>
        ) : (
          <div className="grid gap-10 text-center md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4">
            {filteredTracks.length >= 1 ? (
              filteredTracks.map((doctor) => (
                <Link to={`/doctor/${doctor._id}`} key={doctor._id} className="card">
                  <div className="bg-[#75a7cf36] rounded-t-md relative">
                    <img src={doctor.image} alt="" className="w-full h-[250px] object-cover" />
                    <h2 className="p-2 mx-auto w-[70%] rounded-t-[10px] bg-secondary text-white absolute bottom-0 left-1/2 transform -translate-x-1/2 text-center">
                      {doctor.departmentName}
                    </h2>
                  </div>
                  <div className="p-4 shadow rounded-b-md">
                    <h1 className="text-xl font-bold text-text_color">
                      {doctor.title}
                    </h1>
                    <h4 className="font-semibold text-text_color">{doctor.job}</h4>
                    <p className="my-4 text-Paragraph line-clamp-3">
                      {doctor.description}
                    </p>
                    <div className="flex justify-center mt-4 space-x-4">
                      {doctor.socialMedia && Object.entries(doctor.socialMedia).map(([platform, url], i) => {
                        if (!url) return null;
                        let Icon = null;
                        
                        switch(platform) {
                          case 'facebook':
                            Icon = FaFacebook;
                            break;
                          case 'twitter':
                            Icon = FaTwitter;
                            break;
                          case 'linkedin':
                            Icon = FaLinkedin;
                            break;
                          case 'whatsapp':
                            Icon = FaWhatsapp;
                            break;
                          default:
                            return null;
                        }
                        
                        return (
                          <a
                            key={i}
                            href={url || '#'}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Visit ${doctor.title}'s ${platform} profile`}
                            className="bg-[#7fb8f4] text-xl text-white rounded-full p-2 transition-transform duration-300 hover:scale-110 flex items-center justify-center"
                          >
                            <Icon />
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <h1 className="font-bold text-center text-secondary col-span-full">
                {t('doctors.no_tracks_found', 'No doctors found')}
              </h1>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Doctors;
