import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShadow, setHasShadow] = useState(false);
  const [isPagesOpen, setIsPagesOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);  
  const [searchQuery, setSearchQuery] = useState("");  
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

  const toggleSearchMenu = () => {
    setIsSearchOpen(!isSearchOpen);  
  };

  const handleSearch = (e) => {
    e.preventDefault();
     console.log("Searching for:", searchQuery);
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
          <div className="hidden space-x-4 md:flex">
            {[
              { to: "/", text: "Home" },
              { to: "/about", text: "About Us" },
              { to: "/doctor", text: "Find Doctor" },
              { to: "/contact", text: "Contact" },
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
                Pages <i className="ml-2 fa-solid fa-caret-down"></i>
              </span>
              {isPagesOpen && (
                <div className="absolute left-0 z-50 w-48 mt-2 bg-white rounded-md shadow-lg">
                  {[
                    { to: "/departments", text: "Departments" },
                    { to: "/gallery", text: "Gallery" },
                    { to: "/appointments", text: "Appointments" },
                    { to: "/timetable", text: "Timetable" },
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
          </div>

           <div className="flex items-center space-x-4">
             <form
              onSubmit={handleSearch}
              className="items-center hidden px-2 bg-gray-100 rounded-md md:flex focus-within:ring-2 focus-within:ring-secondary"
            >
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="px-2 py-2 bg-transparent focus:outline-none"
              />
              <button type="submit" className="text-gray-500">
                <i className="fa-solid fa-magnifying-glass text-text_color"></i>
              </button>
            </form>

             <div className="md:hidden ">
              <i
                className={`fa-solid  text-text_color ${
                  isSearchOpen ? "fa-xmark" : "fa-magnifying-glass"
                } cursor-pointer text-2xl`}
                onClick={toggleSearchMenu}
              ></i>
            </div>

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
                { to: "/", text: "Home" },
                { to: "/about", text: "About Us" },
                { to: "/doctor", text: "Find Doctor" },
                { to: "/contact", text: "Contact" },
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
                Pages <i className="ml-2 fa-solid fa-caret-down"></i>
              </div>
              {isPagesOpen && (
                <div className="pl-8 bg-white">
                  {[
                    { to: "/departments", text: "Departments" },
                    { to: "/gallery", text: "Gallery" },
                    { to: "/appointments", text: "Appointments" },
                    { to: "/timetable", text: "Timetable" },
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
          </>
        )}

         {isSearchOpen && (
          <div className="fixed left-0 z-50 w-full px-4 py-2 bg-gray-200 shadow-md top-16 md:hidden">
            <form
              onSubmit={handleSearch}
              className="flex items-center p-2 bg-white rounded-md focus-within:ring-2 focus-within:ring-secondary"
            >
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-1 bg-transparent focus:outline-none"
              />
              <button type="submit" className="text-gray-500">
                <i className="fa-solid fa-magnifying-glass text-text_color"></i>
              </button>
            </form>
          </div>
        )}
      </nav>
      <div className="h-16"></div>
    </div>
  );
}

export default Navbar;