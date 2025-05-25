import { useTranslations } from 'next-intl';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
    const t = useTranslations();
    return (
        <footer className='bg-[#111827]'>
            <div className="container w-[90%] mx-auto py-10 text-white flex flex-col gap-5 md:gap-0 justify-between text-center">

                <div className="flex flex-col items-center justify-between gap-5 pb-5 border-b-2 md:flex-row md:gap-0 border-white/50 md:border-0">
                    <Image src="/logo-white.svg" alt="smaily logo" width={180} height={60} />
                    <div className="flex flex-col gap-10 nav-links md:flex-row md:gap-5 lg:gap-10">
                        <Link href="#home">{t('home')}</Link>
                        <Link href="#aboutUs">{t('about_us')}</Link>
                        <Link href="#services">{t('Services')}</Link>
                        <Link href="#gallery">{t('nav_gallery')}</Link>
                        <Link href="#testimonials">{t('testimonials')}</Link>
                        <Link href="#contact">{t('Contact_us')}</Link>
                    </div>
                </div>

                <div className="flex flex-col-reverse items-center justify-between gap-5 md:flex-row md:gap-0 md:items-start">
                    <p className='text-sm'> {t('copyrights')} </p>
                    <div className="flex flex-col justify-between w-full gap-10 pb-5 text-sm border-b-2 md:flex-row md:gap-5 md:text-xs lg:gap-10 border-white/50 md:border-0 md:w-fit">
                        <Link href="#">{t('privacy_policy')}</Link>
                        <Link href="#">{t('terms_of_use')}</Link>
                        <Link href="#">{t('Cookie_Policy')}</Link>

                    </div>
                </div>
            </div>
        </footer>
    )
}
