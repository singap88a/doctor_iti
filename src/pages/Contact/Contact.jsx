import React from 'react'
import Hero_about from "../../components/About_com/Hero_about";
import hero from "../../assets/img_about/about_hero.png";
import Form_Contact from "./Form_Contact";
import Find_Contact from "./Find_Contact";

export default function Contact() {
  return (
    <div className='page-contact'>

      <Hero_about title="Contact Us"
        description="Kindly reach us to get the fastest response and treatment"
        img={hero}
        reverseLayout={true}
      />

      <div className='container my-10'>
        <Form_Contact />
      </div>
    </div>
  )
}
