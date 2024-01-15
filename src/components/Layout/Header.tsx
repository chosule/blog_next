"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import heart_icon from "/public/Image/heart_icon.png";
import dynamic from "next/dynamic";
import LoadingThemeButton from "../LoadingThemeButton";
import NavItem from "../common/NavItem";

export type NavMenuType = {
  id: number;
  name: string;
  path: string;
};

const navMenu: NavMenuType[] = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About", path: "/about" },
  { id: 3, name: "Blog", path: "/blog" },
  { id: 4, name: "Contact", path: "/contact" },
  { id: 5, name: "Porfolio", path: "/portfolio" },
];

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
}

const SetThemeButton = dynamic(() => import("@/components/SetThemeButton"), {
  ssr: false,
  loading: () => <LoadingThemeButton />,
});

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [selected, setSelected] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () =>{
    if(isOpen){
      setIsOpen(false);
      document.body.classList.remove('overflow-hidden');

    }else{
      setIsOpen(true);
      document.body.classList.add('overflow-hidden');
    }
  }

  useEffect(() =>{
    return function cleanup(){
      document.body.classList.remove('overflow-hidden');
    }
  },[])
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
    <>
      <header className="relative hidden md:block">
        <div
          className={`fixed left-1/2 z-10 h-20 w-full ${
            scrolled ? "backdrop" : "bg-primary"
          } -translate-x-1/2 transform shadow-md`}
        ></div>
        <nav className="fixed left-1/2 z-20 flex w-full max-w-[910px] -translate-x-1/2 transform justify-between gap-5 py-6">
          <Link href="/">
            <div className="flex items-center gap-1">
              <Image src={heart_icon} alt="아이콘" width={30} height={30}/>
              <h1 className="text-xl">chosule blog</h1>
            </div>
          </Link>
          <div className="flex gap-5">
            <ul className="flex items-center gap-5">
              {navMenu.map((menuName) => (
                <li key={menuName.id} className="suit" onClick={handleSelected}>
                  <Link
                    href={`${menuName.path}`}
                    className={`dark:text-primary ${
                      selected === menuName.name
                        ? "font-bold"
                        : "text-primary"
                    }`}
                  >
                    {menuName.name}
                  </Link>
                </li>
              ))}
            </ul>
            <SetThemeButton />
          </div>
        </nav>
        <div className="absolute top-[300px]"></div>
      </header>
      {/* mobile Nav */}
      <header>
        <div className="flex md:hidden flex-col absolute w-full h-full z-50">
          <div>
            <button onClick={toggleMenu}>버튼</button>
            <SetThemeButton/>
          </div>
          {isOpen && (
              <ul className="w-full flex grow h-full bg-primary">
                <li className="flex flex-col py-5 gap-5">
                  {navMenu.map((link) => (
                    <NavItem key={link.id} href={link.path}>{link.name}</NavItem>
                  ))}
                </li>
              </ul>
          )}
        </div>
      </header>
      <div className="md:hidden">
      </div>
    
    </>
  );
}

export default Header;
