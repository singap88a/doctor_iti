import { memo } from "react";
import about from "../../assets/img_home/about.png";
import { useTranslation } from "react-i18next";

const About_Us = memo(() => {
  const { t } = useTranslation();
  return (
    <section className="container" aria-labelledby="about-title">
      <div className="flex flex-col-reverse w-full m-auto md:flex-row mb-[100px]">
        {/* Image Section */}
        <div className="w-full m-auto md:w-1/2">
          <img
            src={about}
            alt={t("about.alt_text")}
            className="md:w-[90%] w-full"
            loading="lazy"
          />
        </div>

        {/* Text Section */}
        <div className="w-full m-auto md:w-1/2 ">
          <h2 id="about-title" className="text-4xl font-bold text-text_color">
            {t("about.title")}
          </h2>
          <h3 className="mt-4 text-xl font-semibold text-secondary">
            {t("about.subtitle")}
          </h3>
          <div className="flex items-center gap-5 mt-10">
            <i
              className="text-3xl font-bold fa-solid fa-arrow-right-long text-secondary"
              aria-hidden="true"
            ></i>
            <p className="text-2xl text-Paragraph">
              {t("about.main_description")}
            </p>
          </div>
          <p className="ml-10 text-xl text-Paragraph mt-7">
            {t("about.detailed_description")}
          </p>
        </div>
      </div>
    </section>
  );
});

About_Us.displayName = "About_Us";

export default About_Us;
