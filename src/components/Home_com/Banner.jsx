import { memo } from "react";
import banner from "../../assets/img_home/bannar.png";
import bg_banner from "../../assets/img_home/bg_banner_2.png";
import { useTranslation } from "react-i18next";

const Banner = memo(() => {
  const { t } = useTranslation();
  return (
    <section className="relative mb-24" aria-labelledby="banner-title">
      {/* Background */}
      <div
        className="container relative px-4 mx-auto bg-center bg-cover"
        style={{ backgroundImage: `url(${bg_banner})` }}
      >
        <div className="relative flex flex-wrap items-center w-full py-16">
          {/* Text Content */}
          <div className="w-full px-4 text-center md:w-1/2 md:text-left">
            <h2
              id="banner-title"
              className="text-3xl font-bold text-white md:text-5xl"
            >
              {t("banner.title")}
            </h2>
            <p className="py-6 text-lg md:text-xl text-Paragraph">
              {t("banner.description")}
            </p>
          </div>

          {/* Image */}
          <div className="relative flex justify-center w-full md:w-1/2">
            <img
              src={banner}
              alt={t("banner.alt_text")}
              className="w-3/4 md:w-1/2 md:absolute md:top-[50%] md:translate-y-[-67%]"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
});

Banner.displayName = "Banner";

export default Banner;
