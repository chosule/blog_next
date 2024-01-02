"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { RiHeart2Line } from "react-icons/ri";
import "@/app/styles/custom.css";

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

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); //

  return (
    <header>
      <div
        className={`fixed z-10 left-1/2 h-20 w-full ${
          scrolled ? "backdrop" : "bg-white"
        } -translate-x-1/2 transform shadow-md`}
      ></div>
      <nav className="fixed z-20 flex left-1/2 max-w-screen-md w-full -translate-x-1/2 transform justify-between gap-5 py-6 sm:flex-col md:flex-row">
        <Link href="/">
          <div className="flex items-center gap-1">
            <h1 className="text-2xl font-bold">💜 chosule blog</h1>
          </div>
        </Link>
        <ul className="flex items-center gap-5">
          <li className="font-bold">
            <Link href="/">home</Link>
          </li>
          <li className="font-bold">
            <Link href="/about">About</Link>
          </li>
          <li className="font-bold">
            <Link href="/blog">blog</Link>
          </li>
          <li className="font-bold">
            <Link href="/contact">contact</Link>
          </li>
          <li className="font-bold">
            <Link href="/portfolio">portfolio</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
