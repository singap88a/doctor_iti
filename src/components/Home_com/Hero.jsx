import { Link } from "react-router-dom";
import { memo } from "react";
import hero from "../../assets/img_home/hero.png";
import bg_hero from "../../assets/img_home/bg_hero.png";
import Book_Now from "./Book_Now";
import { useTranslation } from "react-i18next";
 

const Hero = memo(() => {
  const { t } = useTranslation();
  return (
    <section
      className="relative w-full bg-center bg-cover md:mb-[100px] mb-[430px]"
      style={{ backgroundImage: `url(${bg_hero})` }}
      aria-label={t("hero.alt_text")}
    >
      <div className="container flex flex-col-reverse justify-between py-12 md:flex-row ">
        {/* Text Section */}
        <div className="w-full pt-8 text-center md:w-1/2 md:text-left md:pt-28">
          <h1 className="text-3xl font-bold leading-snug md:text-6xl text-text_color">
            {t("hero.title")}
          </h1>
          <p className="py-4 md:py-8 w-full md:w-[80%] mx-auto md:mx-0 text-Paragraph">
            {t("hero.description")}
          </p>
          <Link 
            className="flex items-center justify-center gap-4 pb-5 transition-colors duration-300 md:justify-start text-primary hover:text-secondary"
            aria-label={t("hero.see_how_we_work")}
          >
            <i className="text-3xl fa-regular fa-circle-play" aria-hidden="true"></i>
            <span className="text-lg">{t("hero.see_how_we_work")}</span>
          </Link>
        </div>

        {/* Image Section */}
        <div className="flex justify-center w-full md:w-1/2">
          <img
            src={hero}
            alt={t("hero.alt_text")}
            className="w-[80%] md:w-full max-w-[400px] md:max-w-none"
            loading="eager"
          />
        </div>
      </div>

       <div className="absolute md:bottom-[-50px] container md:left-[6%]  bottom-[-380px]  left-[0%]">
         <Book_Now/>
      </div>
    </section>
  );
});

Hero.displayName = 'Hero';

export default Hero;