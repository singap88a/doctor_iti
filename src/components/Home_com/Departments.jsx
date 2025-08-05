 import React from 'react'
 import { Link } from "react-router-dom";
import bg_banner from "../../assets/img_home/bg_hero.png";
import Department from "../../pages/Departments/departmentsData";
 
 export default function Departments() {
   return (
     <>
      <div className="relative mb-[150px]">
      {/* Background Banner */}
      <div>
        <div
          className="container mx-auto bg-center bg-cover rounded-lg h-[770px] md:h-80 sm:px-8 lg:px-16"
          style={{ backgroundImage: `url(${bg_banner})` }}
        >
          <div className="flex md:items-start lg:items-center justify-center h-20 md:h-full">
            {/* Title inside the background */}
            <h2 className="text-3xl font-bold sm:text-4xl text-text_color">
              Departments
            </h2>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="absolute flex justify-center w-full px-10 lg:-bottom-16  md:-bottom-40 bottom-16">
        <div className="grid flex-wrap justify-center grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-5">
          {Department.map((item, index) => (
            <Link to={`/department/${item.id}`}    key={index}>
                     <div
           
              className="w-full px-4 py-6 text-center transition-all duration-300 ease-in-out bg-white rounded-lg shadow-md group hover:shadow-xl hover:bg-secondary hover:scale-105"
            >
              {/* Icon */}
              <div className="mb-4 text-4xl text-secondary group-hover:text-white">
                <i
                  className={`${item.icon} flex justify-center items-center border border-1 border-secondary rounded-full p-4 w-16 h-16 mx-auto transition-all duration-300 group-hover:border-white`}
                ></i>
              </div>
              {/* Title */}
              <h3 className="font-medium text-[17px] text-text_color group-hover:text-white">
                {item.title}
              </h3>
            </div> 
            </Link>
    
          ))}
        </div>
      </div>
    </div>
     </>
   )
 }
 