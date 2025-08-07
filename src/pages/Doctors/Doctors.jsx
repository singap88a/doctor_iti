import hero_img from "../../assets/img_doctors/hero_doctors.png";
import Hero_about from "../../components/About_com/Hero_about";
import { useState } from "react";
import { Link } from "react-router-dom";
import tracksData from "./tracksData";

function Doctors() {
  
  const [selectedCategory, setSelectedCategory] = useState("All");

  // فلترة البيانات حسب التصنيف فقط بدون تقطيع صفحات
  const filteredTracks =
    selectedCategory === "All"
      ? tracksData
      : tracksData.filter((track) => track.category === selectedCategory);

  return (
    <div>
      <Hero_about
      titleKey="doctors.hero.title"
      descriptionKey="doctors.hero.description"
      reverseLayout={true}
      img={hero_img}
      />

      <div className="container">
        {/* أزرار التصنيف */}
        <div className="flex flex-wrap justify-center gap-2 my-6 space-x-4">
          {[
            "All",
            "Emergency",
            "Dermatology",
            "Pediatric",
            "Orthopedic",
            "Neurology",
          ].map((category) => (
            <button
              key={category}
              className={`px-4 py-1 rounded-[20px] border-2 border-secondary ${
                selectedCategory === category
                  ? "bg-secondary text-white"
                  : "hover:bg-[#3c89cd3e] transition-all"
              }  py-2 px-2`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* كروت الأطباء */}
        <div className="grid gap-10 text-center md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4">
          {filteredTracks.length >= 1 ? (
            filteredTracks.map((track) => (
              <Link to={`/doctor/${track.id}`} key={track.id} className="card">
                <div className="bg-[#75a7cf36] rounded-t-md relative">
                  <img src={track.image} alt="" className="w-full h-auto" />
                  <h2 className="p-2 mx-auto w-[70%] rounded-t-[10px] bg-secondary text-white absolute bottom-0 left-1/2 transform -translate-x-1/2 text-center">
                    {track.Department}
                  </h2>
                </div>
                <div className="p-4 shadow rounded-b-md">
                  <h1 className="text-xl font-bold text-text_color">
                    {track.title}
                  </h1>
                  <h4 className="font-semibold text-text_color">{track.Job}</h4>
                  <p className="my-4 text-Paragraph line-clamp-3">
                    {track.description}
                  </p>
                  <div className="flex justify-center mt-4 space-x-4">
                    {track.icon.map((icon, i) => (
                      <a
                        key={i}
                        href="#"
                        aria-label={`Visit ${track.title}'s ${icon.iconClass
                          .split(" ")
                          .pop()} profile`}
                        className={`${icon.iconClass} bg-[#7fb8f4] text-xl text-white rounded-full px-2 py-1 transition-transform duration-300 hover:scale-110 `}
                      ></a>
                    ))}
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <h1 className="font-bold text-center text-secondary">
              No tracks found
            </h1>
          )}
        </div>
      </div>
    </div>
  );
}

export default Doctors;
