import React from 'react'
import banner from "../../assets/img_home/bannar.png";
import bg_banner from "../../assets/img_home/bg_banner_2.png";

export default function Banner_About() {
  return (
    <div className='relative mb-24'>

      {/* الخلفية */}
      <div className='container relative px-4 mx-auto bg-center bg-cover'
        style={{ backgroundImage: `url(${bg_banner})` }}>

        <div className='relative flex flex-wrap items-center w-full py-16'>

          {/* النصوص */}
          <div className='w-full px-4 text-center md:w-1/2 md:text-left'>
            <h1 className='text-3xl font-bold text-white md:text-5xl'>
              Don’t Let Your Health Take a Backseat!
            </h1>
            <p className='py-6 text-lg md:text-xl text-paragraph'>
              Schedule an appointment with one of our experienced medical
              professionals today!
            </p>
          </div>

          {/* الصورة */}
          <div className='relative flex justify-center w-full md:w-1/2'>
            <img src={banner} alt='Health banner image'
              className='w-3/4 md:w-1/2 md-absolute md-top[50%] md:translate-y-[-67%]' />
          </div>

        </div>

      </div>
    </div>
  )
}

