import type {Metadata} from 'next';
import { Montserrat, Poppins, Noto_Sans_Devanagari } from 'next/font/google';
import './globals.css'; 

const montserrat = Montserrat({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-montserrat',
});

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

const notoSansDevanagari = Noto_Sans_Devanagari({
  weight: ['400', '700'],
  subsets: ['devanagari'],
  variable: '--font-noto-devanagari',
});

export const metadata: Metadata = {
  title: 'Cockroach Janata Party (CJP) | Cockroaches On Ground Now',
  description: 'India First • Youth First • Constitution First. A youth-driven social and political movement.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${poppins.variable} ${notoSansDevanagari.variable}`}>
      <body className="bg-brand-white text-brand-black font-poppins selection:bg-brand-red selection:text-white antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
