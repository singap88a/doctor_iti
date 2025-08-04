import React from 'react'
import { Link } from "react-router-dom";
import imge_1 from "../../assets/img_home/Latest_3.png";
import imge_2 from "../../assets/img_home/Latest_2.png";
import imge_3 from "../../assets/img_home/Latest_1.png";


function Latest_Update() {
  const Latests = [
    {
      image: imge_1,
      date: "May 1, 2023",
      icon: [
        { iconClass: " fa-brands fa-facebook " },
        { iconClass: " fa-brands fa-linkedin" },
        { iconClass: " fa-brands fa-twitter" },
      ],
      title: "The Benefits of Mindfulness Meditation for Stress and Anxiety",
    },
    {
      image: imge_2,
      date: "May 1, 2023",
      icon: [
        { iconClass: " fa-brands fa-facebook " },
        { iconClass: " fa-brands fa-linkedin" },
        { iconClass: " fa-brands fa-twitter" },
      ],
      title: "How Regular Exercise Can Improve Your Heart Health",
    },
    {
      image: imge_3,
      date: "May 1, 2023",
      icon: [
        { iconClass: " fa-brands fa-facebook " },
        { iconClass: " fa-brands fa-linkedin" },
        { iconClass: " fa-brands fa-twitter" },
      ],
      title: "Tips for Maintaining a Healthy Diet in Busy Schedules",
    },
  ];

  return (
    <div className="mb-24">
      <div className="container px-4 mx-auto">
        {/* Header Section */}
        <p className="text-xl font-semibold text-center text-secondary">BLOG POSTS</p>
        <h2 className="pb-10 text-3xl font-bold text-center text-text_color">Latest Updates</h2>

        {/* Cards Section */}
        <div className="flex flex-wrap justify-center gap-10">
          {Latests.map((item, index) => (
            <div
              key={index}
              className="w-full sm:w-[48%] lg:w-[30%] bg-white   shadow-[0px_0px_5px_1px_#307ac448] hover:shadow-xl transition-shadow duration-300 rounded-[20px]"
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
                <h3 className="pt-4 text-lg font-bold text-text_color">{item.title}</h3>

                {/* Learn More Button */}
                <div className="py-3">
                  <Link className="font-semibold text-gray-600 transition-all hover:text-secondary">
                    Learn More
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

