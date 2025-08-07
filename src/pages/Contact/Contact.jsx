import React from 'react'
import Hero_about from "../../components/About_com/Hero_about";
import hero from "../../assets/img_about/about_hero.png";
import Form_Contact from "./Form_Contact";
import Find_Contact from "./Find_Contact";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();
  return (
    <div className='page-contact'>

      <Hero_about
        titleKey="contact.title"
        descriptionKey="contact.description"
        img={hero}
        reverseLayout={true}
      />

      <div className='container my-10'>
        <Form_Contact />
      </div>


      <div className='contact my-10'>
        <Find_Contact />
      </div>


      <div className='container my-10 rounded-md'>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d48003272.32304914!2d80.7652806448904!3d42.74843814624714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2seg!4v1737291108533!5m2!1sar!2seg'
          width="100%"
          height="400px"
          className="rounded-[25px]"



        >

        </iframe>

      </div>
    </div>
  )
}
