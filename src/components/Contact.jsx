import { useTranslations } from 'next-intl';
import React from 'react'

export default function Contact() {
    const t = useTranslations();
    return (
        <section id='contact' className='bg-[#F5F5F5] py-20 scroll-mt-12'>
            <form className="container w-[90%] mx-auto bg-white py-10 rounded-4xl">
                <h2 className='mb-4 text-5xl font-bold text-center'>{t('book_title')}</h2>
                <p className='font-semibold text-3xl text-[#4B5563] text-center mb-10'>{t('booking_desc')}</p>

                <div className="w-[90%] mx-auto">
                    <div className="flex flex-col gap-5 md:flex-row">
                        <div className="flex flex-col md:w-1/2">
                            <label htmlFor="name" className='mb-2'> {t('booking_full_name')} </label>
                            <input type="text" id='name' name='name' className='h-10 p-2 ring-1' required />
                        </div>

                        <div className="flex flex-col md:w-1/2">
                            <label htmlFor="phone" className='mb-2'> {t('phone_number')} </label>
                            <input type="tel" id='phone' name='phone' className='h-10 p-2 ring-1' required />
                        </div>
                    </div>

                    <div className="flex flex-col gap-5 my-5 md:flex-row">
                        <div className="flex flex-col md:w-1/2">
                            <label htmlFor="date" className='mb-2'> {t('booking_date')} </label>
                            <input type="date" id='date' name='date' className='h-10 p-2 ring-1' required />
                        </div>

                        <div className="flex flex-col md:w-1/2">
                            <label htmlFor="type" className='mb-2'> {t('booking_service_type')} </label>
                            <select name="type" id="type" className='h-10 p-2 text-base ring-1' required >
                                <option value="general"> {t('general_dentistry')} </option>
                                <option value="cosmetic"> {t('cosmetic')} </option>
                                <option value="orthodontics"> {t('orthodontics')} </option>
                                <option value="whitening"> {t('teeth_whitening')} </option>
                            </select>
                        </div>
                    </div>

                    <div className="flex flex-col gap-10">
                        <div className="flex flex-col w-full">
                            <label htmlFor="name" className='mb-2'> {t('book_notes')} </label>
                            <textarea name="notes" id="notes" className='p-2 ring-1 min-h-32' required ></textarea>
                        </div>


                        <button type='submit' className="mx-auto bg-blue w-fit"> {t('book')} </button>
                    </div>
                </div>

            </form>
        </section>
    )
}
