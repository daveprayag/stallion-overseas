"use client";
import { motion } from "framer-motion";
import React from "react";

export default function Services() {
  return (
    <div className="pt-[100px] lg:mb-[100px]">
      <section className="bg-zinc-100 items-center">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.125 }}
          className="items-center max-w-screen-xl px-4 py-10 mx-auto lg:grid lg:grid-cols-2 lg:gap-20 xl:gap-28 lg:py-24 lg:px-6"
        >
          <div className="col-span-2 space-y-8 md:grid md:grid-cols-3 md:gap-12 md:space-y-0 md:mb-12">
            <div>
              <svg
                version="1.0"
                viewBox="0 0 24 24"
                xmlSpace="preserve"
                xmlns="http://www.w3.org/2000/svg"
                className="w-14 h-14"
              >
                <path
                  d="M12 3 1 9l11 6 11-6z"
                  fill="#4761ab"
                  className="fill-000000"
                ></path>
                <path
                  d="M19 12.8 12 17l-7-4.2v4.4l7 3.8 7-3.8zM21 9h2v8h-2z"
                  fill="#4761ab"
                  className="fill-000000"
                ></path>
              </svg>
              <h3 className="mb-2 text-2xl font-bold">Student Visa</h3>
              <p className="font-light text-gray-500">
                Our expert team facilitates smooth visa applications for
                students' academic journeys abroad.
              </p>
            </div>
            <div>
              <svg
                overflow="hidden"
                viewBox="0 0 96 96"
                xmlns="http://www.w3.org/2000/svg"
                className="w-14 h-14"
              >
                <circle
                  cx="32"
                  cy="15"
                  r="7"
                  fill="#4761ab"
                  className="fill-000000"
                ></circle>
                <circle
                  cx="64"
                  cy="15"
                  r="7"
                  fill="#4761ab"
                  className="fill-000000"
                ></circle>
                <path
                  d="M82.9 52.1 77.2 31c-.2-.6-.5-1.2-.9-1.6-1.9-2-4.3-3.5-6.9-4.4-1.7-.7-3.5-1-5.4-1-1.9 0-3.7.3-5.4.9-2.7.9-5 2.4-6.9 4.4-.4.5-.7 1-.9 1.6L48 41.4 45.2 31c-.2-.6-.5-1.2-.9-1.6-1.9-2-4.3-3.5-6.9-4.4-1.7-.7-3.5-1-5.4-1-1.9 0-3.7.3-5.4.9-2.7.9-5 2.4-6.9 4.4-.4.5-.7 1-.9 1.6L13.2 52c-.4 1.6.4 3.4 2.1 3.8.2.2.4.2.7.2 1.3 0 2.5-.9 2.9-2.2L24 34.6V88h6V57h4v31h6V34.6l5.1 19.1c.4 1.3 1.6 2.2 2.9 2.2.3 0 .5 0 .8-.1.9-.3 1.6-1 1.9-1.8.1 0 5.3-19.4 5.3-19.4v8.1L50.3 64H56v24h6V64h4v24h6V64h5.7L72 42.7v-8.1l5.1 19.1c.4 1.3 1.6 2.2 2.9 2.2.3 0 .5 0 .8-.1 1.6-.4 2.5-2.1 2.1-3.7Z"
                  fill="#4761ab"
                  className="fill-000000"
                ></path>
              </svg>
              <h3 className="mb-2 text-2xl font-bold ">Spouse Visa</h3>
              <p className="font-light text-gray-500 ">
                We offer comprehensive support for spouses seeking visas to
                reunite & pursue aspirations abroad.
              </p>
            </div>
            <div>
              <svg
                className="w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 "
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <h3 className="mb-2 text-2xl font-bold ">Visitor Visa</h3>
              <p className="font-light text-gray-500 ">
                Discover new horizons with our visitor visa assistance for
                leisure or business travel.
              </p>
            </div>
          </div>
          <div className="col-span-2 space-y-8 md:grid md:grid-cols-3 md:gap-12 md:space-y-0">
            <div>
              <svg
                className="w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 "
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
              </svg>
              <h3 className="mb-2 text-2xl font-bold ">
                Permanent Residency (Canada)
              </h3>
              <p className="font-light text-gray-500 ">
                Let us guide you to Canadian residency with tailored solutions
                and expertise.
              </p>
            </div>
            <div>
              <svg
                className="w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 "
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
              </svg>
              <h3 className="mb-2 text-2xl font-bold ">
                Family Sponsorships (Canada)
              </h3>
              <p className="font-light text-gray-500 ">
                Bring your family together in Canada with our seamless
                sponsorship services.
              </p>
            </div>
            <div>
              <svg
                className="w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 "
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
              </svg>
              <h3 className="mb-2 text-2xl font-bold ">Work Permit (Canada)</h3>
              <p className="font-light text-gray-500 ">
                Advance your career in Canada with our expert guidance on
                securing work permits.
              </p>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
