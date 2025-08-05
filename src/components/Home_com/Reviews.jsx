import Review_1 from "../../assets/img_home/Review_1.png";
import Review_2 from "../../assets/img_home/Review_2.png";
import Review_3 from "../../assets/img_home/Review_3.png";


function Reviews() {
  return (
    <div className="mb-[140px]">
      <div className="container">
        <h2 className="text-3xl font-bold text-center text-text_color">
          Some Reviews
        </h2>

        <p className="pb-10 text-xl font-semibold text-center text-secondary">
          Of our clients
        </p>

        {/* Flexbox container */}
        <div className="relative flex flex-col items-center justify-center gap-10 lg:flex-row">
          {/* Left side */}
          <div className="flex flex-col w-full gap-10 px-5 py-5 lg:w-1/2 lg:px-20">
            {/* First Review */}
            <div className="flex items-center gap-3">
              <div>
                <img
                  src={Review_1}
                  alt="reviewe"
                  className="rounded-full w-[55px] h-[55px]"
                />
              </div>
              <div>
                <h1 className="font-bold text-text_color">PAULO HUBERT</h1>
                <p className="text-[15px] text-Paragraph">New York, USA</p>
              </div>
            </div>

            {/* Second Review */}
            <div className="flex items-center w-[80%]  md:w-[60%] gap-3 bg-white rounded-[15px] shadow-[0px_0px_20px_1px_#307ac448] p-2 ml-14 ">
              <div>
                <img
                  src={Review_2}
                  alt="reviewer"
                  className="rounded-full w-[5
                  
                  5px] h-[55px]"
                />
              </div>
              <div>
                <h1 className="font-bold text-text_color">LAURENCE VENDETTA</h1>
                <p className="text-[15px] text-Paragraph">California, USA</p>
              </div>
            </div>

            {/* Third Review */}
            <div className="flex items-center gap-3">
              <div>
                <img
                  src={Review_3}
                  alt="reviewer"
                  className="rounded-full w-[55px] h-[55px]"
                />
              </div>
              <div>
                <h1 className="font-bold text-text_color">CASSANDRA RAUL</h1>
                <p className="text-[15px] text-Paragraph">Florida</p>
              </div>
            </div>
          </div>

          {/* Line with a small circle in the center */}
          <div className="absolute top-1/2 transform -translate-y-1/2 lg:block hidden md:w-[1px] md:h-full md:bg-secondary ">
            {/* Small circles on the line */}
            <div className="absolute w-2 h-2 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary  hidden lg:block  md:left-1/2 md:bottom-[13%]"></div>
            <div className="absolute w-4 h-4 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary  hidden lg:block  md:left-1/2 md:top-1/2"></div>
            <div className="absolute w-2 h-2 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary  hidden lg:block  md:left-1/2 md:top-[13%]"></div>
          </div>

          {/* Right side */}
          <div className="w-full py-5 ml-10 lg:w-1/2">
            <i className="text-4xl fa-solid fa-quote-left text-secondary"></i>
            <div className="ml-14">
              <p className="pb-4 text-Paragraph">
                The pediatrician was great with him and made him feel at ease,
                and the entire staff was kind and attentive. I recently had to
                bring my child to ProHealth for a minor injury, and I was so
                impressed with the care he received.
              </p>
              <div className="flex gap-2 text-xs text-secondary">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star-half-stroke"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;