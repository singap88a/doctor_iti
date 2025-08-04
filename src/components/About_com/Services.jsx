 import React from 'react'
 
 export default function Services() {
   const Servicess = [
    {
      title: "Diagnostic testing",
      description:
        "Blood tests, imaging studies, and other tests to diagnose health conditions",
      icon: "fa-solid fa-vial",  
    },
    {
      title: "Rehabilitation services",
      description:
        "Physical therapy, occupational therapy, and other services to help patients recover from injuries",
      icon: "fa-solid fa-person-walking",  
    },
    {
      title: "Preventive care",
      description:
        "Annual checkups, immunizations, and health screenings care preventive",
      icon: "fa-solid fa-shield-virus",  
    },
    {
      title: "Treatment for acute and chronic conditions",
      description:
        "Medication management, disease management, and other treatments to improve health outcomes",
      icon: "fa-solid fa-pills",  
    },
    {
      title: "Mental health services",
      description:
        "Counseling, therapy, and other services to help patients manage mental health conditions",
      icon: "fa-solid fa-brain",  
    },
  ];
   return (
     <>
     <div className="py-16">
      <div className="container mx-auto">
        <div className="grid gap-10 px-4 md:grid-cols-3 sm:grid-cols-1">
          <div>
            <p className="text-xl font-bold text-secondary">SERVICES</p>
            <h2 className="pb-10 text-3xl font-bold text-text_color">
              We provide quality care, trust, excellence, and support.
            </h2>
          </div>
          {Servicess.map((item, index) => (
            <div
              key={index}
              className="p-6 relative transition-shadow bg-white rounded-lg shadow-[0px_0px_20px_1px_#307ac448] hover:shadow-[0px_0px_20px_10px_#307ac448]"
            >
              <i className={`${item.icon} text-3xl text-secondary`}></i>
              <h3 className="py-2 text-2xl font-bold text-text_color">
                {item.title}
              </h3>
              <p className="pb-6 text-sm text-gray-500">{item.description}</p>
              <div className="absolute bottom-0 right-0 px-4 py-1 rounded-br-md rounded-tl-md bg-secondary">
                <i className="text-white fa-solid fa-arrow-right "></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
     </>
   )
 }
 