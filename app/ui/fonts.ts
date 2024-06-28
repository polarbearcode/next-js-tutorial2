import { Inter, Comic_Neue, Lusitana } from 'next/font/google';
 
export const inter = Inter({ subsets: ['latin'] });
export const comic_neue = Comic_Neue({weight: "400", preload: false});
export const lusitana = Lusitana({
    weight: ['400', '700'],
    subsets: ['latin'],
  });