import { useTranslation } from "react-i18next";

function Services() {
  const { t } = useTranslation();
  const Servicess = [
    {
      title: t('about.services.diagnostic_testing'),
      description: t('about.services.diagnostic_testing_desc'),
      icon: "fa-solid fa-vial",  
    },
    {
      title: t('about.services.rehabilitation'),
      description: t('about.services.rehabilitation_desc'),
      icon: "fa-solid fa-person-walking",  
    },
    {
      title: t('about.services.preventive_care'),
      description: t('about.services.preventive_care_desc'),
      icon: "fa-solid fa-shield-virus",  
    },
    {
      title: t('about.services.treatment_conditions'),
      description: t('about.services.treatment_conditions_desc'),
      icon: "fa-solid fa-pills",  
    },
    {
      title: t('about.services.mental_health'),
      description: t('about.services.mental_health_desc'),
      icon: "fa-solid fa-brain",  
    },
  ];
  
  

  return (
    <div className="py-16">
      <div className="container mx-auto">
        <div className="grid gap-10 px-4 md:grid-cols-3 sm:grid-cols-1">
          <div className="">
            <p className="text-xl font-bold text-secondary">{t('about.services.services')}</p>
            <h2 className="pb-10 text-3xl font-bold text-text_color">
              {t('about.services.quality_care')}
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
  );
}

export default Services;