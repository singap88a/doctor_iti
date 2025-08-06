
import { useParams } from "react-router-dom";
import tracksData from "./tracksData";
import bg_hero from "../../assets/img_home/bg_hero.png";
import Appointment from "../Appointments/Appointments";
function DoctorDetails() {
  const { id } = useParams();
  const doctor = tracksData.find((track) => track.id === parseInt(id));

  if (!doctor) {
    return <h2 className="text-xl text-center">Doctor not found</h2>;
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
              <h3 className="text-xl text-text_color">{doctor.Job}</h3>
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
                className="object-cover shadow-lg rounded-t-md md:w-[100%] w-full bg-white "
              />
              <h1 className="p-2 text-center text-white rounded-b-md bg-secondary md:w-[100%] w-full">
                {doctor.Department}
              </h1>
            </div>

            {/* Contact Info */}
            <div className="mt-64 md:mt-48 mb-14">
              <h3 className="mb-2 text-xl font-bold text-text_color">
                <i className="mr-2 fa-solid fa-phone text-secondary"></i>{" "}
                Contact Info:
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
                Appointment Schedules:
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
                Degrees:
              </h3>
              <ul className="pl-6 list-disc">
                {doctor.degrees.map((degree, index) => (
                  <li key={index} className="ml-10 text-3xl text-secondary">
                    <h1 className="text-xl text-text_color">
                      {degree.degree} from {degree.institution} ({degree.year})
                    </h1>
                  </li>
                ))}
              </ul>
            </div>

            {/* Experience */}
            <div className="mb-6">
              <h3 className="mb-2 text-xl font-bold text-text_color">
                <i className="mr-2 fa-solid fa-briefcase text-secondary"></i>{" "}
                Experience:
              </h3>
              <ul className="pl-6 list-disc">
                {doctor.experiences.map((experience, index) => (
                  <li key={index} className="ml-10 text-3xl text-secondary">
                    <h1 className="text-xl text-text_color">
                      {experience.position} at {experience.hospital} (
                      {experience.years} years)
                    </h1>
                  </li>
                ))}
              </ul>
            </div>

            {/* Awards */}
            <div className="mb-6">
              <h3 className="mb-2 text-xl font-bold text-text_color">
                <i className="mr-2 fa-solid fa-trophy text-secondary"></i>{" "}
                Awards & Achievements:
              </h3>
              <ul className="pl-6 list-disc">
                {doctor.awards.map((award, index) => (
                  <li key={index} className="ml-10 text-3xl text-secondary">
                    <h1 className="text-xl text-text_color">
                      {award.award} ({award.year})
                    </h1>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center w-32 px-3 py-2 mt-10 ml-16 space-x-4 rounded-md bg-secondary">
              {doctor.icon.map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="text-2xl text-white transition-colors duration-300 hover:text-slate-700"
                >
                  <i className={icon.iconClass}></i>
                </a>
              ))}
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
