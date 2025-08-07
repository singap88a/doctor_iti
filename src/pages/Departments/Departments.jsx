// import React from 'react'
import { Link } from "react-router-dom";
import hero from "../../assets/img_doctors/hero_doctors.png";
import Hero_about from "../../Components/About_com/Hero_about";
import DepartmentsData from "./departmentsData";
import { useTranslation } from "react-i18next";

function Departments() {
  const { t } = useTranslation();
  return (
    <div className="">
      <Hero_about
        title={t("departments.hero_title")}
        description={t("departments.hero_desc")}
        img={hero}
        reverseLayout={true}
      />

      <div className="container">
        <div className="grid gap-10 px-4 md:grid-cols-3 sm:grid-cols-1">
          {DepartmentsData.map((item, index) => (
            <Link to={`/department/${item.id}`} key={index}>
              <div className="py-4 px-6 relative transition-shadow bg-white rounded-2xl shadow-[0px_0px_20px_1px_#307ac448] hover:shadow-[0px_0px_20px_10px_#307ac448] h-[100%]">
                <i className={`${item.icon} text-3xl text-secondary rounded-full h-16 w-16 border border-1 border-secondary flex justify-center items-center`}></i>
                <h3 className="py-2 text-2xl font-bold text-text_color">
                  {t(item.title)}
                </h3>
                <p className="pb-6 text-sm text-gray-500">{t(item.description)}</p>
                
                  <div className="absolute bottom-0 right-0 px-4 py-1 rounded-br-2xl rounded-tl-md bg-secondary">
                    <i className="text-white fa-solid fa-arrow-right"></i>
                  </div>
           
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Departments;