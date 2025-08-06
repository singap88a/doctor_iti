import { Link, useParams } from "react-router-dom";
import DepartmentsData from "./departmentsData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Treatments from "./Treatments";
import Appointment from "../../Components/Home_com/Appointment";
import { useTranslation } from "react-i18next";

function DepartmentDetails() {
  const { t } = useTranslation();
  const { id } = useParams();
  const department = DepartmentsData.find((dept) => dept.id === parseInt(id));

  // استخراج مفتاح القسم من عنوان القسم
  const departmentKey = department.title.split(".")[1];

  const getDoctorKey = (doctorName) => {
    return doctorName
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "_")
      .replace(/_md$/, "")
      .replace(/^dr_/, "")
      .replace(/^dr\./, "")
      .replace(/_+$/, "");
  };

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
              {department.doctors.map((doctor, index) => {
                const doctorKey = getDoctorKey(doctor.name);
                return (
                  <div key={index} className="flex items-center gap-4">
                    <div className="relative">
                      <img
                        src={doctor.img}
                        alt={t(`departments.${departmentKey}.doctors.${doctorKey}.name`)}
                        className="w-16 h-16 rounded-full bg-[#75a7cf89]"
                      />
                      <div className="absolute bottom-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full right-2"></div>
                    </div>

                    <div>
                      <h1 className="text-xl font-semibold text-text_color">
                        {t(`departments.${departmentKey}.doctors.${doctorKey}.name`)}
                      </h1>
                      <p className="text-xs text-Paragraph">
                        {t(`departments.${departmentKey}.doctors.${doctorKey}.specialty`)}
                      </p>
                    </div>
                  </div>
                );
              })}
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
        >
          {department.doctors.map((doctor, index) => {
            const doctorKey = getDoctorKey(doctor.name);
            return (
              <SwiperSlide key={index} className="p-4">
                <div className="flex flex-col items-center w-full pb-6 rounded-lg lg:flex-row">
                  <div className="w-full lg:w-1/2">
                    <img
                      src={doctor.img}
                      alt={t(`departments.${departmentKey}.doctors.${doctorKey}.name`)}
                      className="bg-[#75a7cf36] rounded-xl"
                    />
                  </div>

                  <div className="w-full mt-4 lg:w-1/2 lg:mt-0 lg:pl-6">
                    <h1 className="flex items-center justify-between px-6 py-6 text-4xl font-bold text-text_color">
                      {t("departments.related_doctor")}
                    </h1>

                    <div className="bg-white rounded-lg shadow-[0px_0px_20px_1px_#307ac448]">
                      <div className="p-6">
                        <p className="text-xl font-semibold text-text_color">
                          {t(`departments.${departmentKey}.doctors.${doctorKey}.name`)}
                        </p>
                        <p className="py-2 font-normal text-text_color">
                          {t(`departments.${departmentKey}.doctors.${doctorKey}.specialty`)}
                        </p>
                        <p className="text-gray-500">
                          {t(`departments.${departmentKey}.doctors.${doctorKey}.experience`)}
                        </p>
                        <div className="flex mt-4 space-x-4">
                          {department.socialIcons.map((icon, idx) => (
                            <a
                              key={idx}
                              href="#"
                              className={`text-secondary text-2xl ${icon.iconClass}`}
                            />
                          ))}
                        </div>
                      </div>

                      <div className="flex justify-between px-6 py-3 text-white rounded-b-lg bg-secondary">
                        <p>{t("departments.availability")}</p>
                        <p>
                          <Link className="underline">
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
          })}
        </Swiper>
      </div>

      {/* Appointment */}
      <Appointment />
    </div>
  );
}

export default DepartmentDetails;
