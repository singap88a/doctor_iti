 import React from 'react'
import { useTranslation } from "react-i18next";
import Lottie from "lottie-react";
import Choose_Us_anma from "../../Animation/Choose_Us.json";

function Choose_Us() {
  const { t } = useTranslation();

  const Chooses = [
    {
      title: t("choose.experienced"),
      description: t("choose.experienced_desc"),
      icon: "fa-solid fa-user-md",
    },
    {
      title: t("choose.comprehensive"),
      description: t("choose.comprehensive_desc"),
      icon: "fa-solid fa-notes-medical",
    },
    {
      title: t("choose.patient_centered"),
      description: t("choose.patient_centered_desc"),
      icon: "fa-solid fa-hand-holding-heart",
    },
    {
      title: t("choose.facilities"),
      description: t("choose.facilities_desc"),
      icon: "fa-solid fa-hospital",
    },
  ];

  return (
    <div className="mb-[100px] p-4">
      <div className="container mx-auto">
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="flex items-center justify-center w-full md:w-1/3">
            <Lottie animationData={Choose_Us_anma} className="w-full max-w-md" />
          </div>
          <div className="w-full md:w-2/3">
            <h1 className="mb-6 text-4xl font-bold text-text_color">
              {t("choose.title")}
            </h1>
            <div className="grid pt-5 gap-6 sm:grid-cols-1 md:grid-cols-2">
              {Chooses.map((choose, index) => (
                <div className="p-6" key={index}>
                  <i className={`text-4xl mb-4 text-secondary ${choose.icon}`}></i>
                  <h2 className="mb-2 text-2xl font-bold text-text_color">
                    {choose.title}
                  </h2>
                  <p className="text-Paragraph">{choose.description}</p>
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
