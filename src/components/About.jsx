import { useTranslations } from 'next-intl';
import React from 'react'

export default function About() {
    const t = useTranslations();
    return (
        <section id='aboutUs' className='bg-[#F5F5F5] mt-20 pt-10 md:pt-40 pb-10 scroll-mt-28 md:scroll-mt-0'>
            <div className="container w-[90%] mx-auto">
                <h2 className='mb-10 text-5xl font-bold text-center'>{t('about_us')}</h2>

                <div className="mb-8">
                    <span className='font-semibold text-3xl text-[#4B5563] block mb-2'>{t('Clinic_story')}</span>
                    <p>{t('clinic_story_desc')}</p>
                </div>
                <div className="mb-8">
                    <span className='font-semibold text-3xl text-[#4B5563] block mb-2'>{t('Doctors_team')}</span>
                    <p>{t('doctors_team_desc')}</p>
                </div>
                <div className="mb-8">
                    <span className='font-semibold text-3xl text-[#4B5563] block mb-2'>{t('our_message')}</span>
                    <p>{t('our_message_desc_part1')}</p>
                    <p>{t('our_message_desc_part2')}</p>
                </div>
            </div>
        </section>
    )
}
