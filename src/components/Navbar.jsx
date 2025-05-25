'use client'

import Image from 'next/image';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { useEffect } from 'react';

export default function Navbar() {
  const locale = useLocale();
  const t = useTranslations();

  useEffect(() => {
    const navLinks = document.querySelector('.nav-links');
    const navCtaBtns = document.querySelector('.nav-cta');
    const menuBtn = document.querySelector('.menu-icon');

    if (menuBtn && navLinks && navCtaBtns) {
      const toggleMenu = () => {
        navLinks.classList.toggle('hidden');
        navCtaBtns.classList.toggle('hidden');
      };

      menuBtn.addEventListener('click', toggleMenu);

      // Cleanup function
      return () => {
        menuBtn.removeEventListener('click', toggleMenu);
      };
    }
  }, []);

  return (
    <nav className="fixed top-10 container w-[90%] left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-xl shadow-[0_0_20px_rgba(0,0,0,0.05)] flex flex-col lg:flex-row gap-5  justify-between items-center rounded-[42px] p-2.5 z-50">
      <div className="flex justify-between w-full lg:w-fit">
        <div className="logo">
          <Link href="#">
            <Image src="/logo.svg" alt="smaily logo" width={170} height={50} />
          </Link>
        </div>

        <div className="transform cursor-pointer menu-icon ltr:mr-5 rtl:ml-5 lg:hidden rtl:-scale-x-100">
          <Image src="/burger-menu.svg" alt="menu" width={50} height={50} />
        </div>
      </div>

      <div className="flex flex-col hidden gap-5 text-center nav-links lg:flex-row lg:justify-between lg:flex">
        <Link href="#home">{t('home')}</Link>
        <Link href="#aboutUs">{t('about_us')}</Link>
        <Link href="#services">{t('Services')}</Link>
        <Link href="#gallery">{t('nav_gallery')}</Link>
        <Link href="#testimonials">{t('testimonials')}</Link>
        <Link href="#contact">{t('Contact_us')}</Link>
      </div>

      <div className="flex hidden gap-5 nav-cta lg:flex">
        <Link href={`/${locale.toLocaleLowerCase() === 'en' ? 'ar' : 'en'}`}>
          <button className="bg-gray !text-black">
            {t('lang')}
            <Image src="/language.svg" alt="language" width={24} height={24} />
          </button>
        </Link>

        <button className="bg-blue">{t('booking_button')}</button>
      </div>
    </nav>
  );
}
