'use client';
import Link from 'next/link'
import { useEffect, useState } from 'react';
import { RiHeart2Line } from "react-icons/ri";


export function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 0) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
     return(
        <header>
            <div className={`fixed w-3/5 h-24 left-1/2 ${scrolled ?  'backdrop-opacity-10 blur-sm':'bg-white'} transform -translate-x-1/2 shadow-md`}></div>
            <nav className='flex gap-5 fixed justify-between py-8'>
                <Link href="/">
                    <div className='flex items-center gap-1'>
                        <h1 className="text-2xl font-bold">💜Chosule Blog</h1>
                    </div>
                </Link>
                <ul className="flex gap-5 items-center">
                    <li className='font-bold'>
                        <Link href='/'>home</Link>
                    </li>
                    <li className='font-bold'>
                        <Link href='/about'>About</Link>
                    </li>
                    <li className='font-bold'>
                        <Link href='/blog'>blog</Link>
                    </li>
                    <li className='font-bold'>
                        <Link href='/contact'>contact</Link>
                    </li>
                    <li className='font-bold'>
                        <Link href='/portfolio'>portfolio</Link>
                    </li>
                </ul>
            </nav>
        </header>
     )
}

export default  Header;