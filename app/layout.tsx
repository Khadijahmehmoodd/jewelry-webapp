import React, { PropsWithChildren, Suspense } from 'react';
import { Metadata } from 'next';
import { getURL } from '@/lib/utils';
import 'styles/main.css';
import { Footer, Navbar } from '@/components/layout';
import { Toaster } from '@/components/ui/toasts/toaster';
import { Archivo } from 'next/font/google';
import NextTopLoader from 'nextjs-toploader';

const archivo = Archivo({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-archivo',
});

const meta = {
  title: 'Jewels  ',
  description: 'Your source for stylish and contemporary jewelry.',
  cardImage: '/og.png',
  robots: 'nofollow, noindex',
  favicon: '/iconfav.png',
  url: getURL(),
};

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: meta.title,
    description: meta.description,
    referrer: 'origin-when-cross-origin',
    keywords: ['Khadija', 'Supabase', 'Next.js', 'Stripe', 'Subscription'],
    authors: [{ name: 'Khadija', url: 'https://jewelry-webapp.vercel.app/' }],
    creator: 'New',
    publisher: 'Vercel',
    robots: meta.robots,
    icons: { icon: meta.favicon },
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'),
    openGraph: {
      url: meta.url,
      title: meta.title,
      description: meta.description,
      images: [meta.cardImage],
      type: 'website',
      siteName: meta.title,
    },
    twitter: {
      card: 'summary_large_image',
      site: '@Vercel',
      creator: '@Vercel',
      title: meta.title,
      description: meta.description,
      images: [meta.cardImage],
    },
  };
}


export default async function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang='en' className={`${archivo.variable} font-sans`}>
      <body className='loading bg-canvas-bg-subtle'>
        <NextTopLoader color='#8e4ec6' showSpinner={false} />
        <Navbar />
        <main
          id='skip'
          className='md:min-h[calc(100dvh-5rem)] min-h-[calc(100dvh-4rem)]'
        >
          {children}
        </main>
        <Footer />
        <Suspense>
          <Toaster />
        </Suspense>
      </body>
    </html>
  );
}
