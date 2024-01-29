"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import heart_icon from "/public/Image/heart_icon.png";
import dynamic from "next/dynamic";
import LoadingThemeButton from "../LoadingThemeButton";
import useDelayedRender from "@/lips/useDelayedRender";

export type NavMenuType = {
  id: number;
  name: string;
  path: string;
};

const navMenu: NavMenuType[] = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About", path: "/about" },
  { id: 3, name: "Blog", path: "/posts" },
  { id: 4, name: "Contact", path: "/contact" },
  { id: 5, name: "Portfolio", path: "/portfolio" },
];

const SetThemeButton = dynamic(() => import("@/components/SetThemeButton"), {
  ssr: false,
  loading: () => <LoadingThemeButton />,
});

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [selected, setSelected] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    if (isOpen) {
      setIsOpen(false);
      document.body.classList.remove("overflow-hidden");
    } else {
      setIsOpen(true);
      document.body.classList.add("overflow-hidden");
    }
  };

  const { mounted: isMenuMounted, rendered: isMenuRendered } = useDelayedRender(
    isOpen,
    {
      enterDelay: 20,
      exitDelay: 300,
    }
  );

  useEffect(() => {
    return function cleanup() {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

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
    <div>
      {/* Pc Nav */}
      <header className="relative hidden md:block">
        <div
          className={`fixed left-1/2 z-10 h-20 w-full ${
            scrolled ? "backdrop" : "bg-primary"
          } -translate-x-1/2 transform shadow-md`}
        ></div>
        <nav className="fixed left-1/2 z-20 flex w-full max-w-[910px] -translate-x-1/2 transform justify-between gap-5 py-6">
          <Link href="/">
            <div className="flex items-center gap-1">
              <Image src={heart_icon} alt="아이콘" width={30} height={30} />
              <h1 className="text-xl">chosule blog</h1>
            </div>
          </Link>
          <div className="flex gap-5">
            <ul className="flex items-center gap-5">
              {navMenu.map((menuName) => (
                <li key={menuName.id} onClick={handleSelected}>
                  <Link
                    href={`${menuName.path}`}
                    className={`dark:text-primary ${
                      selected === menuName.name ? "font-bold" : "text-primary"
                    }`}
                  >
                    {menuName.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
        <div className="absolute top-[300px]"></div>
      </header>
      {/* mobile Nav */}
      <header className="bg-primary fixed top-0 z-50 flex h-[68px] w-full flex-col px-8 shadow-md md:hidden">
        <button onClick={toggleMenu} className="py-5">
          <Image src={heart_icon} alt="아이콘" width={30} height={30} />
        </button>
        {isMenuMounted && (
          <ul
            className={`bg-primary absolute inset-x-0 top-[60px] flex h-screen w-full flex-col gap-[30px] p-8 transition-all ${
              isMenuRendered ? "opacity-100" : "inset-x-[-1500px] opacity-0"
            }`}
          >
            {navMenu.map((menuName, i) => (
              <Link
                key={menuName.id}
                href={`${menuName.path}`}
                className={`flex flex-col transition-all ${
                  isMenuRendered
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-4 opacity-0"
                } text-xl dark:text-primary`}
                style={{ transitionDelay: `${150 + i * 25}ms` }}
                onClick={() => {
                  setIsOpen(false);
                  document.body.classList.remove("overflow-hidden");
                }}
              >
                {menuName.name}
              </Link>
            ))}
          </ul>
        )}
      </header>
      <div className="absolute right-[95px] top-[22px] z-[60] md:right-[-90px]">
        <SetThemeButton />
      </div>
      <div className="md:hidden"></div>
    </div>
  );
}

export default Header;
