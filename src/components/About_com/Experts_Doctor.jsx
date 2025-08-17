import React, { useEffect, useState } from 'react';
import { useTranslation } from "react-i18next";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";


export default function Experts_Doctor() {
  const { t } = useTranslation();
  const { i18n } = useTranslation();


const [doctors, setDoctors] = useState([]);

useEffect(() => {
  const fetchDoctors = async () => {
    try {
      const res = await fetch("https://backend-itiddoctor-395g.vercel.app/api/doctors");
      const json = await res.json();
      
      if (json.data) {
        setDoctors(json.data.slice(0, 3)); // أول 3 بس
      }
    } catch (error) {
      console.error("Error fetching doctors:", error);
    }
  };

  fetchDoctors();
}, []);

const socialIcons = [
     { icon: <FaFacebook />, link: "#" },
  { icon: <FaTwitter />, link: "#" },
  { icon: <FaLinkedin />, link: "#" },
  ];

  return (
    <div className="mb-[100px]">
    <div className="container px-4 mx-auto">
      {/* Header Section */}
      <p className="text-xl font-semibold text-center text-secondary">
        {t('about.experts.meet_our')}
      </p>
      <h2 className="text-3xl font-bold text-center pb-36 text-text_color">
        {t('about.experts.experts_doctor')}
      </h2>

      {/* Cards Section */}
      <div className="flex flex-wrap justify-center lg:gap-10 md:gap-25 gap-36">
        {doctors.map((doc) => (
          <article
            key={doc._id}
            className="w-full sm:w-[48%] lg:w-[30%] bg-white relative shadow-[0px_0px_5px_1px_#307ac448] hover:shadow-xl transition-shadow duration-300 rounded-[20px] text-center pt-20 px-10 pb-8"
          >
            {/* صورة الدكتور */}
            <img
              src={doc.image}
              alt={`Photo of ${doc.name}`}
              loading="lazy"
              className="absolute m-auto top-[-110px] w-[200px] right-[25%] "
            />

            {/* الاسم */}
            <h3 className="pt-4 text-2xl font-bold text-text_color">
              {doc.translations[i18n.language].name}
            </h3>

            {/* التخصص */}
            <p className="py-2 text-xl text-text_color">{doc.translations[i18n.language].specialty}</p>
            
            {/* السيرة الذاتية */}
            <p className="text-Paragraph text-lg">{doc.translations[i18n.language].bio}</p>
            

            {/* الأيقونات */}
            <div className="flex justify-center mt-4 space-x-4">
            {socialIcons.map((iconObj, i) => (
          <a
            key={i}
            href={iconObj.link}
            aria-label={`Visit ${doc.name}'s social profile`}
            className="bg-[#7fb8f4] text-2xl text-white rounded-full p-2 mx-3 transition-transform duration-300 hover:scale-110"
          >
            {iconObj.icon}
          </a>
        ))}
      </div>
          </article>
        ))}
      </div>
    </div>
  </div>
  );
}
