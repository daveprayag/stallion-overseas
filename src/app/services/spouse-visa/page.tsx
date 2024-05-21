"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import Image from "next/image";

function page() {
  return (
    <div className="pt-[130px] pb-[40px] lg:mb-[100px] w-full">
      <section className="bg-zinc-100 items-center">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.125 }}
          className="items-center w-full justify-center flex flex-col"
        >
          <h1 className="font-semibold sm:text-4xl text-3xl tracking-tight text-center">
            Spouse Visa Services
          </h1>
          <section className="max-w-6xl sm:px-[80px] px-6 sm:pt-20 pt-10 space-y-10">
            <div>
              <h4 className="text-xl pb-1 tracking-tight font-medium text-zinc-900">
                What is a Spouse Visa?
              </h4>
              <p className="text-justify tracking-tight text-zinc-600 text-lg">
                A spouse visa, also known as a marriage visa or partner visa,
                allows spouses or partners of foreign nationals to join them in
                the country where they are studying or working. It enables
                families to reunite and build a life together in a new country.
              </p>
            </div>
            <div>
              <h4 className="text-xl pb-1 tracking-tight font-medium text-zinc-900">
                How We Can Help You with Spouse Visas
              </h4>
              <p className="text-justify tracking-tight text-zinc-600 text-lg">
                Stallion Overseas Consultants offers comprehensive assistance
                for spouses seeking to join their partners abroad. Our services
                include:
              </p>
              <ul className="pt-10 px-5 space-y-3">
                <li className="text-justify tracking-tight text-zinc-600 text-lg">
                  <span className="font-medium text-zinc-900">
                    Assessment and Eligibility Check:
                  </span>{" "}
                  We assess your eligibility for a spouse visa based on your
                  relationship status and the immigration laws of the respective
                  country.
                </li>
                <li className="text-justify tracking-tight text-zinc-600 text-lg">
                  <span className="font-medium text-zinc-900">
                    Documentation Preparation:
                  </span>{" "}
                  Our team assists in gathering and organizing the required
                  documents, such as marriage certificates, proof of
                  relationship, and financial statements.
                </li>
                <li className="text-justify tracking-tight text-zinc-600 text-lg">
                  <span className="font-medium text-zinc-900">
                    Visa Application Support:
                  </span>{" "}
                  We guide you through the spouse visa application process,
                  ensuring accuracy and compliance with all requirements.
                </li>
                <li className="text-justify tracking-tight text-zinc-600 text-lg">
                  <span className="font-medium text-zinc-900">
                    Interview Preparation:
                  </span>{" "}
                  If an interview is part of the visa process, we provide
                  coaching and preparation to enhance your chances of success.
                </li>
                <li className="text-justify tracking-tight text-zinc-600 text-lg">
                  <span className="font-medium text-zinc-900">
                    Settlement Assistance:
                  </span>{" "}
                  Upon arrival, we offer support with initial settlement and
                  integration into the new country.
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl pb-1 tracking-tight font-medium text-zinc-900">
                Countries We Cater to for Spouse Visas
              </h4>
              <p className="text-justify tracking-tight text-zinc-600 text-lg">
                We cater to spouse visa services for the following countries:
              </p>
              <ul className="pt-10 grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-wrap md:justify-between gap-4">
                <li className="rounded-xl p-2 flex items-center justify-center">
                  <div className="flex flex-col items-center">
                    <Image
                      src="/media/canada.png"
                      width={50}
                      height={50}
                      alt="canada-logo"
                    />
                    <span className="font-medium text-zinc-700 text-lg">
                      Canada
                    </span>
                  </div>
                </li>
                <li className="rounded-xl p-2 flex items-center justify-center">
                  <div className="flex flex-col items-center">
                    <Image
                      src="/media/united-states.png"
                      width={50}
                      height={50}
                      alt="usa-logo"
                    />
                    <span className="font-medium text-zinc-700 text-lg">
                      United States
                    </span>
                  </div>
                </li>
                <li className="rounded-xl p-2 flex items-center justify-center">
                  <div className="flex flex-col items-center">
                    <Image
                      src="/media/australia.png"
                      width={50}
                      height={50}
                      alt="australia-flag"
                    />
                    <span className="font-medium text-zinc-700 text-lg">
                      Australia
                    </span>
                  </div>
                </li>
                <li className="rounded-xl p-2 flex items-center justify-center">
                  <div className="flex flex-col items-center">
                    <Image
                      src="/media/united-kingdom.png"
                      width={50}
                      height={50}
                      alt="uk-flag"
                    />
                    <span className="font-medium text-zinc-700 text-lg">
                      United Kingdom
                    </span>
                  </div>
                </li>
                <li className="rounded-xl p-2 flex items-center justify-center">
                  <div className="flex flex-col items-center">
                    <Image
                      src="/media/new-zealand.png"
                      width={50}
                      height={50}
                      alt="newzealand-flag"
                    />
                    <span className="font-medium text-zinc-700 text-lg">
                      New Zealand
                    </span>
                  </div>
                </li>
                <li className="rounded-xl p-2 flex items-center justify-center">
                  <div className="flex flex-col items-center">
                    <Image
                      src="/media/germany.png"
                      width={50}
                      height={50}
                      alt="germany-flag"
                    />
                    <span className="font-medium text-zinc-700 text-lg">
                      Germany
                    </span>
                  </div>
                </li>
                <li className="rounded-xl p-2 flex items-center justify-center">
                  <div className="flex flex-col items-center">
                    <Image
                      src="/media/france.png"
                      width={50}
                      height={50}
                      alt="france-flag"
                    />
                    <span className="font-medium text-zinc-700 text-lg">
                      France
                    </span>
                  </div>
                </li>
              </ul>

              <p className="text-justify sm:text-center text-zinc-600 text-lg pt-8">
                Whether you are planning to join your spouse for a short-term
                visit or intend to relocate permanently, Stallion Overseas
                Consultants ensures a smooth and efficient visa application
                process.
              </p>
            </div>
          </section>
        </motion.div>
      </section>
    </div>
  );
}

export default page;
