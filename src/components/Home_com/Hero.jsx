import  { useState } from "react";
 import hero from "../../assets/img_home/hero.png";
import bg_hero from "../../assets/img_home/bg_hero.png";
import Book_Now from "./Book_Now";
// import video from "../../assets/img_home/video.mp4";

function Hero() {
  const [showVideo, setShowVideo] = useState(false);

  const handleVideoClick = () => {
    setShowVideo(true);
  };

  const handleCloseVideo = () => {
    setShowVideo(false);
  };

  return (
    <div
      className="relative w-full bg-center bg-cover md:mb-[100px] mb-[430px]"
      style={{ backgroundImage: `url(${bg_hero})` }}
    >
      <div className="container flex flex-col-reverse justify-between py-12 md:flex-row ">
        {/* Text Section */}
        <div className="w-full pt-8 text-center md:w-1/2 md:text-left md:pt-28">
          <h1 className="text-3xl font-bold leading-snug md:text-6xl text-text_color">
            Your Partner in <br /> Health and Wellness
          </h1>
          <p className="py-4 md:py-8 w-full md:w-[80%] mx-auto md:mx-0 text-Paragraph">
            We are committed to providing you with the best medical and
            healthcare services to help you live healthier and happier.
          </p>
          <div
            className="flex items-center justify-center gap-4 pb-5 cursor-pointer md:justify-start text-primary text-secondary"
            onClick={handleVideoClick}
          >
            <i className="text-3xl fa-regular fa-circle-play"></i>
            <h1 className="text-lg">See how we work</h1>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center w-full md:w-1/2">
          <img
            src={hero}
            alt="Healthcare Hero"
            className="w-[80%] md:w-full max-w-[400px] md:max-w-none"
          />
        </div>
      </div>

      <div className="absolute md:bottom-[-50px] container md:left-[6%]  bottom-[-380px]  left-[0%]">
        <Book_Now />
      </div>

      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div className="relative">
            <video controls className="max-w-full max-h-[90vh] rounded-xl">
              <source   />
              Your browser does not support the video tag.
            </video>
            <button
              className="absolute text-4xl text-white top-[-40px] right-5"
              onClick={handleCloseVideo}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Hero;