 import React from 'react'
import Lottie from "lottie-react";
import Choose_Us_anma from "../../Animation/Choose_Us.json";

 
 export default function Choose_Us() {
  const Chooses =[
    {
      title:'Experienced Medical Professionals',
      icon: 'fa-solid fa-user-md',
      descriprtion: 'Our team includes experienced doctors, nurses, and other healthcare professionals who are dedicated to providing the best possible care to our patients.',
    },
     {
      title:'Comprehensive Services',
      icon: 'fa-solid fa-notes-medical',
      descriprtion: 'We offer a wide range of healthcare services, from preventive care to specialized treatment for complex conditions.',
    },
     {
      title:'Patient-centered Approach',
      icon: 'fa-solid fa-hand-holding-heart',
      descriprtion: 'We believe in treating each patient as an individual, and we take the time to understand your unique health needs and concerns.',
    },
     {
      title: "State-of-the-art Facilities",
      icon: "fa-solid fa-hospital",
      descriprtion: 'Our healthcare center is equipped with the latest technology and equipment to provide our patients with the most advanced care possible.',

    },
  ]
   return (
     <>
     <div className="mb-[100px] p-4">
      <div className="container mx-auto">
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="flex items-center justify-center w-full md:w-1/3">
            <Lottie animationData={Choose_Us_anma} className="w-full max-w-md" />
          </div>
          <div className="w-full md:w-2/3">
            <h1 className="mb-6 text-4xl font-bold text-text_color">
              Why Choose Us
            </h1>
            <div className="grid pt-5 gap-6 sm:grid-cols-1 md:grid-cols-2">
              {Chooses.map((choose, index) => (
                <div
                  className="p-6 "
                  key={index}
                >
                  <i
                    className={`text-4xl mb-4 text-secondary ${choose.icon}`}
                  ></i>
                  <h2 className="mb-2 text-2xl font-bold text-text_color">
                    {choose.title}
                  </h2>
                  <p className="text-Paragraph">{choose.descriprtion}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
     </>
   )
 }
 