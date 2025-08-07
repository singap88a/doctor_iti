
import hero from "../../assets/img_about/about_hero.png";
import Hero_about from "../../Components/About_com/Hero_about";
import Activities_1 from "../../assets/img_about/Activities_1.png";
import Activities_2 from "../../assets/img_about/Activities_2.png";
import Activities_4 from "../../assets/img_about/Activities_4.png";
import Activities_5 from "../../assets/img_about/Activities_5.png";
import Activities_6 from "../../assets/img_about/Activities_6.jpeg";
import Activities_7 from "../../assets/img_about/Activities_7.webp";
import Activities_8 from "../../assets/img_about/Activities_8.avif";
import Activities_9 from "../../assets/img_about/Activities_9.png";
import Activities_10 from "../../assets/img_about/Activities_10.webp";


function Gallery() {

  const activities = [
    { src: Activities_1, alt: "Activity 1" },
    { src: Activities_2, alt: "Activity 2" },
    { src: Activities_4, alt: "Activity 4" },
    { src: Activities_5, alt: "Activity 5" },
    { src: Activities_6, alt: "Activity 6" },
    { src: Activities_7, alt: "Activity 7" },
    { src: Activities_8, alt: "Activity 8" },
    { src: Activities_9, alt: "Activity 9" },
    { src: Activities_10, alt: "Activity 10" },

  ]
    return (
    <div>
      <Hero_about
        titleKey="gallery.hero.title"
        descriptionKey="gallery.hero.description"
        img={hero}
        
      />

      {/* Gallery Section */}
      <div className="container gallery">
        {activities.map((activity, index) => {
            return (
              <div
                key={index}
                className= "pics"
              >

                <img src={activity.src} alt={activity.alt}  style={{width:"100%"}} className="rounded-[10px]"/>
      

              </div>
            );
            
          })
        } 
      </div>
    </div>
  );
}
export default Gallery;