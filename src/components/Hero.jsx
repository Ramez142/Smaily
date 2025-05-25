
import Image from "next/image";
import React from 'react';
import { useTranslations } from 'next-intl';
import Link from "next/link";



export default function Hero() {
  const t = useTranslations();
  return (
    <main id="home" className="max-h-screen bg-linear-to-b from-[#F0F4F9] text-center pt-[20vh]">
      <div className="hero-content container w-[90%] mx-auto flex flex-col gap-4 relative z-10">
        <h1 className="text-[48px] md:text-[64px] leading-[1.2]">{t('hero_title')}</h1>
        <p>
          {t('hero_description_part1')}
          <br />
          {t('hero_description_part2')}
        </p>

        <div className="flex justify-center CTA rtl:flex-row-reverse gap-9">
          <Link href={'https://wa.me/201019071584'} target="_blank">
            <button className="bg-green">
              {t('whatsapp')}
              <Image src="/whatsapp.svg" alt="whatsapp" width={24} height={24} />
            </button>
          </Link>

          <Link href='#contact'>
            <button className="bg-blue">
              {t('booking_button')}
              <Image src="/calender.svg" alt="calender" width={24} height={24} />
            </button>
          </Link>
        </div>

        <div className="flex items-end justify-between gap-10 px-4 images-container rtl:flex-row-reverse">
          <div className="hidden basis-1/4 md:block">
            <Image
              src='/smile 1.png'
              alt="smile 1"
              layout="responsive"
              width={270}
              height={385}
              className="w-full h-auto"
            />
          </div>
          <div className="md:basis-2/4 w-full relative top-[30px]">
            <Image
              src='/smile 2.png'
              alt="smile 2"
              layout="responsive"
              width={630}
              height={340}
              className="w-full h-auto"
            />
          </div>
          <div className="hidden basis-1/4 md:block">
            <Image
              src='/smile 3.png'
              alt="smile 3"
              layout="responsive"
              width={270}
              height={385}
              className="w-full h-auto"
            />
          </div>
        </div>


      </div>
    </main>
  );
}
