import bg_banner from "../../assets/img_home/bg_hero.png";
import { useTranslation } from "react-i18next";

function Treatments() {
  const { t } = useTranslation();

  const Treatmentss = [
    {
      icon: "fas fa-syringe",
      title: "treatments.vaccinations.title",
      description: "treatments.vaccinations.description",
    },
    {
      icon: "fas fa-first-aid",
      title: "treatments.acute_illnesses.title",
      description: "treatments.acute_illnesses.description",
    },
    {
      icon: "fas fa-heartbeat",
      title: "treatments.chronic_conditions.title",
      description: "treatments.chronic_conditions.description",
    },
    {
      icon: "fas fa-child",
      title: "treatments.developmental_screenings.title",
      description: "treatments.developmental_screenings.description",
    },
    {
      icon: "fas fa-tshirt",
      title: "treatments.clothing_care.title",
      description: "treatments.clothing_care.description",
    },
  ];

  return (
    <div className="mb-[100px]">
      <p className="container text-xl font-semibold text-secondary">
        {t("treatments.more_type_of")}
      </p>
      <h2 className="pb-10 text-4xl font-bold text-text_color">
        {t("treatments.title")}
      </h2>

      <div
        className="container py-10 bg-center bg-cover rounded-2xl"
        style={{
          backgroundImage: `url(${bg_banner})`,
        }}
      >
        <div className="grid grid-cols-1 gap-4 px-10 py-10 sm:grid-cols-2 lg:grid-cols-5">
          {Treatmentss.map((item, index) => (
            <div className="flex items-start gap-4 p-4" key={index}>
              <div className="items-center text-center">
                <i
                  className={`text-4xl text-secondary rounded-full border border-secondary flex items-center justify-center w-16 h-16 mx-auto ${item.icon}`}
                ></i>
                <h3 className="py-2 text-xl font-bold text-text_color">
                  {t(item.title)}
                </h3>
                <p className="text-sm text-gray-600">{t(item.description)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Treatments;
