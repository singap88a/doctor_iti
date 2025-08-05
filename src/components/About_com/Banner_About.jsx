import React from 'react'
 import Banner from "../../assets/img_home/bg_banner.png";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function Banner_About() {
   const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 1,
  });

  const stats = [
    { value: 20, suffix: "+", text: "Years of experience" },
    { value: 95, suffix: "%", text: "Patient satisfaction rating" },
    { value: 5000, suffix: "+", text: "Patients served annually" },
    { value: 10, suffix: "+", text: "Healthcare providers on staff" },
    { value: 22, suffix: "+", text: "Convenient locations in the area" },
  ];
  return (
    <>
     <div ref={ref} className="px-4 mb-24">
      <div className="container mx-auto">
        <div
          className="w-full py-16 bg-center bg-cover rounded-2xl md:py-24"
          style={{ backgroundImage: `url(${Banner})` }}
        >
          <div className="flex flex-wrap items-center justify-center gap-10 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="w-1/2 md:w-auto">
                <h1 className="mb-2 text-4xl font-bold text-text_color">
                  {inView ? (
                    <CountUp end={stat.value} duration={20} />
                  ) : (
                    0
                  )}
                  {stat.suffix}
                </h1>
                <p className="text-lg text-Paragraph">{stat.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
