import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import bg_hero from "../../assets/img_home/bg_hero.png";
import Appointment from "../Appointments/Appointments";
import { useTranslation } from "react-i18next";
import { FaFacebook, FaTwitter, FaLinkedin, FaWhatsapp } from "react-icons/fa";
function DoctorDetails() {
  const { t } = useTranslation();
  const { id } = useParams();
  const [doctor, setDoctor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://backend-itiddoctor-395g.vercel.app/api/doctors/${id}`);
        
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const data = await response.json();
        setDoctor(data.data);
        setError(null);
      } catch (err) {
        console.error('Error fetching doctor details:', err);
        setError('Failed to load doctor data');
      } finally {
        setLoading(false);
      }
    };

    fetchDoctor();
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-xl text-secondary">Loading...</div>
      </div>
    );
  }

  if (error || !doctor) {
    return <h2 className="text-xl text-center">{error || t('doctors.doctor_not_found', 'Doctor not found')}</h2>;
  }

  return (
    <div>
      {/* Hero Section */}
      <div
        className="w-full bg-center bg-cover mb-[100px] relative"
        style={{ backgroundImage: `url(${bg_hero})` }}
      >
        <div className="flex w-full py-14">
          <div className="hidden w-1/2 md:block"></div>
          <div className="w-full px-5 md:w-1/2">
            <div className="py-10 ">
              <h1 className="text-3xl font-bold text-text_color">
                {doctor.title}
              </h1>
              <h3 className="text-xl text-text_color">{doctor.job}</h3>
              <p className="mt-3 text-text_color">{doctor.description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap gap-8 lg:flex-nowrap">
          {/* Left Section */}
          <div className="w-full p-4 rounded-lg lg:w-1/2">
            {/* Doctor Image and Department */}
            <div className="absolute mb-6 md:top-40 top-[380px] mr-8">
              <img
                src={doctor.image}
                alt={doctor.title}
                className="object-cover shadow-lg rounded-t-md md:w-[100%] w-full h-[300px] bg-white "
              />
              <h1 className="p-2 text-center text-white rounded-b-md bg-secondary md:w-[100%] w-full">
                {doctor.departmentName}
              </h1>
            </div>

            {/* Contact Info */}
            <div className="mt-64 md:mt-48 mb-14">
              <h3 className="mb-2 text-xl font-bold text-text_color">
                <i className="mr-2 fa-solid fa-phone text-secondary"></i>{" "}
                {t('doctors.contact_info', 'Contact Info:')}              
              </h3>

              <p className="flex items-center gap-3 py-3">
                <i className="text-[#77b1c8] fa-solid fa-phone-volume"></i>
                <h1 className="font-medium text-text_color">
                  {doctor.contactInfo.phone}
                </h1>
              </p>
              <p className="flex items-center gap-3">
                <i className="text-[#77b1c8] fa-solid fa-solid fa-envelope"></i>
                <h1 className="font-medium text-text_color">
                  {doctor.contactInfo.email}
                </h1>
              </p>
            </div>

            {/* Appointment Schedules */}
            <div className="mb-6">
              <h3 className="mb-6 text-xl font-bold text-text_color">
                <i className="mr-2 fa-solid fa-calendar-alt text-secondary"></i>{" "}
                {t('doctors.appointment_schedules', 'Appointment Schedules:')}              
              </h3>
              <div className="p-5 pl-6 list-disc rounded-md shadow md:w-[70%] w-full">
                {doctor.appointmentSchedules.map((schedule, index) => (
                  <h1 key={index} className="">
                    <div className="flex justify-between pb-2">
                      <p className="font-semibold text-text_color">
                        {" "}
                        {schedule.day}
                      </p>

                      <p className="font-semibold text-text_color">
                        {" "}
                        <i className="fa-regular fa-clock text-secondary"></i>{" "}
                        {schedule.time}
                      </p>
                    </div>
                  </h1>
                ))}
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full p-4 rounded-lg lg:w-1/2">
            {/* Degrees */}
            <div className="mb-6">
              <h3 className="mb-2 text-xl font-bold text-text_color">
                <i className="mr-2 fa-solid fa-graduation-cap text-secondary"></i>{" "}
                {t('doctors.degrees', 'Degrees:')}              
              </h3>
              <ul className="pl-6 list-disc">
                {doctor.degrees.map((degree, index) => (
                  <li key={index} className="ml-10 text-3xl text-secondary">
                    <h1 className="text-xl text-text_color">
                      {t('doctors.degree_format', '{{degree}} from {{institution}} ({{year}})', {
                        degree: degree.degree,
                        institution: degree.institution,
                        year: degree.year
                      })}
                    </h1>
                  </li>
                ))}
              </ul>
            </div>

            {/* Experience */}
            <div className="mb-6">
              <h3 className="mb-2 text-xl font-bold text-text_color">
                <i className="mr-2 fa-solid fa-briefcase text-secondary"></i>{" "}
                {t('doctors.experience', 'Experience:')}              
              </h3>
              <ul className="pl-6 list-disc">
                {doctor.experiences.map((experience, index) => (
                  <li key={index} className="ml-10 text-3xl text-secondary">
                    <h1 className="text-xl text-text_color">
                      {t('doctors.experience_format', '{{position}} at {{hospital}} ({{years}} years)', {
                        position: experience.position,
                        hospital: experience.hospital,
                        years: experience.years
                      })}
                    </h1>
                  </li>
                ))}
              </ul>
            </div>

            {/* Awards */}
            <div className="mb-6">
              <h3 className="mb-2 text-xl font-bold text-text_color">
                <i className="mr-2 fa-solid fa-trophy text-secondary"></i>{" "}
                {t('doctors.awards', 'Awards & Achievements:')}              
              </h3>
              <ul className="pl-6 list-disc">
                {doctor.awards && doctor.awards.map((award, index) => (
                  <li key={index} className="ml-10 text-3xl text-secondary">
                    <h1 className="text-xl text-text_color">
                      {t('doctors.award_format', '{{award}} ({{year}})', {
                        award: award.award,
                        year: award.year
                      })}
                    </h1>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center w-[35%] px-3 py-2 mt-10 ml-16 space-x-4 rounded-md bg-secondary">
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
                    className="flex items-center justify-center text-2xl text-white transition-colors duration-300 hover:text-slate-700"
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16">
        <Appointment reverseLayout={true} />
      </div>
    </div>
  );
}

export default DoctorDetails;