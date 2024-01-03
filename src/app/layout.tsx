import type { Metadata } from 'next'
import './globals.css'
import { Noto_Sans_KR } from 'next/font/google'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'
import localFont from 'next/font/local'
 
const inter = Noto_Sans_KR({ subsets: ['latin'] });

// const pretendard = localFont({
//   src: [
//     {
//       path:"../../public/fonts/Pretendard-Medium.woff",
//     }
//   ],
// });
// const suit = localFont({
//   src:[
//     {
//       path:"../../public/fonts/SUIT-Variable.ttf"
//     }
//   ]
// })
const suit = localFont({
  src:"../../public/fonts/SUIT-Variable.ttf",
  variable:'--font-suit'
})
const pre = localFont({
  src: "../../public/fonts/Pretendard-Medium.woff",
  variable:'--font-pre'
});


export const metadata: Metadata = {
  title: 'Chosulle Blog Main',
  description: 'welcome my world',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  

  return (
    <html lang="en" className={`${suit.variable} ${pre.variable}`}>
      <body className='flex flex-col w-full max-w-screen-lg mx-auto relative sm:px-8 lg:px-0'>
          <Header/>
          <main className='grow mt-24'>
            {children}
          </main>
          <Footer/>
        </body>
    </html>
  )
}
