import { memo } from "react";
import Review_1 from "../../assets/img_home/Review_1.png";
import Review_2 from "../../assets/img_home/Review_2.png";
import Review_3 from "../../assets/img_home/Review_3.png";
import { useTranslation } from "react-i18next";

const Reviews = memo(() => {
  const { t } = useTranslation();
  
  const reviewers = [
    {
      image: Review_1,
      name: t("reviews.reviewers.paulo.name"),
      location: t("reviews.reviewers.paulo.location")
    },
    {
      image: Review_2,
      name: t("reviews.reviewers.laurence.name"),
      location: t("reviews.reviewers.laurence.location")
    },
    {
      image: Review_3,
      name: t("reviews.reviewers.cassandra.name"),
      location: t("reviews.reviewers.cassandra.location")
    }
  ];

  return (
    <section className="mb-[140px]" aria-labelledby="reviews-title">
      <div className="container">
        <h2 id="reviews-title" className="text-3xl font-bold text-center text-text_color">
          {t("reviews.title")}
        </h2>

        <p className="pb-10 text-xl font-semibold text-center text-secondary">
          {t("reviews.subtitle")}
        </p>

        {/* Flexbox container */}
        <div className="relative flex flex-col items-center justify-center gap-10 lg:flex-row">
          {/* Left side */}
          <div className="flex flex-col w-full gap-10 px-5 py-5 lg:w-1/2 lg:px-20">
            {reviewers.map((reviewer, index) => (
              <div 
                key={index}
                className={`flex items-center gap-3 ${
                  index === 1 ? "w-[80%] md:w-[60%] bg-white rounded-[15px] shadow-[0px_0px_20px_1px_#307ac448] p-2 ml-14" : ""
                }`}
              >
                <div>
                  <img
                    src={reviewer.image}
                    alt={`${reviewer.name} - ${t("reviews.reviewer")}`}
                    className="rounded-full w-[55px] h-[55px]"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-text_color">{reviewer.name}</h3>
                  <p className="text-[15px] text-Paragraph">{reviewer.location}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Line with a small circle in the center */}
          <div className="absolute top-1/2 transform -translate-y-1/2 hidden md:w-[1px] md:h-full md:bg-secondary sm:block" aria-hidden="true">
            {/* Small circles on the line */}
            <div className="absolute w-2 h-2 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary sm:left-1/2 sm:bottom-[13%] md:left-1/2 md:bottom-[13%]"></div>
            <div className="absolute w-4 h-4 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary sm:left-1/2 sm:top-1/2 md:left-1/2 md:top-1/2"></div>
            <div className="absolute w-2 h-2 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary sm:left-1/2 sm:top-[13%] md:left-1/2 md:top-[13%]"></div>
          </div>

          {/* Right side */}
          <div className="w-full py-5 ml-10 lg:w-1/2">
            <i className="text-4xl fa-solid fa-quote-left text-secondary" aria-hidden="true"></i>
            <div className="ml-14">
              <blockquote className="pb-4 text-Paragraph">
                {t("reviews.testimonial")}
              </blockquote>
              <div className="flex gap-2 text-xs text-secondary" aria-label="5 out of 5 stars">
                <i className="fa-solid fa-star" aria-hidden="true"></i>
                <i className="fa-solid fa-star" aria-hidden="true"></i>
                <i className="fa-solid fa-star" aria-hidden="true"></i>
                <i className="fa-solid fa-star" aria-hidden="true"></i>
                <i className="fa-solid fa-star-half-stroke" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

Reviews.displayName = 'Reviews';

export default Reviews;