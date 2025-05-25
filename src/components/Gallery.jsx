import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Gallery() {
      const t = useTranslations();
  return (
    <section id="gallery" className="bg-[#F5F5F5] py-10 scroll-mt-28">
      <div className="container mx-auto w-[90%]">
        <h2 className="mb-4 text-5xl font-bold text-center">{t('gallery')}</h2>
        <p className='font-semibold text-3xl text-[#4B5563] text-center mb-10'>{t('gallery_desc')}</p>

        {/* <h2 className="mb-6 text-4xl font-bold text-center">Our Clinic in Action</h2> */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[200px]">
          <div className="relative col-span-2 row-span-2">
            <Image src="/gallery/img1.jpg" alt="Gallery 1" fill className="object-cover rounded-xl" />
          </div>
          <div className="relative">
            <Image src="/gallery/img2.jpg" alt="Gallery 2" fill className="object-cover rounded-xl" />
          </div>
          <div className="relative">
            <Image src="/gallery/img3.jpg" alt="Gallery 3" fill className="object-cover rounded-xl" />
          </div>
          <div className="relative row-span-2">
            <Image src="/gallery/img4.jpg" alt="Gallery 4" fill className="object-cover rounded-xl" />
          </div>
          <div className="relative row-span-2">
            <Image src="/gallery/img5.jpg" alt="Gallery 5" fill className="object-cover rounded-xl" />
          </div>
          <div className="relative">
            <Image src="/gallery/img6.jpg" alt="Gallery 6" fill className="object-cover rounded-xl" />
          </div>
          <div className="relative">
            <Image src="/gallery/img7.jpg" alt="Gallery 7" fill className="object-cover rounded-xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
