import React from 'react'
import Activities_1 from "../../assets/img_about/Activities_1.png";
import Activities_2 from "../../assets/img_about/Activities_2.png";
import Activities_3 from "../../assets/img_about/Activities_3.png";
import Activities_4 from "../../assets/img_about/Activities_4.png";
import Activities_5 from "../../assets/img_about/Activities_5.png";
import Activities_6 from "../../assets/img_about/Activities_6.jpeg";
import { useTranslation } from "react-i18next";

function Activities() {
  const { t } = useTranslation();
  return (
    <div className="mb-[50px]">
      <div className="container px-4 py-16 mx-auto">
        {/* Images Section */}
        <div className="flex flex-col w-full gap-5 lg:flex-row lg:gap-10">
          <div className="w-full lg:w-3/5">
            <div className="flex flex-col justify-between gap-5 lg:flex-row">
              <div className="mb-5 lg:mb-16">
                <p className="text-lg font-semibold text-secondary">
                  {t('about.activities.have_a_look_at')}
                </p>
                <h2 className="text-3xl font-bold lg:text-4xl text-text_color">
                  {t('about.activities.our_facilities_and')} <br />
                  {t('about.activities.latest_activities')}
                </h2>
              </div>
              <div className="lg:w-[48%] w-full mb-5">
                <img
                  src={Activities_6}
                  alt="Facility 6"
                  className="object-cover w-full rounded-[20px]"
                />
              </div>
            </div>

            {/* الصور بجانب بعض */}
            <div className="grid grid-cols-2 gap-5">
              <img
                src={Activities_1}
                alt="Facility 1"
                className="object-cover w-full rounded-lg"
              />
              <img
                src={Activities_2}
                alt="Facility 2"
                className="object-cover w-full rounded-lg"
              />
            </div>

            <div className="mt-5">
              <img
                src={Activities_4}
                alt="Facility 4"
                className="object-cover w-full rounded-lg"
              />
            </div>
          </div>
          <div className="flex flex-col w-full gap-5 lg:w-2/5">
            <img
              src={Activities_3}
              alt="Facility 3"
              className="object-cover w-full rounded-lg"
            />
            <img
              src={Activities_5}
              alt="Facility 5"
              className="object-cover w-full rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Activities;