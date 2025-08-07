import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Treatments from "./Treatments";
import Appointment from "../../pages/Appointments/Appointments";
import { useTranslation } from "react-i18next";
// Fallback to static data if API fails
import DepartmentsData from "./departmentsData";

function DepartmentDetails() {
  const { t } = useTranslation();
  const { id } = useParams();
  const [department, setDepartment] = useState(null);
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDepartmentDetails = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`https://backend-itiddoctor-395g.vercel.app/api/departments/${id}`);
        const departmentData = response.data.data.department;
        
        // Find static department data for any missing properties
        const staticDepartment = DepartmentsData.find((dept) => dept.id === parseInt(id));
        
        // Merge API data with static data for missing properties
        if (staticDepartment && departmentData) {
          // Add socialIcons from static data if missing in API data
          if (!departmentData.socialIcons && staticDepartment.socialIcons) {
            departmentData.socialIcons = staticDepartment.socialIcons;
          }
          // Add doctors from static data if API returns empty
          if ((!departmentData.doctors || departmentData.doctors.length === 0) && staticDepartment.doctors) {
            departmentData.doctors = staticDepartment.doctors;
          }
        }
        
        setDepartment(departmentData || staticDepartment);
        setDoctors(response.data.data.doctors || departmentData?.doctors || staticDepartment?.doctors || []);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching department details:', err);
        setError('Failed to load department details');
        setLoading(false);
        
        // Fallback to static data if API fails
        const staticDepartment = DepartmentsData.find((dept) => dept.id === parseInt(id));
        if (staticDepartment) {
          setDepartment(staticDepartment);
          setDoctors(staticDepartment.doctors || []);
        }
      }
    };

    fetchDepartmentDetails();
  }, [id]);

  // Helper function for translation keys
  const getDoctorKey = (doctorName) => {
    if (!doctorName) return "";
    return doctorName
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "_")
      .replace(/_md$/, "")
      .replace(/^dr_/, "")
      .replace(/^dr\./, "")
      .replace(/_+$/, "");
  };
  
  if (loading) return <div className="container p-4 mx-auto">Loading...</div>;
  if (error && !department) return <div className="container p-4 mx-auto">Error: {error}</div>;
  if (!department) return <div className="container p-4 mx-auto">Department not found</div>;
  
  // Extract department key for translations
  const departmentKey = department.title && department.title.includes(".") 
    ? department.title.split(".")[1] 
    : "";

  // Combine API doctors with static doctors if available
  const allDoctors = [...doctors, ...(department.doctors || [])].filter(
    (doctor, index, self) =>
      index === self.findIndex((d) => 
        (d._id && d._id === doctor._id) || 
        (d.name && d.name === doctor.name)
      )
  );

  return (
    <div className="container p-4 mx-auto">
      {/* HERO */}
      <div className="flex flex-col lg:flex-row items-center w-full mb-[70px] mt-10">
        <div className="w-full px-5 lg:w-1/2">
          <h1 className="mb-4 text-4xl font-bold text-text_color">
            {t(department.title)}
          </h1>
          <p className="mb-6 text-xl text-gray-500">
            {t(department.description)}
          </p>

          <div className="p-4 bg-white shadow-[0px_0px_20px_1px_#307ac448] rounded-xl w-full lg:w-[80%] mx-auto">
            <div className="flex items-center justify-between pb-3">
              <h1 className="text-2xl font-bold text-text_color">
                {t("departments.available_doctors")}
              </h1>
              <i className="text-xl fa-solid fa-bars-staggered text-text_color"></i>
            </div>

            <div
              className="flex flex-col gap-4 max-h-[160px] overflow-y-auto"
              style={{
                scrollbarColor: "#0e6dba #F5F5F5",
                scrollbarWidth: "thin",
              }}
            >
              {allDoctors.length > 0 ? (
                allDoctors.map((doctor, index) => {
                  const doctorKey = getDoctorKey(doctor.name || doctor.title);
                  return (
                    <div key={doctor._id || doctor.id || index} className="flex items-center gap-4">
                      <div className="relative">
                        <img
                          src={doctor.image || doctor.img || "/default-doctor.jpg"}
                          alt={doctor.name || doctor.title}
                          className="w-16 h-16 rounded-full bg-[#75a7cf89]"
                        />
                        <div className="absolute bottom-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full right-2"></div>
                      </div>

                      <div>
                        <h1 className="text-xl font-semibold text-text_color">
                          {doctor.name || doctor.title}
                        </h1>
                        <p className="text-xs text-Paragraph">
                          {doctor.specialty || doctor.job || t("departments.default_specialty")}
                        </p>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="text-gray-500">{t("departments.no_doctors")}</div>
              )}
            </div>
          </div>
        </div>

        <div className="w-full mt-4 lg:w-1/2 lg:mt-0">
          <img
            src={department.hero_img}
            alt={t(department.title)}
            className="w-full h-auto rounded-xl"
          />
        </div>
      </div>

      {/* Treatments */}
      <Treatments />

      {/* Swiper */}
      <div className="px-4 mb-20 lg:px-14">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="w-full"
          breakpoints={{
            768: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 1,
            },
          }}
        >
          {allDoctors.length > 0 ? (
            allDoctors.map((doctor, index) => {
              const doctorKey = getDoctorKey(doctor.name || doctor.title);
              return (
                <SwiperSlide key={doctor._id || doctor.id || index} className="p-4">
                  <div className="flex flex-col items-center w-full pb-6 rounded-lg lg:flex-row">
                    <div className="w-full lg:w-1/2">
                      <img
                        src={doctor.image || doctor.img || "/default-doctor.jpg"}
                        alt={doctor.name || doctor.title}
                        className="w-[500px] h-[300px] bg-[#75a7cf36] rounded-xl"
                      />
                    </div>

                    <div className="w-full mt-4 lg:w-1/2 lg:mt-0 lg:pl-6">
                      <h1 className="flex items-center justify-between px-6 py-6 text-4xl font-bold text-text_color">
                        {t("departments.related_doctor")}
                      </h1>

                      <div className="bg-white rounded-lg shadow-[0px_0px_20px_1px_#307ac448]">
                        <div className="p-6">
                          <p className="text-xl font-semibold text-text_color">
                            {doctor.name || doctor.title}
                          </p>
                          <p className="py-2 font-normal text-text_color">
                            {doctor.specialty || doctor.job || t("departments.default_specialty")}
                          </p>
                          <p className="text-gray-500">
                            {doctor.experience || t("departments.default_experience")}
                          </p>
                          {(doctor.socialMedia || department.socialIcons) && (
                            <div className="flex mt-4 space-x-4">
                              {doctor.socialMedia?.facebook && (
                                <a href={doctor.socialMedia.facebook} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                                  <i className="fab fa-facebook-f"></i>
                                </a>
                              )}
                              {doctor.socialMedia?.twitter && (
                                <a href={doctor.socialMedia.twitter} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
                                  <i className="fab fa-twitter"></i>
                                </a>
                              )}
                              {doctor.socialMedia?.linkedin && (
                                <a href={doctor.socialMedia.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:text-blue-900">
                                  <i className="fab fa-linkedin-in"></i>
                                </a>
                              )}
                              {doctor.socialMedia?.whatsapp && (
                                <a href={doctor.socialMedia.whatsapp} target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-700">
                                  <i className="fab fa-whatsapp"></i>
                                </a>
                              )}
                              {!doctor.socialMedia && department.socialIcons?.map((icon, idx) => (
                                <a
                                  key={idx}
                                  href="#"
                                  className={`text-secondary text-2xl ${icon.iconClass}`}
                                />
                              ))}
                            </div>
                          )}
                        </div>

                        <div className="flex justify-between px-6 py-3 text-white rounded-b-lg bg-secondary">
                          <p>{t("departments.availability")}</p>
                          <p>
                            <Link to="/appointment" className="underline">
                              {t("departments.booking")}
                            </Link>{" "}
                            →
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })
          ) : (
            <SwiperSlide className="p-4">
              <div className="flex items-center justify-center h-40">
                <p className="text-lg text-gray-500">{t("departments.no_doctors")}</p>
              </div>
            </SwiperSlide>
          )}
        </Swiper>
      </div>

      {/* Appointment */}
      <Appointment />
    </div>
  );
}

export default DepartmentDetails;