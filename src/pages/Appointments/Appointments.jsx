import hero from "../../assets/img_about/about_hero.png";
// import Hero_about from "../../components/About_com/Hero_about";
import Appointment from "../../components/Home_com/Appointment";
 

function Appointments() {
  return (
    <div className="mb-12">
      <Hero_about
        title="Don’t Let Your Health Take a Backseat!"
        description="Fill out the appointment form below to schedule a consultation with one of our healthcare professionals."
        img={hero}
      />
      <Appointment/>
    </div>
  );
}

export default Appointments;
