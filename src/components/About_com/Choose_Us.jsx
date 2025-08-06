import React from 'react';
import Lottie from "lottie-react";
import Choose_Us_anma from "../../Animation/Choose_Us.json";
import { useTranslation } from "react-i18next";

function Choose_Us() {
  const { t } = useTranslation();

  const Chooses = [
    {
      title: t('about.choose_us.experienced_professionals'),
      text: t('about.choose_us.experienced_professionals_text'),
      icon: "fa-solid fa-user-md",
    },
    {
      title: t('about.choose_us.comprehensive_services'),
      text: t('about.choose_us.comprehensive_services_text'),
      icon: "fa-solid fa-notes-medical",
    },
    {
      title: t('about.choose_us.patient_centered'),
      text: t('about.choose_us.patient_centered_text'),
      icon: "fa-solid fa-hand-holding-heart",
    },
    {
      title: t('about.choose_us.state_of_art'),
      text: t('about.choose_us.state_of_art_text'),
      icon: "fa-solid fa-hospital",
    },
  ];

  return (
    <div className="mb-[100px] px-4">
      <div className="container mx-auto">
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="flex items-center justify-center w-full md:w-1/3">
            <Lottie animationData={Choose_Us_anma} className="w-full max-w-md" />
          </div>
          <div className="w-full md:w-2/3">
            <h1 className="mb-6 text-4xl font-bold text-text_color">
              {t('about.choose_us.why_choose_us')}
            </h1>
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
              {Chooses.map((choose, index) => (
                <div className="p-6" key={index}>
                  <i className={`text-4xl mb-4 text-secondary ${choose.icon}`}></i>
                  <h2 className="mb-2 text-2xl font-bold text-text_color">
                    {choose.title}
                  </h2>
                  <p className="text-Paragraph">{choose.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Choose_Us;
