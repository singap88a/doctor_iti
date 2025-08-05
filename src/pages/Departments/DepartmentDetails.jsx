import { Link, useParams } from "react-router-dom";
import DepartmentsData from "./departmentsData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules"; 
import "swiper/css";
import "swiper/css/pagination";
import Treatments from "./Treatments";
import Appointment from "../../components/Home_com/Appointment";

function DepartmentDetails() {
    const { id } = useParams();
    const department = DepartmentsData.find((dept) => dept.id === parseInt(id));
    return(
        <div className="container p-4 mx-auto">
 
      
      <div className="flex flex-col lg:flex-row items-center w-full mb-[70px] mt-10">
        <div className="w-full px-5 lg:w-1/2">
          <h1 className="mb-4 text-4xl font-bold text-text_color">
            {department.title}
          </h1>
          <p className="mb-6 text-xl text-gray-500">{department.description}</p>

          <div className="p-4 bg-white shadow-[0px_0px_20px_1px_#307ac448] rounded-xl w-full lg:w-[80%] mx-auto">
            <div className="flex items-center justify-between pb-3">
              <h1 className="text-2xl font-bold text-text_color">
                Available Doctors
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
                return (
                  <div key={index} className="flex items-center gap-4">
                    <div className="relative">
                      <img
                        src={doctor.img}
                        alt={doctor.name}
                        className="w-16 h-16 rounded-full bg-[#75a7cf89]"
                      />
                      <div className="absolute bottom-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full right-2"></div>
                    </div>

                    <div className="">
                      <h1 className="text-xl font-semibold text-text_color">
                        {doctor.name}
                      </h1>
                      <p className="text-xs text-Paragraph">
                        {doctor.specialty}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="w-full mt-4 lg:w-1/2 lg:mt-0">
          <div>
            <img
              src={department.hero_img}
              alt={department.title}
              className="w-full h-auto rounded-xl"
            />
          </div>
        </div>
      </div>
      <Treatments />

      <div className="px-4 mb-20 lg:px-14">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="w-full"
        >
          {department.doctors.map((doctor, index) => (
            <SwiperSlide key={index} className="p-4">
              <div className="flex flex-col items-center w-full pb-6 rounded-lg lg:flex-row">
                <div className="w-full lg:w-1/2">
                  <img
                    src={doctor.img}
                    alt={doctor.name}
                    className="bg-[#75a7cf36] rounded-xl"
                  />
                </div>
                <div className="w-full mt-4 lg:w-1/2 lg:mt-0 lg:pl-6">
                  <h1 className="flex items-center justify-between px-6 py-6 text-4xl font-bold text-text_color">
                    Related Doctor
                  </h1>

                  <div className="bg-white rounded-lg shadow-[0px_0px_20px_1px_#307ac448]">
                    <div className="p-6">
                      <p className="text-xl font-semibold text-text_color">
                        {doctor.name}
                      </p>
                      <p className="py-2 font-normal text-text_color">
                        {doctor.specialty}
                      </p>
                      <p className="text-gray-500">{doctor.experience}</p>
                      <h1 className="flex mt-4 space-x-4">
                        {department.socialIcons.map((icon, index) => (
                          <a
                            key={index}
                            href="#"
                            className={`text-secondary text-2xl ${icon.iconClass}`}
                          />
                        ))}
                      </h1>
                    </div>
                    <div className="flex justify-between px-6 py-3 text-white rounded-b-lg bg-secondary">
                      <p>Availability</p>
                      <p>
                        <Link className="underline">Booking</Link> →
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
   
      <Appointment />
      </div>


    );

}
export default DepartmentDetails;
