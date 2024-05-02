"use client";
import React, { useState } from "react";
import Link from "next/link";
import { links } from "@/lib/data";
import {
  AiOutlineInstagram,
  AiOutlineYoutube,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import FloatingButton from "./FloatingButton";
import { usePathname } from "next/navigation";

function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isCountriesOpen, setCountriesOpen] = useState(false);
  const [isCountriesOpenMobile, setCountriesOpenMobile] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const toggleCountries = () => {
    setCountriesOpen(!isCountriesOpen);
  };

  const closeCountries = () => {
    setCountriesOpen(false);
  };

  const toggleCountriesMobile = () => {
    setCountriesOpenMobile(!isCountriesOpenMobile);
  };

  const closeCountriesMobile = () => {
    setCountriesOpenMobile(false);
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
        delay: 0.2,
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
          className="fixed z-30 w-full bg-zinc-100/70 rounded-b-md backdrop-blur"
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
                    {/* Countries dropdown */}

                    <li className="relative">
                      <span
                        onMouseEnter={toggleCountries}
                        className="cursor-pointer hidden lg:block tracking-tight hover:text-zinc-900 md:px-4 text-[15px] transition hover:text-primary-600"
                      >
                        Countries
                      </span>
                      <AnimatePresence mode="wait">
                        {isCountriesOpen && (
                          <motion.ul
                            className={`absolute cursor-pointer left-0 w-60 bg-white text-md font-semibold rounded-lg shadow-lg mt-2 ${
                              isCountriesOpen ? "block" : "hidden disabled"
                            }`}
                            variants={variants}
                            animate={isCountriesOpen ? "open" : "closed"}
                            initial="closed"
                            exit="closed"
                            onMouseLeave={closeCountries}
                          >
                            <Link
                              href="/countries/canada"
                              className="cursor-pointer"
                            >
                              <li className="px-3 pt-3 pb-2 hover:bg-zinc-100 flex gap-2">
                                <Image
                                  src="/media/canada.png"
                                  width={20}
                                  height={10}
                                  alt="canada-logo"
                                  className="object-contain"
                                />
                                Canada{" "}
                              </li>
                            </Link>

                            <Link
                              href="/countries/uk"
                              className="cursor-pointer"
                            >
                              <li className="px-3 py-2 hover:bg-zinc-100 flex gap-2">
                                <Image
                                  src="/media/united-kingdom.png"
                                  width={20}
                                  height={10}
                                  alt="canada-logo"
                                  className="object-contain"
                                />
                                United Kingdom{" "}
                              </li>
                            </Link>

                            <Link
                              href="/countries/usa"
                              className="cursor-pointer"
                            >
                              <li className="px-3 py-2 hover:bg-zinc-100 flex gap-2">
                                <Image
                                  src="/media/united-states.png"
                                  width={20}
                                  height={10}
                                  alt="canada-logo"
                                  className="object-contain"
                                />
                                United States Of America{" "}
                              </li>
                            </Link>

                            <Link
                              href="/countries/australia"
                              className="cursor-pointer"
                            >
                              <li className="px-3 py-2 hover:bg-zinc-100 flex gap-2">
                                <Image
                                  src="/media/australia.png"
                                  width={20}
                                  height={10}
                                  alt="canada-logo"
                                  className="object-contain"
                                />
                                Australia{" "}
                              </li>
                            </Link>

                            <Link
                              href="/countries/newzealand"
                              className="cursor-pointer"
                            >
                              <li className="px-3 py-2 hover:bg-zinc-100 flex gap-2">
                                <Image
                                  src="/media/new-zealand.png"
                                  width={20}
                                  height={10}
                                  alt="canada-logo"
                                  className="object-contain"
                                />
                                New Zealand{" "}
                              </li>
                            </Link>

                            <Link
                              href="/countries/france"
                              className="cursor-pointer"
                            >
                              <li className="px-3 py-2 hover:bg-zinc-100 flex gap-2">
                                <Image
                                  src="/media/france.png"
                                  width={20}
                                  height={10}
                                  alt="canada-logo"
                                  className="object-contain"
                                />
                                France{" "}
                              </li>
                            </Link>

                            <Link
                              href="/countries/germany"
                              className="cursor-pointer"
                            >
                              <li className="px-3 pt-2 pb-3 hover:bg-zinc-100 flex gap-2">
                                <Image
                                  src="/media/germany.png"
                                  width={20}
                                  height={10}
                                  alt="canada-logo"
                                  className="object-contain"
                                />
                                Germany{" "}
                              </li>
                            </Link>
                            {/* Add other country links here */}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </li>
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
          <AnimatePresence mode="wait">
            {isMenuOpen && (
              <motion.div
                className="lg:hidden bg-zinc-100/70"
                variants={variants}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ type: "tween", duration: 0.1 }}
              >
                <div className="mx-4 mb-4 pt-4 bg-zinc-200 rounded-lg">
                  <ul>
                    {links.map((link, index) => (
                      <Link
                        key={index}
                        href={link.url}
                        onClick={toggleMenu}
                        className="block py-3 px-4 mx-4 rounded-md font-medium text-zinc-800 hover:bg-zinc-600 hover:text-zinc-100"
                      >
                        <li>{link.name}</li>
                      </Link>
                    ))}
                    <li className="relative">
                      <span
                        onClick={toggleCountriesMobile}
                        className="cursor-pointer block py-3 px-4 mx-4 rounded-md font-medium text-zinc-800 hover:bg-zinc-600 hover:text-zinc-100"
                      >
                        Countries
                      </span>
                      <AnimatePresence mode="wait">
                        {isCountriesOpenMobile && (
                          <motion.ul
                            className={`absolute left-0 w-64 bg-white rounded-lg shadow-lg mt-2 ${
                              isCountriesOpenMobile ? "block" : "hidden"
                            }`}
                            variants={variants}
                            animate={isCountriesOpenMobile ? "open" : "closed"}
                            initial="closed"
                            exit="closed"
                            onClick={toggleMenu}
                          >
                            <Link
                              href="/countries/canada"
                              className="cursor-pointer"
                            >
                              <li className="px-3 pt-3 pb-2 hover:bg-zinc-100 flex gap-2">
                                <Image
                                  src="/media/canada.png"
                                  width={20}
                                  height={10}
                                  alt="canada-logo"
                                  className="object-contain"
                                />
                                Canada{" "}
                              </li>
                            </Link>

                            <Link
                              href="/countries/uk"
                              className="cursor-pointer"
                            >
                              <li className="px-3 py-2 hover:bg-zinc-100 flex gap-2">
                                <Image
                                  src="/media/united-kingdom.png"
                                  width={20}
                                  height={10}
                                  alt="canada-logo"
                                  className="object-contain"
                                />
                                United Kingdom{" "}
                              </li>
                            </Link>

                            <Link
                              href="/countries/usa"
                              className="cursor-pointer"
                            >
                              <li className="px-3 py-2 hover:bg-zinc-100 flex gap-2">
                                <Image
                                  src="/media/united-states.png"
                                  width={20}
                                  height={10}
                                  alt="canada-logo"
                                  className="object-contain"
                                />
                                United States Of America{" "}
                              </li>
                            </Link>

                            <Link
                              href="/countries/australia"
                              className="cursor-pointer"
                            >
                              <li className="px-3 py-2 hover:bg-zinc-100 flex gap-2">
                                <Image
                                  src="/media/australia.png"
                                  width={20}
                                  height={10}
                                  alt="canada-logo"
                                  className="object-contain"
                                />
                                Australia{" "}
                              </li>
                            </Link>

                            <Link
                              href="/countries/newzealand"
                              className="cursor-pointer"
                            >
                              <li className="px-3 py-2 hover:bg-zinc-100 flex gap-2">
                                <Image
                                  src="/media/new-zealand.png"
                                  width={20}
                                  height={10}
                                  alt="canada-logo"
                                  className="object-contain"
                                />
                                New Zealand{" "}
                              </li>
                            </Link>

                            <Link
                              href="/countries/france"
                              className="cursor-pointer"
                            >
                              <li className="px-3 py-2 hover:bg-zinc-100 flex gap-2">
                                <Image
                                  src="/media/france.png"
                                  width={20}
                                  height={10}
                                  alt="canada-logo"
                                  className="object-contain"
                                />
                                France{" "}
                              </li>
                            </Link>

                            <Link
                              href="/countries/germany"
                              className="cursor-pointer"
                            >
                              <li className="px-3 pt-2 pb-3 hover:bg-zinc-100 flex gap-2">
                                <Image
                                  src="/media/germany.png"
                                  width={20}
                                  height={10}
                                  alt="canada-logo"
                                  className="object-contain"
                                />
                                Germany{" "}
                              </li>
                            </Link>
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </li>
                  </ul>
                  {/* Instagram and YouTube buttons */}
                  <div className="flex justify-center p-4">
                    <a
                      href="https://www.instagram.com/stallionoverseasconsultants/"
                      target="_blank"
                      className="flex items-center text-md font-normal justify-center w-full h-9 group text-zinc-600 lg:text-sm lg:h-8 px-3"
                    >
                      <AiOutlineInstagram className="h-5 w-5 mr-1 text-orange-500" />
                      <span>Instagram</span>
                    </a>
                    <a
                      href="https://www.youtube.com/@StallionOverseasConsultants"
                      target="_blank"
                      className="flex items-center justify-center text-md w-full h-9 group text-zinc-600 lg:text-sm lg:h-8 px-3"
                    >
                      <AiOutlineYoutube className="h-5 w-5 mr-1 text-red-600" />
                      <span>YouTube</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      </header>
    </>
  );
}

export default Navbar;
