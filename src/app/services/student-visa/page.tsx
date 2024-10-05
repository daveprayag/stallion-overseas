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
                        Student Visa Services
                    </h1>
                    <section className="max-w-6xl sm:px-[80px] px-6 sm:pt-20 pt-10 space-y-10">
                        <div>
                            <h4 className="text-xl pb-1 tracking-tight font-medium text-zinc-900">
                                What is a Student Visa?
                            </h4>
                            <p className="text-justify tracking-tight text-zinc-600 text-lg">
                                A student visa is a document issued by a foreign
                                country that allows international students to
                                study at educational institutions within that
                                country. It is a crucial requirement for
                                pursuing higher education abroad and typically
                                comes with specific conditions and duration.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-xl pb-1 tracking-tight font-medium text-zinc-900">
                                How We Can Help You with Student Visas
                            </h4>
                            <p className="text-justify tracking-tight text-zinc-600 text-lg">
                                At Stallion Overseas Consultants, we specialize
                                in assisting students with obtaining student
                                visas for various countries, including Canada,
                                the United Kingdom, Australia, New Zealand, the
                                United States, and European Union nations. Our
                                expert team provides comprehensive services to
                                guide you through the entire visa application
                                process:
                            </p>
                            <ul className="pt-10 px-5 space-y-3">
                                <li className="text-justify tracking-tight text-zinc-600 text-lg">
                                    <span className="font-medium text-zinc-900">
                                        Initial Consultation:
                                    </span>{" "}
                                    We conduct a detailed assessment of your
                                    academic background, career goals, and
                                    desired study destination.
                                </li>
                                <li className="text-justify tracking-tight text-zinc-600 text-lg">
                                    <span className="font-medium text-zinc-900">
                                        University Selection:
                                    </span>{" "}
                                    We help you choose the right university and
                                    course that aligns with your aspirations.
                                </li>
                                <li className="text-justify tracking-tight text-zinc-600 text-lg">
                                    <span className="font-medium text-zinc-900">
                                        Visa Application Assistance:
                                    </span>{" "}
                                    Our team provides step-by-step guidance on
                                    preparing and submitting your visa
                                    application, ensuring compliance with all
                                    requirements.
                                </li>
                                <li className="text-justify tracking-tight text-zinc-600 text-lg">
                                    <span className="font-medium text-zinc-900">
                                        Documentation Support:
                                    </span>{" "}
                                    We assist in gathering the necessary
                                    documents, such as academic transcripts,
                                    financial statements, and letters of
                                    recommendation.
                                </li>
                                <li className="text-justify tracking-tight text-zinc-600 text-lg">
                                    <span className="font-medium text-zinc-900">
                                        Interview Preparation:
                                    </span>{" "}
                                    If required, we offer coaching and
                                    preparation for visa interviews.
                                </li>
                                <li className="text-justify tracking-tight text-zinc-600 text-lg">
                                    <span className="font-medium text-zinc-900">
                                        Post-Visa Services:
                                    </span>{" "}
                                    Once your visa is approved, we provide
                                    support with pre-departure preparations and
                                    settling in your new country.
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-xl pb-1 tracking-tight font-medium text-zinc-900">
                                Countries We Cater to for Student Visas
                            </h4>
                            <p className="text-justify tracking-tight text-zinc-600 text-lg">
                                We cater to student visa services for the
                                following countries:
                            </p>
                            <ul className="pt-10 grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-wrap md:justify-between gap-4">
                                <li className="rounded-xl p-2 hover:shadow-md ease-in-out duration-300 flex items-center justify-center">
                                    <Link
                                        href="/countries/canada"
                                        className="flex flex-col items-center"
                                    >
                                        <Image
                                            src="/media/canada.png"
                                            width={50}
                                            height={50}
                                            alt="canada-logo"
                                        />
                                        <span className="font-medium text-zinc-700 text-lg">
                                            Canada
                                        </span>
                                    </Link>
                                </li>
                                <li className="rounded-xl p-2 hover:shadow-md ease-in-out duration-300 flex items-center justify-center">
                                    <Link
                                        href="/countries/usa"
                                        className="flex flex-col items-center"
                                    >
                                        <Image
                                            src="/media/united-states.png"
                                            width={50}
                                            height={50}
                                            alt="usa-logo"
                                        />
                                        <span className="font-medium text-zinc-700 text-lg">
                                            United States
                                        </span>
                                    </Link>
                                </li>
                                <li className="rounded-xl p-2 hover:shadow-md ease-in-out duration-300 flex items-center justify-center">
                                    <Link
                                        href="/countries/australia"
                                        className="flex flex-col items-center"
                                    >
                                        <Image
                                            src="/media/australia.png"
                                            width={50}
                                            height={50}
                                            alt="australia-flag"
                                        />
                                        <span className="font-medium text-zinc-700 text-lg">
                                            Australia
                                        </span>
                                    </Link>
                                </li>
                                <li className="rounded-xl p-2 hover:shadow-md ease-in-out duration-300 flex items-center justify-center">
                                    <Link
                                        href="/countries/uk"
                                        className="flex flex-col items-center"
                                    >
                                        <Image
                                            src="/media/united-kingdom.png"
                                            width={50}
                                            height={50}
                                            alt="uk-flag"
                                        />
                                        <span className="font-medium text-zinc-700 text-lg">
                                            United Kingdom
                                        </span>
                                    </Link>
                                </li>
                                <li className="rounded-xl p-2 hover:shadow-md ease-in-out duration-300 flex items-center justify-center">
                                    <Link
                                        href="/countries/newzealand"
                                        className="flex flex-col items-center"
                                    >
                                        <Image
                                            src="/media/new-zealand.png"
                                            width={50}
                                            height={50}
                                            alt="newzealand-flag"
                                        />
                                        <span className="font-medium text-zinc-700 text-lg">
                                            New Zealand
                                        </span>
                                    </Link>
                                </li>
                                <li className="rounded-xl p-2 hover:shadow-md ease-in-out duration-300 flex items-center justify-center">
                                    <Link
                                        href="/countries/germany"
                                        className="flex flex-col items-center"
                                    >
                                        <Image
                                            src="/media/germany.png"
                                            width={50}
                                            height={50}
                                            alt="germany-flag"
                                        />
                                        <span className="font-medium text-zinc-700 text-lg">
                                            Germany
                                        </span>
                                    </Link>
                                </li>
                                <li className="rounded-xl p-2 hover:shadow-md ease-in-out duration-300 flex items-center justify-center">
                                    <Link
                                        href="/countries/france"
                                        className="flex flex-col items-center"
                                    >
                                        <Image
                                            src="/media/france.png"
                                            width={50}
                                            height={50}
                                            alt="france-flag"
                                        />
                                        <span className="font-medium text-zinc-700 text-lg">
                                            France
                                        </span>
                                    </Link>
                                </li>
                                <li className="rounded-xl p-2 hover:shadow-md ease-in-out duration-300 flex items-center justify-center">
                                    <Link
                                        href="/countries/dubai"
                                        className="flex flex-col items-center"
                                    >
                                        <Image
                                            src="/media/dubai.png"
                                            width={50}
                                            height={50}
                                            alt="dubai-logo"
                                        />
                                        <span className="font-medium text-zinc-700 text-lg">
                                            Dubai
                                        </span>
                                    </Link>
                                </li>
                            </ul>
                            <p className="text-justify sm:text-center text-zinc-600 text-lg pt-8">
                                Whether you are aiming to pursue undergraduate,
                                postgraduate, or vocational studies abroad,
                                Stallion Overseas Consultants is committed to
                                facilitating your academic journey with expert
                                guidance and personalized support.
                            </p>
                        </div>
                    </section>
                </motion.div>
            </section>
        </div>
    );
}

export default page;
