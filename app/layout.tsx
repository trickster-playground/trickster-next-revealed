import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import SectionContainer from '@/components/SectionContainer';
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: '%s | Andi Muhammad Portfolio',
    default: 'Andi Muhammand - Known as Trickster Portfolio.'
  },
  description: 'Trickster Revealed',
  icons: {
    icon: [
      {
        url: '/icons/trickstericon.png',
        href: '/icons/trickstericon.png'
      }
    ]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning={true}>
      <body
        className={`${inter.className} relative flex h-screen flex-col justify-between dark`}
      >
        <SectionContainer>{children}</SectionContainer>
        <SpeedInsights />
      </body>
    </html>
  );
}
