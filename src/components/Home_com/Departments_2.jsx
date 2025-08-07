import { memo } from "react";
import Departments from "../../assets/img_home/Departments_2.png";
import { useTranslation } from "react-i18next";

const Departments_2 = memo(() => {
  const { t } = useTranslation();
  const Departmentss = [
    {
      title: t("departments_2.awards.malcolm_baldrige.title"),
      description: t("departments_2.awards.malcolm_baldrige.description"),
      image: Departments,
    },
    {
      title: t("departments_2.awards.himss_davies.title"),
      description: t("departments_2.awards.himss_davies.description"),
      image: Departments,
    },
    {
      title: t("departments_2.awards.healthgrades.title"),
      description: t("departments_2.awards.healthgrades.description"),
      image: Departments,
    },
    {
      title: t("departments_2.awards.joint_commission.title"),
      description: t("departments_2.awards.joint_commission.description"),
      image: Departments,
    },
  ];
  
  return (
    <section className="mb-[100px]" aria-labelledby="departments-2-title">
      <div className="container">
        <h2 id="departments-2-title" className="pb-10 text-3xl font-bold text-text_color">
          {t("departments_2.title")}
        </h2>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {Departmentss.map((item, index) => (
            <article
              key={index}
              className="p-6 transition-shadow bg-white rounded-lg shadow-[0px_0px_20px_1px_#307ac448] hover:shadow-[0px_0px_20px_10px_#307ac448]"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 p-2 border-2 rounded-md border-secondary bg-secondary"
                  loading="lazy"
                />
                <h3 className="font-bold text-[16px] text-text_color">
                  {item.title}
                </h3>
              </div>
              <p className="mt-4 text-gray-600">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
});

Departments_2.displayName = 'Departments_2';

export default Departments_2;