import React from 'react'
import about from "../../assets/img_home/about.png";

  function About_Us() {
return (
<div className="container ">
      <div className="flex flex-col-reverse w-full m-auto md:flex-row mb-[100px]">
        {/* Image Section */}
        <div className="w-full m-auto md:w-1/2">
          <img src={about} alt="About ProHealth team" className="md:w-[90%] w-full" />
        </div>
        {/* Text Section */}
        <div className="w-full m-auto md:w-1/2 ">
          <h1 className="text-4xl font-bold text-text_color">About Us</h1>
          <h3 className="mt-4 text-xl font-semibold text-secondary">PRO HEALTH</h3>
          <div className="flex items-center gap-5 mt-10">
            <i className="text-3xl font-bold fa-solid fa-arrow-right-long text-secondary"></i>
            <p className="text-2xl text-Paragraph">
              ProHealth is a team of experienced medical professionals.
            </p>
          </div>
          <p className="ml-10 text-xl text-Paragraph mt-7">
            Dedicated to providing top-quality healthcare services. We believe
            in a holistic approach to healthcare that focuses on treating the
            whole person, not just the illness or symptoms.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About_Us;