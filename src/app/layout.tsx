import type { Metadata } from 'next'
import './globals.css'
import { Noto_Sans_KR } from 'next/font/google'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'
import localFont from 'next/font/local'
 
const inter = Noto_Sans_KR({ subsets: ['latin'] });

const pretendard = localFont({
  src: [
    {
      path:"../../public/fonts/Pretendard-Medium.woff"
    }
  ],
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
    <html lang="en" className={pretendard.className}>
      <body className='flex flex-col w-full max-w-screen-lg mx-auto relative'>
          <Header/>
          <main className='grow'>
            {children}
          </main>
          <Footer/>
        </body>
    </html>
  )
}
