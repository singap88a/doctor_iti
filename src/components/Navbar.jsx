import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import { useTranslation } from "react-i18next";

function Navbar() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [hasShadow, setHasShadow] = useState(false);
  const [isPagesOpen, setIsPagesOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);  
   const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setHasShadow(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setIsOpen(false);
    setIsPagesOpen(false);
  };

  const togglePagesMenu = () => {
    setIsPagesOpen(!isPagesOpen);
  };
 

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "ar" : "en");
    document.body.dir = i18n.language === "ar" ? "rtl" : "ltr";
  };

  return (
    <div className="">
      <nav
        className={`text-black fixed top-0 left-0 w-full z-50 transition-shadow duration-300 font-bold ${
          hasShadow ? "bg-white shadow-md shadow-[#307ac487]" : ""
        }`}
      >
        <div className="container relative flex items-center justify-between h-16">
          {/* Logo */}
          <div className="">
            <Link to="/">
              <img src={logo} alt="" className="h-16" />
            </Link>
          </div>

          {/* Links */}
          <div className="items-center hidden space-x-4 md:flex">
            {[
              { to: "/", text: t("navbar.home") },
              { to: "/about", text: t("navbar.about") },
              { to: "/doctor", text: t("navbar.find_doctor") },
              { to: "/contact", text: t("navbar.contact") },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`hover:text-secondary px-2 relative ${
                  location.pathname === link.to
                    ? "text-secondary after:content-[''] after:absolute after:right-0 after:bottom-[-2px] after:w-[35%] after:h-[3px] after:bg-secondary before:content-[''] before:absolute before:left-0 before:top-0 before:w-[35%] before:h-[3px] before:bg-secondary"
                    : ""
                }`}
              >
                {link.text}
              </Link>
            ))}
            <div
              className="relative cursor-pointer group"
              onClick={togglePagesMenu}
            >
              <span className="flex items-center hover:text-secondary">
                {t("navbar.pages")} <i className="ml-2 fa-solid fa-caret-down"></i>
              </span>
              {isPagesOpen && (
                <div className="absolute left-0 z-50 w-48 mt-2 bg-white rounded-md shadow-lg">
                  {[
                    { to: "/departments", text: t("navbar.departments") },
                    { to: "/gallery", text: t("navbar.gallery") },
                    { to: "/appointments", text: t("navbar.appointments") },
                    { to: "/timetable", text: t("navbar.timetable") },
                  ].map((page) => (
                    <Link
                      key={page.to}
                      to={page.to}
                      className="block px-4 py-2 hover:bg-gray-200"
                      onClick={closeMenu}
                    >
                      {page.text}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            {/* زر اللغة */}
            <button
              onClick={toggleLanguage}
              className="px-3 py-1 ml-4 font-bold text-white transition rounded bg-secondary hover:bg-primary "
              style={{ minWidth: 50 }}
              aria-label="Toggle language"
            >
              {i18n.language === "en" ? "عربي" : "EN"}
            </button>
            {/* أزرار تسجيل الدخول والتسجيل بدون ترجمة */}
 
          </div>

           <div className="flex items-center space-x-4">
              <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-text_color focus:outline-none md:hidden"
            >
              <svg
                className="w-10 h-10 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>

         {isOpen && (
          <>
             <div
              className="fixed inset-0 z-40 bg-black bg-opacity-50 top-28"
              onClick={closeMenu}
            ></div>

             <div className="fixed left-0 z-50 w-full text-black bg-white border-b-2 top-16 md:hidden">
              {[
                { to: "/", text: t("navbar.home") },
                { to: "/about", text: t("navbar.about") },
                { to: "/doctor", text: t("navbar.find_doctor") },
                { to: "/contact", text: t("navbar.contact") },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="block px-4 py-2 hover:bg-gray-200"
                  onClick={closeMenu}
                >
                  {link.text}
                </Link>
              ))}
              <div
                className="block px-4 py-2 cursor-pointer hover:bg-gray-200"
                onClick={togglePagesMenu}
              >
                {t("navbar.pages")} <i className="ml-2 fa-solid fa-caret-down"></i>
              </div>
              {isPagesOpen && (
                <div className="pl-8 bg-white">
                  {[
                    { to: "/departments", text: t("navbar.departments") },
                    { to: "/gallery", text: t("navbar.gallery") },
                    { to: "/appointments", text: t("navbar.appointments") },
                    { to: "/timetable", text: t("navbar.timetable") },
                  ].map((page) => (
                    <Link
                      key={page.to}
                      to={page.to}
                      className="block px-4 py-2 hover:bg-gray-200"
                      onClick={closeMenu}
                    >
                      {page.text}
                    </Link>
                  ))}
                </div>
              )}
              {/* زر اللغة في الموبايل */}
              <button
                onClick={toggleLanguage}
                className="block w-full px-4 py-2 mt-2 font-bold text-left text-white bg-secondary"
                aria-label="Toggle language"
              >
                {i18n.language === "en" ? "عربي" : "EN"}
              </button>
 
            </div>
          </>
        )}

        {/* تم حذف البحث في الموبايل */}
      </nav>
      <div className="h-16"></div>
    </div>
  );
}

export default Navbar;