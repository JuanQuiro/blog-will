import NavBar from '@/components/navbar/NavBar';
import { ChildrenProps } from '@/interfaces/interface';
import '@/styles/globals.css';
import { Montserrat } from 'next/font/google';
import Footer from './footer';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
};

export default function RootLayout({ children }: ChildrenProps) {
  return (
    <html lang='en'>
      <body
        className={`${montserrat.className} dark:bg-[#1A202C]`}
        suppressHydrationWarning={true}>
        <header>
          <NavBar />
        </header>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
