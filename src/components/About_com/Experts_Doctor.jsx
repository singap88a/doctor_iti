import imge_1 from "../../assets/img_about/Experts_1.png";
import imge_2 from "../../assets/img_about/Experts_2.png";
import { useTranslation } from "react-i18next";

function Experts_Doctor() {
  const { t } = useTranslation();
  const Experts = [
    {
      image: imge_1,
      Job: t('about.experts.head_cardiologist'),
      Description: t('about.experts.head_cardiologist_desc'),
      icon: [
        { iconClass: "fa-brands fa-facebook" },
        { iconClass: "fa-brands fa-linkedin" },
        { iconClass: "fa-brands fa-twitter" },
      ],
      title: t('about.experts.james_lee'),
    },
    {
      image: imge_2,
      Job: t('about.experts.emergency_physician'),
      Description: t('about.experts.emergency_physician_desc'),
      icon: [
        { iconClass: "fa-brands fa-facebook" },
        { iconClass: "fa-brands fa-linkedin" },
        { iconClass: "fa-brands fa-twitter" },
      ],
      title: t('about.experts.john_smith'),
    },
    {
      image: imge_1,
      Job: t('about.experts.pediatrician'),
      Description: t('about.experts.pediatrician_desc'),
      icon: [
        { iconClass: "fa-brands fa-facebook" },
        { iconClass: "fa-brands fa-linkedin" },
        { iconClass: "fa-brands fa-twitter" },
      ],
      title: t('about.experts.susan_bones'),
    },
  ];

  return (
    <div className="mb-[100px]">
      <div className="container px-4 mx-auto">
        {/* Header Section */}
        <p className="text-xl font-semibold text-center text-secondary">
          {t('about.experts.meet_our')}
        </p>
        <h2 className="text-3xl font-bold text-center pb-36 text-text_color">
          {t('about.experts.experts_doctor')}
        </h2>

        {/* Cards Section */}
        <div className="flex flex-wrap justify-center md:gap-10 gap-36">
          {Experts.map((item, index) => (
            <article
              key={index}
              className="w-full sm:w-[48%] lg:w-[30%] bg-white relative shadow-[0px_0px_5px_1px_#307ac448] hover:shadow-xl transition-shadow duration-300 rounded-[20px] text-center pt-20 px-10 pb-8"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={`Photo of ${item.title}`}
                loading="lazy"
                className="absolute m-auto top-[-110px] w-[200px] right-[25%]"
              />

              {/* Title */}
              <h3 className="pt-4 text-lg font-bold text-text_color">
                {item.title}
              </h3>

              {/* Job */}
              <p className="py-2 text-xl text-text_color">{item.Job}</p>

              {/* Description */}
              <p className="text-Paragraph">{item.Description}</p>

              {/* Social Icons */}
              <div className="flex justify-center mt-4 space-x-4">
                {item.icon.map((icon, i) => (
                  <a
                    key={i}
                    href="#"
                    aria-label={`Visit ${item.title}'s ${icon.iconClass.split(" ").pop()} profile`}
                    className={`${icon.iconClass} bg-[#7fb8f4] text-xl text-white rounded-full px-3 py-2 transition-transform duration-300 hover:scale-110`}
                  ></a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experts_Doctor;
 