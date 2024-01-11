import type { Metadata } from 'next'
import './globals.css'
import './styles/prose.css'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'
import localFont from 'next/font/local'
import { Toaster } from 'react-hot-toast';
import Providers from "./provider";


const suit = localFont({
  src:"../../public/fonts/SUIT-Variable.ttf",
  variable:'--font-suit'
})
const pre = localFont({
  src: "../../public/fonts/Pretendard-Medium.woff",
  variable:'--font-pre'
});


export const metadata: Metadata = {
  title: 'Chosule Blog Main',
  description: 'welcome my world',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  

  return (
    <html lang="en" className={`${suit.variable} ${pre.variable}`}>
      <body className='flex flex-col w-full max-w-[910px] mx-auto relative px-8 lg:px-0'>
          <Header/>
          <main className='grow mt-36 relative'>
            <Toaster/>
            <Providers>
              {children}
            </Providers>
          </main>
          <Footer/>
        </body>
    </html>
  )
}
