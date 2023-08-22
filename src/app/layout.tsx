import type { Metadata } from 'next';
import Script from 'next/script';
import NextTopLoader from 'nextjs-toploader';

import Providers from '~/app/providers';
import { baseUrl } from '~/lib/constants/baseUrl';
import { UMAMI_SRC, UMAMI_WEBSITE_ID } from '~/lib/constants/umami';
import Layout from '~/lib/layout';

const creator = 'Agustinus Nathaniel';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  alternates: {
    types: {
      'application/rss+xml': `${baseUrl}/rss.xml`,
    },
  },
  applicationName: 'sznm.dev',
  authors: { name: 'sozonome' },
  creator,
  publisher: creator,
  generator: 'Next.js',
  keywords: [
    'sozonome',
    'agustinusnathaniel',
    'Agustinus Nathaniel',
    'sznm',
    'sznm.dev',
  ],
  referrer: 'origin-when-cross-origin',
  colorScheme: 'dark light',
  icons: {
    icon: '/cmd-terminal-icon.svg',
  },
  appleWebApp: {
    title: 'sznm.dev',
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
        url: 'https://og.sznm.dev/api/generate?heading=sozonome&text=https://sznm.dev',
        alt: 'sznm.dev og-image',
      },
    ],
    siteName: 'sozonome',
  },
  twitter: {
    creator: '@sozonome',
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
