import type { Metadata } from 'next';
import { Playfair_Display, Manrope } from 'next/font/google';
import './globals.css';
import AppShell from '@/components/layout/AppShell';
import { BUSINESS_CONFIG } from '@/data/business';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://express-detailing.in'),
  title: {
    default: `${BUSINESS_CONFIG.brandName} | Everyday Car & Bike Detailing Spa`,
    template: `%s | ${BUSINESS_CONFIG.brandName} Detailing`,
  },
  description: `${BUSINESS_CONFIG.brandName} — Premium car & bike foam wash, deep interior cleaning, diesel chassis washes, rubbing polish, and ceramic coating protection in India. Advertised 45m+ precision wash.`,
  keywords: [
    'Car Wash',
    'Bike Wash',
    'Automotive Detailing',
    'Foam Wash SPA',
    'Ceramic Coating 9H 10H',
    'Deep Interior Cleaning',
    'Rubbing Polish',
    'Diesel Chassis Wash',
    'Ex_press Car Wash',
    'ONE STOP Car & Bike Foam Wash SPA',
    'Bengaluru Detailing',
  ],
  authors: [{ name: BUSINESS_CONFIG.brandName }],
  creator: BUSINESS_CONFIG.brandName,
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://express-detailing.in',
    title: `${BUSINESS_CONFIG.brandName} | Everyday Car & Bike Detailing Spa`,
    description: 'Professional car and bike washing, deep interior cleaning, polishing and ceramic care for everyday passenger vehicles.',
    siteName: BUSINESS_CONFIG.brandName,
    images: [
      {
        url: '/images/maruti-swift.jpg',
        width: 1200,
        height: 630,
        alt: `${BUSINESS_CONFIG.brandName} Everyday Automotive Detailing`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${BUSINESS_CONFIG.brandName} Detailing`,
    description: 'Everyday car and motorcycle detailing spa.',
    images: ['/images/maruti-swift.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AutoRepair',
    name: BUSINESS_CONFIG.brandName,
    alternateName: BUSINESS_CONFIG.signboardAlternativeNames,
    description: BUSINESS_CONFIG.heroSubheadline,
    telephone: BUSINESS_CONFIG.phone,
    currenciesAccepted: 'INR',
    priceRange: '₹350 - ₹16,999',
    openingHours: 'Mo-Su 08:00-20:30',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
      addressLocality: BUSINESS_CONFIG.address.city,
      addressRegion: BUSINESS_CONFIG.address.state,
      postalCode: BUSINESS_CONFIG.address.pincode,
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Car & Bike Detailing Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Full Car Foam Wash',
          },
          price: '400',
          priceCurrency: 'INR',
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Deep Interior Cleaning',
          },
          price: '2500',
          priceCurrency: 'INR',
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Ceramic Coating',
          },
          price: '12999',
          priceCurrency: 'INR',
        },
      ],
    },
  };

  return (
    <html lang="en" className={`${playfair.variable} ${manrope.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-white text-[#253C42] font-sans antialiased selection:bg-[#E4F2EF] selection:text-[#438E88]">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
