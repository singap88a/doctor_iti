import { Link } from "react-router-dom";
import { memo, useEffect, useState } from "react";
import bg_banner from "../../assets/img_home/bg_hero.png";
import { useTranslation } from "react-i18next";

const Departments = memo(() => {
  const { t } = useTranslation();
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    fetch("https://backend-itiddoctor-395g.vercel.app/api/departments")
      .then((res) => res.json())
      .then((data) => setDepartments(data.data))
      .catch((err) => console.error("Error fetching departments:", err));
  }, []);

  return (
    <section
      className="relative mb-[150px]"
      aria-labelledby="departments-title"
    >
      {/* Background Banner */}
      <div>
        <div
          className="container  mx-auto bg-center bg-cover rounded-lg min-h-[300px] sm:px-8 "
          style={{ backgroundImage: `url(${bg_banner})` }}
        >
          <div className="flex items-center justify-center h-20 ">
            {/* Title inside the background */}
            <h2
              id="departments-title"
              className="font-bold sm:text-5xl  text-text_color"
            >
              {t("home_departments.title")}
            </h2>
          </div>
          {/* Cards Section */}
      <div className=" flex justify-center w-full  py-4  ">
        <div className="grid flex-wrap justify-center grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-6">
          {departments.map((item, index) => (
            <Link
              to={`/department/${item?._id}`}
              key={index}
              aria-label={`${item?.title} `}
            >
              <div className="w-full h-40 px-4 py-6 text-center transition-all duration-300 ease-in-out bg-white rounded-lg shadow-md group hover:shadow-xl hover:bg-secondary hover:scale-105">
                {/* Icon */}
                <div className="mb-4 text-4xl text-secondary group-hover:text-white">
                  <i
                    className={`${item?.icon} flex justify-center items-center border border-1 border-secondary rounded-full p-4 w-16 h-16 mx-auto transition-all duration-300 group-hover:border-white`}
                    aria-hidden="true"
                  ></i>
                </div>
                {/* Title */}
                <h3 className="font-medium text-[17px] text-text_color group-hover:text-white">
                  {t(item?.title)}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>




        </div>
      </div>

      
    </section>
  );
});

Departments.displayName = "Departments";

export default Departments;
