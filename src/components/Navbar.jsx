import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import close from "../assets/close.svg";
import menu from "../assets/menu.svg";
import { navLinks } from "../data";
import ThemeToggler from "./ThemeToggler";

const Navbar = () => {
  const [active, setActive] = useState("hero");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [padding, setPadding] = useState("py-16");

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      setScrolled(scrollTop > 100);

      if (scrollTop > lastScrollY && scrollTop > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setLastScrollY(scrollTop);

      if (scrollTop === 0) {
        setPadding("py-16");
      } else {
        setPadding("py-7");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const sections = document.querySelectorAll("div[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -50% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <>
      <div
        className={`top-nav fixed z-50 flex justify-between items-center ${padding} transition-all backdrop-blur-sm p-6 md:px-16  w-full duration-300 ${
          showNavbar ? "transform translate-y-0" : "transform -translate-y-full"
        }`}
      >
        <div className="rounded-full backdrop-blur-sm ">
          <h1 className="text-black dark:text-white text-[26px] lg:text-[36px] font-bold pointer-events-auto cursor-pointer">
            BKR
          </h1>
        </div>
        <div className="hidden lg:flex w-full z-50  justify-end pointer-events-auto">
          <ThemeToggler />
        </div>

        <div className="sm:hidden flex flex-1 justify-end items-center ">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className={`w-[28px]  filter dark:filter-none h-[28px] object-contain pointer-events-auto cursor-pointer invert `}
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 absolute top-28 right-12 mx-4 my-2 min-w-[140px] z-30 rounded-xl bg-white dark:bg-slate-900 shadow-lg`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              <ThemeToggler />
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.id
                      ? "text-secondary"
                      : "text-slate-100 dark:text-slate-50"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.id);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <nav className="w-fit hidden sm:block right-0 fixed h-full items-center bg-gradient-to-b sm:bg-none sm:py-10 z-40 px-16">
        <div className="w-full flex justify-between items-start mx-auto">
          <NavLink
            to="/"
            className="flex items-start"
            onClick={() => {
              setActive("hero");
              window.scrollTo(0, 0);
            }}
          ></NavLink>

          <ul className="list-none h-screen hidden relative sm:flex flex-col justify-center gap-5 ">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`relative flex items-center justify-end transition-all ${
                  active === nav.id
                    ? "streaky-glow hover:text-secondary"
                    : "text-slate-500 hover:text-black dark:hover:text-white"
                } text-[18px] lg:text-[24px] font-bold pointer-events-auto cursor-pointer`}
                onClick={() => setActive(nav.id)}
              >
                {active === nav.id && (
                  <div className="fixed right-10 w-2 h-6 lg:h-8 bg-quaternary "></div>
                )}
                <a href={`#${nav.id}`}>{nav.title} </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="cursor"></div>
      </nav>
    </>
  );
};

export default Navbar;
