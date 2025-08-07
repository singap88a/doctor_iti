import React from 'react'
import { useTranslation } from "react-i18next";

export default function Find_Contact() {
  const { t } = useTranslation();
  return (
    <div className='mb-[80px]'>
      <div className='container'>
        <h1 className='py-5 text-3xl font-bold text-text_color'>{t('contact.find_us')}</h1>
        <div className='flex flex-col justify-between gap-7 md:gap-20 md:flex-row'>
          <div className='flex item-center gap-4 py-3 round-[10px] bg-[#D2EAEF] text-secondary w-full px-4'>
            <div className='text-4xl'>
              <i className='fa-solid fa-phone'></i>
            </div>
            <div className='text-text_color'>
              <h1 className='text-2xl font-bold'>{t('contact.phone')}</h1>
              <p className='text-sm'>123-456-7890</p>
            </div>

          </div>

          <div className='flex item-center gap-4 py-3 round-[10px] bg-[#D2EAEF] text-secondary w-full px-4'>
            <div className='text-4xl'>
              <i className='fa-solid fa-envelope'></i>
            </div>
            <div className='text-text_color'>
              <h1 className='text-2xl font-bold'>{t('contact.email')}</h1>
              <p className='text-sm'>hellocallcenter@gmail.com</p>
            </div>

          </div>

          <div className='flex item-center gap-4 py-3 round-[10px] bg-[#D2EAEF] text-secondary w-full px-4'>
            <div className='text-4xl'>
              <i className='fa-solid fa-location-dot'></i>
            </div>
            <div className='text-text_color'>
              <h1 className='text-2xl font-bold'>{t('contact.location')}</h1>
              <p className='text-sm'>123 Anywhere St., Any City, 12345</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}