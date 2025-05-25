import { Metadata } from 'next'
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

import { Cairo } from 'next/font/google';
import '../globals.css';

const cairo = Cairo({
  variable: '--font-cairo',
  subsets: ['arabic', 'latin'],
  weight: ['400', '700'],
  display: 'swap',
});

export const metadata = {
  title: 'Smaily Dental Clinic ',
  description: 'Enjoy a global -level dental care experience using the latest technology and a team that puts your comfort in the first place .',
icons: {
  icon: [
    {
      url: '/light-icon.png',
      media: '(prefers-color-scheme: light)',
    },
    {
      url: '/dark-icon.png',
      media: '(prefers-color-scheme: dark)',
    },
  ],
},
}

export default async function RootLayout({ children, params }) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Determine text direction based on language
  const direction = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <html lang={locale} dir={direction}>
      <body className={`${cairo.variable} antialiased`}>
        <NextIntlClientProvider locale={locale}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
