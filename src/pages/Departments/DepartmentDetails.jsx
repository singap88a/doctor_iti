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
  const { t, i18n } = useTranslation();
  const { id } = useParams();
  const [department, setDepartment] = useState(null);
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDepartmentDetails = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://backend-itiddoctor-395g.vercel.app/api/departments/${id}?lang=${i18n.language}`
        );

        const departmentData = response.data.data.department;
        const staticDepartment = DepartmentsData.find(
          (dept) => dept.id === parseInt(id)
        );

        // Merge API with static fallback
        let mergedDepartment = departmentData || staticDepartment;

        if (staticDepartment && departmentData) {
          if (!departmentData.socialIcons && staticDepartment.socialIcons) {
            mergedDepartment.socialIcons = staticDepartment.socialIcons;
          }
          if (
            (!departmentData.doctors ||
              departmentData.doctors.length === 0) &&
            staticDepartment.doctors
          ) {
            mergedDepartment.doctors = staticDepartment.doctors;
          }
        }

        setDepartment(mergedDepartment);
        setDoctors(
          response.data.data.doctors ||
            mergedDepartment?.doctors ||
            staticDepartment?.doctors ||
            []
        );
        setError(null);
      } catch (err) {
        console.error("Error fetching department details:", err);
        setError(t("departments.fetch_error"));
        const staticDepartment = DepartmentsData.find(
          (dept) => dept.id === parseInt(id)
        );
        if (staticDepartment) {
          setDepartment(staticDepartment);
          setDoctors(staticDepartment.doctors || []);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchDepartmentDetails();
  }, [id, i18n.language, t]);

  if (loading)
    return <div className="container p-4 mx-auto">{t("departments.loading")}</div>;
  if (error && !department)
    return (
      <div className="container p-4 mx-auto">
        {t("departments.error")}: {error}
      </div>
    );
  if (!department)
    return (
      <div className="container p-4 mx-auto">{t("departments.not_found")}</div>
    );

  // استخدم الترجمة من الـ backend
  const translation =
    department.translations?.[i18n.language] || department.translations?.en || {};

  // Combine doctors (API + static)
  const allDoctors = [...doctors, ...(department.doctors || [])].filter(
    (doctor, index, self) =>
      index ===
      self.findIndex(
        (d) =>
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
            {translation.title || department.title}
          </h1>
          <p className="mb-6 text-xl text-gray-500">
            {translation.description || department.description}
          </p>

          {/* Available Doctors */}
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
                allDoctors.map((doctor, index) => (
                  <div
                    key={doctor._id || doctor.id || index}
                    className="flex items-center gap-4"
                  >
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
                        {doctor.translations?.[i18n.language]?.name ||
                          doctor.name ||
                          doctor.title}
                      </h1>
                      <p className="text-xs text-Paragraph">
                        {doctor.translations?.[i18n.language]?.specialty ||
                          doctor.specialty ||
                          doctor.job ||
                          t("departments.default_specialty")}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-gray-500">{t("departments.no_doctors")}</div>
              )}
            </div>
          </div>
        </div>

        <div className="w-full mt-4 lg:w-1/2 lg:mt-0">
          <img
            src={department.hero_img}
            alt={translation.title || department.title}
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
        >
          {allDoctors.length > 0 ? (
            allDoctors.map((doctor, index) => (
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
                          {doctor.translations?.[i18n.language]?.name ||
                            doctor.name ||
                            doctor.title}
                        </p>
                        <p className="py-2 font-normal text-text_color">
                          {doctor.translations?.[i18n.language]?.specialty ||
                            doctor.specialty ||
                            doctor.job ||
                            t("departments.default_specialty")}
                        </p>
                        <p className="text-gray-500">
                          {doctor.experience ||
                            t("departments.default_experience")}
                        </p>
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
            ))
          ) : (
            <SwiperSlide className="p-4">
              <div className="flex items-center justify-center h-40">
                <p className="text-lg text-gray-500">
                  {t("departments.no_doctors")}
                </p>
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
