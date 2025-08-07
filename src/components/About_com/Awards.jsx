import Departments from "../../assets/img_home/Departments_2.png";
import { useTranslation } from "react-i18next";
function Awards() {
  const { t } = useTranslation();
  const Departmentss = [
    { title: t('about.awards.malcolm'), image: Departments },
    { title: t('about.awards.himss'), image: Departments },
    { title: t('about.awards.healthgrades'), image: Departments },
    { title: t('about.awards.joint_commission'), image: Departments },
    { title: t('about.awards.aha'), image: Departments },
    { title: t('about.awards.beacon'), image: Departments },
  ];
  
  return (
    <div className="mb-[100px]">
      <section className="container ">
      <p className="text-xl font-semibold text-center text-secondary">
          {t('about.awards.awards')}
        </p>
        <h1 className="text-3xl font-bold text-center text-text_color">
          {t('about.awards.winning_awards')}
        </h1>
        <p className="pt-5 pb-10 text-center text-Paragraph md:w-[30%] w-full mx-auto">
          {t('about.awards.recognized_commitment')}
        </p>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {Departmentss.map((item, index) => (
            <div
              key={index}
              className="p-4 transition-shadow bg-white rounded-lg shadow-[0px_0px_20px_1px_#307ac448] hover:shadow-[0px_0px_20px_10px_#307ac448]"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 p-2 border-2 rounded-md border-secondary bg-secondary"
                />
                <h3 className="font-bold text-[16px] text-text_color">
                  {item.title}
                </h3>
              </div>
             </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Awards;