"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import heart_icon from "/public/Image/heart_icon.png";

type NavMenuType ={
  id:number;
  name:string;
  path:string
}
const navMenu:NavMenuType[] = [
  {id:1 , name: 'Home' , path:"/"},
  {id:2 , name: 'About', path:"/about"},
  {id:3 , name: 'Blog' , path:"/blog"},
  {id:4 , name: 'Contact',path:"/contact"},
  {id:5, name:"Porfolio", path:"/portfolio"},
]

export function Header() {

  const [scrolled, setScrolled] = useState(false);
  const [selected , setSelected] = useState("");
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


  const handleSelected = (event: React.MouseEvent<HTMLLIElement>) => {
    const menuName = event.currentTarget.innerText;
    setSelected(menuName);
  };


  return (
    <header className="relative">
      <div
        className={`fixed z-10 left-1/2 h-20 w-full ${
          scrolled ? "backdrop" : "bg-white"
        } -translate-x-1/2 transform shadow-md`}
      ></div>
      <nav className="fixed z-20 flex left-1/2 max-w-[910px] w-full -translate-x-1/2 transform justify-between gap-5 py-6 sm:flex-col md:flex-row">
        <Link href="/">
          <div className="flex items-center gap-1">
            <Image src={heart_icon} alt="아이콘" width={40} height={40}/>
            <h1 className="text-2xl">chosule blog</h1>
          </div>
        </Link>
        <ul className="flex items-center gap-5">
          {navMenu.map((menuName) => (
            <li key={menuName.id} className="suit" onClick={handleSelected}>
              <Link href={`${menuName.path}`} className={`${selected === menuName.name ? "font-bold" : "text-neutral-900"}`}>{menuName.name}</Link>
            </li>
          ))}
        
        </ul>
      </nav>
      <div className="absolute top-[300px]">
      </div>
      
    </header>
  );
}

export default Header;
