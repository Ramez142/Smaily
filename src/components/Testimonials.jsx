import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react'

export default function Testimonials() {
    const t = useTranslations();

    return (
        <section id='testimonials' className='bg-linear-to-b from-[#F0F4F9] scroll-mt-28'>
            <div className="container mx-auto w-[90%] py-10">
                <h2 className='mb-4 text-5xl font-bold text-center'>{t('testimonials_titles')}</h2>
                <p className='font-semibold text-3xl text-[#4B5563] text-center mb-10'>{t('testimonials_desc')}</p>

                <div className="flex flex-col gap-5 cards lg:flex-row">
                    <div className="card bg-white p-5 flex flex-col gap-5 rounded-2xl shadow-[0_2px_20px_rgba(0,0,0,0.2)]">
                        <div className="flex items-center gap-5">
                            <Image src={'/profile1.png'} alt='profile' width={88} height={88} />
                            <div className="details">
                                <p className='text-2xl font-semibold'>{t('card_1_name')}</p>
                                <Image src={'/stars.svg'} alt='profile' width={85} height={28} />
                            </div>
                        </div>
                        <p>"{t('card_1_desc')}"</p>
                    </div>

                    <div className="card bg-white p-5 flex flex-col gap-5 rounded-2xl shadow-[0_2px_20px_rgba(0,0,0,0.2)]">
                        <div className="flex items-center gap-5">
                            <Image src={'/profile2.png'} alt='profile' width={88} height={88} />
                            <div className="details">
                                <p className='text-2xl font-semibold'>{t('card_2_name')}</p>
                                <Image src={'/stars.svg'} alt='profile' width={85} height={28} />
                            </div>
                        </div>
                        <p>"{t('card_2_desc')}"</p>
                    </div>

                    <div className="card bg-white p-5 flex flex-col gap-5 rounded-2xl shadow-[0_2px_20px_rgba(0,0,0,0.2)]">
                        <div className="flex items-center gap-5">
                            <Image src={'/profile3.png'} alt='profile' width={88} height={88} />
                            <div className="details">
                                <p className='text-2xl font-semibold'>{t('card_3_name')}</p>
                                <Image src={'/stars.svg'} alt='profile' width={85} height={28} />
                            </div>
                        </div>
                        <p>"{t('card_3_desc')}"</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
