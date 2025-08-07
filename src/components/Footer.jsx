import { Link } from "react-router-dom";
import footer from "../assets/img_home/footer_3.png";
import logo from "../assets/logo.png";

const Footer = () => {
  const contactInfo = [
    { icon: "fas fa-map-marker-alt", text: "123 Anywhere St., Any City 12345" },
    { icon: "fas fa-phone", text: "123-456-7890" },
    { icon: "fas fa-envelope", text: "hellocallcenter@gmail.com" },
  ];

  const linksColumn1 = [
    { text: "About Us", href: "about" },
    { text: "Departments", href: "departments" },
    { text: "Doctors", href: "doctor" },
    { text: "Timetable", href: "timetable" },
    { text: "Appointment", href: "appointments" },
    { text: "Testimonials", href: "#" },
  ];

  const linksColumn2 = [
    { text: "Blog", href: "#" },
    { text: "Contact Us", href: "contact" },
    { text: "Gallery", href: "gallery" },
    { text: "Privacy Policy", href: "#" },
    { text: "Terms and Conditions", href: "#" },
  ];

  const socialLinks = [
    { icon: "fab fa-facebook-f", href: "#" },
    { icon: "fab fa-twitter", href: "#" },
    { icon: "fab fa-linkedin", href: "#" },
  ];

  return (
    <footer className="relative pt-16 pb-8 mt-56 bg-gradient-to-b from-blue-100 to-blue-300">
      {/* المثلث العلوي */}
      <div className="absolute top-0 left-0 w-full -translate-y-full h-52">
        <div
          className="absolute w-0 h-52  md:border-l-[49vw] border-l-[50vw] border-l-transparent md:border-r-[49.9vw] border-r-[50vw] border-r-transparent border-b-[120px] border-b-blue-100"
          style={{
            clipPath: "polygon(50% 0, 100% 100%, 0% 100%)",
          }}
        ></div>
      </div>
      <img
        className="absolute top-[-170px] w-52 md:right-[42.4%] right-[21.50%] md:top-[-200px]"
        src={footer}
        alt="Footer Image"
      />
      <div className="container">
        <div className="relative z-10 mx-auto max-w-7xl">
          {/* Footer Top */}
          <div className="flex flex-wrap justify-between gap-8">
            {/* Contact Info */}
            <div className="space-y-4">
              <Link to="/">
                <img src={logo} alt="" className="w-52" />
              </Link>
              <ul className="text-[18px]   space-y-2">
                {contactInfo.map((info, index) => (
                  <li
                    key={index}
                    className="flex items-center font-medium text-text_color"
                  >
                    <i className={`mr-3 text-secondary ${info.icon}`}></i>
                    {info.text}
                  </li>
                ))}
              </ul>
            </div>

            {/* Links */}
            <div className="flex gap-20">
              <ul className="text-[18px] font-medium text-text_color space-y-2">
                {linksColumn1.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="transition hover:text-secondary"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
              <ul className="text-[18px] font-medium text-text_color space-y-2">
                {linksColumn2.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="transition hover:text-secondary"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Subscription */}
            <div>
              <h3 className="text-3xl font-bold text-text_color">
                Be Our Subscribers
              </h3>
              <p className="mt-2 text-sm text-gray-700">
                To get the latest news about health from our experts
              </p>
              <form className="flex flex-1 p-2 mt-4 bg-white border border-gray-300 rounded-full">
                <input
                  type="email"
                  placeholder="example@email.com"
                  className="flex-1 p-2 rounded-full focus:outline-none"
                />
                <button type="submit" className=" butt">
                  Submit →
                </button>
              </form>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="flex flex-col items-center justify-between pt-4 mt-8 border-t border-gray-300 md:flex-row">
            <div className="flex items-center space-x-4">
              <span className="font-medium text-text_color">Follow Us</span>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-blue-500 transition hover:text-secondary"
                >
                  <i
                    className={`${social.icon} text-secondary hover:text-[#3b3d3f] text-xl`}
                  ></i>
                </a>
              ))}
            </div>
            <div className="">
               <p className="text-sm font-medium text-text_color">
                Copyright © 2025. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
