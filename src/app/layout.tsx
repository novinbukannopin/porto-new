import type { Metadata } from 'next';
import Script from 'next/script';
import NextTopLoader from 'nextjs-toploader';

import Providers from '~/app/providers';
import { baseUrl } from '~/lib/constants/baseUrl';
import { UMAMI_SRC, UMAMI_WEBSITE_ID } from '~/lib/constants/umami';
import Layout from '~/lib/layout';

const creator = 'Novin Ardian Yulianto';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  alternates: {
    types: {
      'application/rss+xml': `${baseUrl}/rss.xml`,
    },
  },
  applicationName: 'novin',
  authors: { name: 'novin' },
  creator,
  publisher: creator,
  generator: 'Next.js',
  keywords: [
    'Novin',
    'Novin Ardian Yulianto',
    'Future Engineer',
    'Uinsa',
    'novinbukannopin',
  ],
  referrer: 'origin-when-cross-origin',
  colorScheme: 'dark light',
  icons: {
    icon: '/cmd-terminal-icon.svg',
  },
  appleWebApp: {
    title: 'novin portofolio',
    statusBarStyle: 'default',
  },
  formatDetection: {
    telephone: false,
  },
  manifest: '/manifest.json',
  title: {
    default: 'Digital Crafter | Novin',
    template: '%s | Novin',
  },
  description: "Novin Ardian Yulianto's Dev Site | Novin",
  openGraph: {
    // url: 'https://sznm.dev',
    title: 'Novin | Digital Crafter',
    description: "Novin Ardian Yulianto's Dev Site",
    images: [
      {
        url: '/page-01.png',
        alt: 'sznm.dev og-image',
      },
    ],
    siteName: 'novin',
  },
  twitter: {
    creator: '@nityasa__',
    card: 'summary_large_image',
  },
};

type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <NextTopLoader color="#747978" showSpinner={false} />
        <Providers>
          <Layout>{children}</Layout>
        </Providers>

        {/* umami self-hosted analytics */}
        <Script
          async
          defer
          data-website-id={UMAMI_WEBSITE_ID}
          src={UMAMI_SRC}
          data-domains="sznm.dev"
        />
      </body>
    </html>
  );
};

export default RootLayout;
