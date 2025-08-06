import React from 'react'
import Banner from "../../assets/img_home/bg_banner.png";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";

function Banner_About() {
  const { t } = useTranslation();
  const { ref, inView } = useInView({
    triggerOnce: true, // العد يحدث مرة واحدة فقط
    threshold: 1, // يبدأ العد عندما يظهر 20% من القسم في نافذة العرض
  });

  const stats = [
    { value: 20, suffix: "+", text: t('about.banner.years_experience') },
    { value: 95, suffix: "%", text: t('about.banner.patient_satisfaction') },
    { value: 5000, suffix: "+", text: t('about.banner.patients_served') },
    { value: 10, suffix: "+", text: t('about.banner.providers_on_staff') },
    { value: 22, suffix: "+", text: t('about.banner.locations') },
  ];

  return (
    <div ref={ref} className="px-4 mb-24">
      <div className="container mx-auto">
        <div
          className="w-full py-16 bg-center bg-cover rounded-2xl md:py-24"
          style={{ backgroundImage: `url(${Banner})` }}
        >
          <div className="flex flex-wrap items-center justify-center gap-10 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="w-1/2 md:w-auto">
                <h1 className="mb-2 text-4xl font-bold text-text_color">
                  {inView ? (
                    <CountUp end={stat.value} duration={20} />
                  ) : (
                    0
                  )}
                  {stat.suffix}
                </h1>
                <p className="text-lg text-Paragraph">{stat.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner_About;