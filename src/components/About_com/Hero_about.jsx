import React from 'react'
import bg_hero from '../../assets/img_home/bg_hero.png'

export default function Hero_about({title,description,reverseLayout,img}) {
  return (
    <>
    <div
      className="w-full bg-center bg-cover mb-[100px]"
      style={{ backgroundImage: `url(${bg_hero})` }}
    >
      <div className={`container flex flex-col justify-between py-12 ${reverseLayout ? 'md:flex-row-reverse' : 'md:flex-row'}`}> {/* إضافة التعديل هنا */}
        {/* Image Sectionnn */}
        <div className="flex justify-center w-full md:w-1/2">
          <img
            src={img}
            alt="Healthcare Hero"
            className="w-[80%] md:w-[70%] max-w-[400px] md:max-w-none"
          />
        </div>
        {/* Text Sectionnn */}
        <div className="w-full pt-8 text-center md:w-1/2 md:text-left md:pt-28">
          <h1 className="text-3xl font-bold leading-snug md:text-6xl text-text_color">
            {title}
          </h1>
          <p className="py-4 md:py-8 w-full md:w-[80%] mx-auto md:mx-0 text-Paragraph">
            {description}
          </p>
        </div>
      </div>
    </div>
    </>
  )
}
 