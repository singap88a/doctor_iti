
import hero from "../../assets/img_about/about_hero.png";
import Activities from "../../components/About_com/Activities";
import Awards from "../../components/About_com/Awards";
import Banner_About from "../../components/About_com/Banner_About";
import Choose_Us from "../../components/About_com/Choose_Us";
import Experts_Doctor from "../../components/About_com/Experts_Doctor";
import Hero_about from "../../Components/About_com/Hero_about";
import Services from "../../components/About_com/Services";

function About() {
  return (
    <div>
      <Hero_about
        title="Welcome to ProHealth Medical & Healthcare Center"
        description="Your Partner in Health and Wellness"
        img={hero}
      />
      <Services />
      <Choose_Us />
      <Banner_About />
      <Experts_Doctor />
      <Activities />
      <Awards />
    </div>
  );
}

export default About;
