import { memo } from "react";
import Values_1 from "../../assets/img_home/Values-1.png";
import Values_2 from "../../assets/img_home/Values-2.png";
import Values_3 from "../../assets/img_home/Values-3.png";
import { useTranslation } from "react-i18next";

const OurValues = memo(() => {
  const { t } = useTranslation();
  const values = [
    {
      title: t("our_values.compassion.title"),
      description: t("our_values.compassion.description"),
      image: Values_1,
    },
    {
      title: t("our_values.excellence.title"),
      description: t("our_values.excellence.description"),
      image: Values_2,
    },
    {
      title: t("our_values.integrity.title"),
      description: t("our_values.integrity.description"),
      image: Values_3,
    },
    {
      title: t("our_values.respect.title"),
      description: t("our_values.respect.description"),
      image: Values_1,
    },
    {
      title: t("our_values.teamwork.title"),
      description: t("our_values.teamwork.description"),
      image: Values_1,
    },
  ];

  return (
    <section className="mb-[100px]" aria-labelledby="values-title">
      <div className="container">
        <h2 id="values-title" className="pb-20 text-3xl font-bold text-center text-text_color">
          {t("our_values.title")}
        </h2>
        <div className="grid gap-10 md:gap-20 md:grid-cols-2 lg:grid-cols-3">
          {values.map((item, index) => (
            <article
              key={index}
              className={`p-6 transition-shadow bg-white rounded-lg shadow-[0px_0px_20px_1px_#307ac448] hover:shadow-[0px_0px_20px_10px_#307ac448] ${
                item.title === t("our_values.excellence.title") ? "transform md:-translate-y-10 -translate-y-0" : ""
              }`}
            >
              <div className="flex items-center gap-4 ">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 p-2 border-2 rounded-full border-secondary bg-secondary"
                  loading="lazy"
                />
                <h3 className="text-2xl font-bold text-text_color">{item.title}</h3>
              </div>
              <p className="mt-4 text-gray-600">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
});

OurValues.displayName = 'OurValues';

export default OurValues;