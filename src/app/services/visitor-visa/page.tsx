"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

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
            Visitor Visa Services
          </h1>
          <section className="max-w-6xl sm:px-[80px] px-6 sm:pt-20 pt-10 space-y-10">
            <div>
              <h4 className="text-xl pb-1 tracking-tight font-medium text-zinc-900">
                What is a Visitor Visa?
              </h4>
              <p className="text-justify tracking-tight text-zinc-600 text-lg">
                A visitor visa, also known as a tourist visa or travel visa,
                allows individuals to visit foreign countries for leisure,
                tourism, or business purposes within a specified period. It is a
                non-immigrant visa that does not permit employment or study.
              </p>
            </div>
            <div>
              <h4 className="text-xl pb-1 tracking-tight font-medium text-zinc-900">
                How We Can Help You with Visitor Visas
              </h4>
              <p className="text-justify tracking-tight text-zinc-600 text-lg">
                Stallion Overseas Consultants provides tailored assistance for
                individuals applying for visitor visas. Our services include:
              </p>
              <ul className="pt-10 px-5 space-y-3">
                <li className="text-justify tracking-tight text-zinc-600 text-lg">
                  <span className="font-medium text-zinc-900">
                    Consultation and Assessment:
                  </span>{" "}
                  We evaluate your travel purpose and eligibility for a visitor
                  visa.
                </li>
                <li className="text-justify tracking-tight text-zinc-600 text-lg">
                  <span className="font-medium text-zinc-900">
                    Documentation Preparation:
                  </span>{" "}
                  Our team assists in preparing the necessary documents, such as
                  passport copies, travel itineraries, and financial proofs.
                </li>
                <li className="text-justify tracking-tight text-zinc-600 text-lg">
                  <span className="font-medium text-zinc-900">
                    Application Submission:
                  </span>{" "}
                  We guide you through the visa application process, ensuring
                  accurate completion of forms and submission of required
                  documents.
                </li>
                <li className="text-justify tracking-tight text-zinc-600 text-lg">
                  <span className="font-medium text-zinc-900">
                    Interview Preparation:
                  </span>{" "}
                  If an interview is required, we offer coaching and guidance to
                  prepare you for the visa interview.
                </li>
                <li className="text-justify tracking-tight text-zinc-600 text-lg">
                  <span className="font-medium text-zinc-900">
                    Additional Services:
                  </span>{" "}
                  We provide ancillary services, such as travel insurance,
                  flight booking assistance, and accommodation recommendations.
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl pb-1 tracking-tight font-medium text-zinc-900">
                Countries We Cater to for Visitor Visas
              </h4>
              <p className="text-justify tracking-tight text-zinc-600 text-lg">
                We facilitate visitor visa services for the following countries:
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
                Whether you are planning a vacation, visiting family and
                friends, or exploring business opportunities abroad, Stallion
                Overseas Consultants is your trusted partner for hassle-free
                visitor visa applications.
              </p>
            </div>
          </section>
        </motion.div>
      </section>
    </div>
  );
}

export default page;
