import { Poppins, Bebas_Neue } from 'next/font/google';
import Head from "next/head";

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: '500',
  variable: '--font-poppins',
});
 
const bebas_neue = Bebas_Neue({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-bebas-neue',
});

export default function format({ children }) {
  return (
    <>
      <Head>
        <title>Bake Bites</title>
      </Head>
      <main className={`${poppins.variable} ${bebas_neue.variable}`}>{children}</main>
    </>
  );
}
