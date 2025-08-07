import hero from "../../assets/img_about/about_hero.png";
// import Hero_about from "../../components/About_com/Hero_about";
import Appointment from "../../components/Home_com/Appointment";
 

function Appointments() {
  return (
    <div className="mb-12">
      <Hero_about
      titleKey="appointment.hero.title"
      descriptionKey="appointment.hero.description"
      img={hero}
      />
      <Appointment/>
    </div>
  );
}

export default Appointments;
