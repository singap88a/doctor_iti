import { Link } from "react-router-dom";
import imge_3 from "../../assets/img_home/Latest_1.png";
import imge_2 from "../../assets/img_home/Latest_2.webp";
import imge_1 from "../../assets/img_home/Latest_3.png";
import { useTranslation } from "react-i18next";

function Latest_Update() {
  const { t } = useTranslation();
  const Latests = [
    {
      image: imge_1,
      date: t("latest_updates.date"),
      icon: [
        { iconClass: "fa-brands fa-facebook" },
        { iconClass: "fa-brands fa-linkedin" },
        { iconClass: "fa-brands fa-twitter" },
      ],
      title: t("latest_updates.posts.mindfulness.title"),
    },
    {
      image: imge_2,
      date: t("latest_updates.date"),
      icon: [
        { iconClass: "fa-brands fa-facebook" },
        { iconClass: "fa-brands fa-linkedin" },
        { iconClass: "fa-brands fa-twitter" },
      ],
      title: t("latest_updates.posts.exercise.title"),
    },
    {
      image: imge_3,
      date: t("latest_updates.date"),
      icon: [
        { iconClass: "fa-brands fa-facebook" },
        { iconClass: "fa-brands fa-linkedin" },
        { iconClass: "fa-brands fa-twitter" },
      ],
      title: t("latest_updates.posts.diet.title"),
    },
  ];

  return (
    <div className="mb-24">
      <div className="container px-4 mx-auto">
        {/* Header Section */}
        <p className="text-xl font-semibold text-center text-secondary">
          {t("latest_updates.blog_posts")}
        </p>
        <h2 className="pb-10 text-3xl font-bold text-center text-text_color">
          {t("latest_updates.title")}
        </h2>

        {/* Cards Section */}
        <div className="flex flex-wrap justify-center gap-10">
          {Latests.map((item, index) => (
            <div
              key={index}
              className="w-full sm:w-[48%] lg:w-[30%] bg-white shadow-[0px_0px_5px_1px_#307ac448] hover:shadow-xl transition-shadow duration-300 rounded-[20px]"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="object-cover w-full rounded-t-[20px] h-60"
              />
              {/* Card Content */}
              <div className="p-4">
                {/* Date and Icons */}
                <div className="flex items-center gap-7">
                  <p className="mb-2 text-sm text-gray-500">{item.date}</p>
                  <div className="flex space-x-4">
                    {item.icon.map((icon, i) => (
                      <i
                        key={i}
                        className={`${icon.iconClass} text-secondary text-2xl`}
                      ></i>
                    ))}
                  </div>
                </div>

                {/* Title */}
                <h3 className="pt-4 text-lg font-bold text-text_color">
                  {item.title}
                </h3>

                {/* Learn More Button */}
                <div className="py-3">
                  <Link className="font-semibold text-gray-600 transition-all hover:text-secondary">
                    {t("latest_updates.learn_more")}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Latest_Update;
