"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import Image from "next/image";

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
            <div className="hover:shadow-lg ease-in-out p-5 duration-300 bg-zinc-100 rounded-xl">
              <Link href="services/student-visa">
                <Image
                  src="/media/student-visa.png"
                  width={70}
                  height={80}
                  className="mb-2"
                  alt="student-visa"
                />
                <h3 className="mb-2 text-2xl font-bold">Student Visa</h3>
                <p className="font-light text-zinc-500">
                  Our expert team facilitates smooth visa applications for
                  students&apos; academic journeys abroad.
                </p>
              </Link>
            </div>
            <div className="hover:shadow-lg ease-in-out p-5 duration-300 bg-zinc-100 rounded-xl">
              <Link href="/services/spouse-visa">
                <Image
                  src="/media/spouse-visa.png"
                  width={60}
                  height={80}
                  className="mb-2"
                  alt="spouse-visa"
                />
                <h3 className="mb-2 text-2xl font-bold ">Spouse Visa</h3>
                <p className="font-light text-gray-500 ">
                  We offer comprehensive support for spouses seeking visas to
                  reunite & pursue aspirations abroad.
                </p>
              </Link>
            </div>
            <div className="hover:shadow-lg ease-in-out p-5 duration-300 bg-zinc-100 rounded-xl">
              <Link href="/services/visitor-visa">
                <Image
                  src="/media/visitor-visa.png"
                  width={70}
                  height={80}
                  className="mb-2"
                  alt="visitor-visa"
                />
                <h3 className="mb-2 text-2xl font-bold ">Visitor Visa</h3>
                <p className="font-light text-gray-500 ">
                  Discover new horizons with our visitor visa assistance for
                  leisure or business travel.
                </p>
              </Link>
            </div>
          </div>
          <div className="col-span-2 space-y-8 md:grid md:grid-cols-3 md:gap-12 md:space-y-0">
            <div className="hover:shadow-lg ease-in-out p-5 duration-300 bg-zinc-100 rounded-xl">
              <Link href="/services/permanent-residency">
                <Image
                  src="/media/permanent-residence.png"
                  width={70}
                  height={80}
                  className="mb-2"
                  alt="permanent-residence"
                />
                <h3 className="mb-2 text-2xl font-bold ">
                  Permanent Residency (Canada)
                </h3>
                <p className="font-light text-gray-500 ">
                  Let us guide you to Canadian residency with tailored solutions
                  and expertise.
                </p>
              </Link>
            </div>
            <div className="hover:shadow-lg ease-in-out p-5 duration-300 bg-zinc-100 rounded-xl">
              <Link href="/services/family-sponsorship">
                <Image
                  src="/media/family-visa.png"
                  width={70}
                  height={80}
                  className="mb-2"
                  alt="family-visa"
                />
                <h3 className="mb-2 text-2xl font-bold ">
                  Family Sponsorships (Canada)
                </h3>
                <p className="font-light text-gray-500 ">
                  Bring your family together in Canada with our seamless
                  sponsorship services.
                </p>
              </Link>
            </div>
            <div className="hover:shadow-lg ease-in-out p-5 duration-300 bg-zinc-100 rounded-xl">
              <Link href="/services/work-permit">
                <Image
                  src="/media/work-permit.png"
                  width={60}
                  height={80}
                  className="mb-2"
                  alt="work-permit"
                />
                <h3 className="mb-2 text-2xl font-bold ">
                  Work Permit (Canada)
                </h3>
                <p className="font-light text-gray-500 ">
                  Advance your career in Canada with our expert guidance on
                  securing work permits.
                </p>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
