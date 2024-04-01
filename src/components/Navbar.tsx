"use client";
import React, { useState } from "react";
import Link from "next/link";
import { links } from "@/lib/data";
import {
  AiOutlineInstagram,
  AiOutlineYoutube,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { motion } from "framer-motion";
import Image from "next/image";
import FloatingButton from "./FloatingButton";
import { usePathname } from "next/navigation";

function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const variants = {
    closed: {
      height: 0,
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    open: {
      height: "auto",
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        delay: 0.1,
      },
    },
  };
  return (
    <>
      <FloatingButton />
      <header>
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="fixed overflow-hidden z-20 w-full bg-zinc-100/70 rounded-b-md backdrop-blur"
        >
          {/* Navigation content */}
          <div className="px-6 mx-auto max-w-6xl 2xl:px-0 py-4 md:py-0">
            <div className="flex flex-wrap items-center justify-between sm:py-4">
              <div className="w-full items-center flex justify-between lg:w-auto">
                <Link href={"/"}>
                  <Image
                    className="w-[160px] h-[130]"
                    src={"/Stallion-Overseas-Logo-Blue.png"}
                    width={160}
                    height={120}
                    quality={85}
                    alt="Stallion Overseas Logo"
                  />
                </Link>
                {/* Hamburger menu button */}
                <div className="flex lg:hidden">
                  <button
                    aria-label="hamburger"
                    id="menu"
                    className="relative border border-zinc-950/35 size-9 rounded-full transition duration-300 active:scale-95"
                    onClick={toggleMenu}
                  >
                    {/* Hamburger menu icon */}
                    <div className="m-auto h-[1.5px] w-4 rounded bg-zinc-900/40 transition duration-300"></div>
                    <div className="m-auto mt-1.5 h-[1.5px] w-4 rounded bg-zinc-900/40 transition duration-300"></div>
                  </button>
                </div>
              </div>
              {/* Navigation links */}
              <div className="w-full h-0 lg:w-fit flex-wrap justify-end items-center space-y-8 lg:space-y-0 lg:flex lg:h-fit md:flex-nowrap">
                <div className="mt-6 text-zinc-600 font-medium lg:x-4 lg:mt-0">
                  <ul className="space-y-6 tracking-wide text-balance lg:text-sm text-lg lg:flex lg:space-y-0">
                    {links.map((link, index) => (
                      <motion.li
                        key={index}
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      >
                        <Link
                          href={link.url}
                          className={`hidden lg:block tracking-tight hover:text-zinc-900 md:px-4 text-[15px] transition hover:text-primary-600 ${
                            pathname === link.url
                              ? "font-semibold text-zinc-950"
                              : ""
                          }`}
                        >
                          <span>{link.name}</span>
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
              {/* WhatsApp button */}
              <div className="hidden lg:flex items-center">
                <button className="p-[3px] relative">
                  <a
                    href="https://api.whatsapp.com/send?phone=+919979924241&text=Hello%20Stallion%20Overseas%2C%20I%20have%20a%20query%20regarding%20your%20services."
                    target="_blank"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#67bf7f] to-[#4761ab] rounded-full" />
                    <div className="px-5 py-2 items-center flex bg-zinc-950 rounded-full relative group transition duration-200 text-zinc-50 hover:bg-transparent">
                      <AiOutlineWhatsApp className="h-[1.2rem] w-[1.2rem] mr-2" />
                      Talk to us
                    </div>
                  </a>
                </button>
              </div>
            </div>
          </div>
          {/* Mobile menu */}
          <motion.div
            className="lg:hidden bg-zinc-100/70"
            variants={variants}
            animate={isMenuOpen ? "open" : "closed"}
            initial={false}
          >
            <div className="mx-4 mb-4 bg-zinc-200 rounded-lg">
              <ul>
                {links.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.url}
                      className="block py-3 px-4 ml-4 font-medium text-zinc-600 hover:bg-zinc-900"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
              {/* Instagram and YouTube buttons */}
              <div className="flex justify-center p-4">
                <a
                  href="https://www.instagram.com/stallion_overseas/"
                  target="_blank"
                  className="flex items-center text-md font-normal justify-center w-full h-9 group text-zinc-600 lg:text-sm lg:h-8 px-3"
                >
                  <AiOutlineInstagram className="h-5 w-5 mr-1 text-orange-500" />
                  <span>Instagram</span>
                </a>
                <a
                  href=""
                  target="_blank"
                  className="flex items-center justify-center text-md w-full h-9 group text-zinc-600 lg:text-sm lg:h-8 px-3"
                >
                  <AiOutlineYoutube className="h-5 w-5 mr-1 text-red-600" />
                  <span>YouTube</span>
                </a>
              </div>
            </div>
          </motion.div>
        </motion.nav>
      </header>
    </>
  );
}

export default Navbar;
