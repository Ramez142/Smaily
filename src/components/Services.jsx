import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react'

export default function Services() {
    const t = useTranslations();
    return (
        <section id='services' className='bg-[#E5E5E5] scroll-mt-28'>
            <div className="container mx-auto w-[90%] py-10">
                <h2 className='mb-4 text-5xl font-bold text-center'>{t('services_title')}</h2>
                <p className='font-semibold text-3xl text-[#4B5563] text-center mb-10'>{t('services_desc')}</p>

                <div className="grid grid-cols-1 gap-5 services-cards md:grid-cols-2 lg:grid-cols-4">

                    <div className="flex flex-col w-full gap-2 p-6 bg-white card1 rounded-4xl">
                        <Image src={'/tooth.svg'} alt='card icon' width={48} height={48} />
                        <p className="text-xl font-semibold">{t('general_dentistry')}</p>
                        <span className="text-lg text-[#4B5563]">{t('general_dentistry_desc')}</span>
                    </div>

                    <div className="flex flex-col w-full gap-2 p-6 bg-white card2 rounded-4xl">
                        <Image src={'/magic.svg'} alt='card icon' width={48} height={48} />
                        <p className="text-xl font-semibold">{t('cosmetic')}</p>
                        <span className="text-lg text-[#4B5563]">{t('cosmetic_desc')}</span>
                    </div>

                    <div className="flex flex-col w-full gap-2 p-6 bg-white card3 rounded-4xl">
                        <Image src={'/teeth.svg'} alt='card icon' width={48} height={48} />
                        <p className="text-xl font-semibold">{t('orthodontics')}</p>
                        <span className="text-lg text-[#4B5563]">{t('orthodontics_desc')}</span>
                    </div>

                    <div className="flex flex-col w-full gap-2 p-6 bg-white card4 rounded-4xl">
                        <Image src={'/spray-can-sparkles.svg'} alt='card icon' width={48} height={48} />
                        <p className="text-xl font-semibold">{t('teeth_whitening')}</p>
                        <span className="text-lg text-[#4B5563]">{t('teeth_whitening_desc')}</span>
                    </div>

                </div>


            </div>
        </section>
    )
}
