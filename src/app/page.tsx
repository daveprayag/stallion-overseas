"use client";
import Counter from "@/components/Counter";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { InfiniteMovingImages } from "@/components/ui/infinite-moving-images";
import Image from "next/image";
import Link from "next/link";
import React, { useCallback, useEffect, useRef } from "react";
import Balancer from "react-wrap-balancer";
import { useState } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import Carousel from "@/components/Carousel";
import { InfiniteMovingAnnouncements } from "@/components/ui/infinite-moving-announcements";
import ContactForm from "@/components/Contact-Form";
import getLocalizedDate from "@/lib/getLocalizedDate";
import slugify from "slugify";

const testimonials = [
    {
        quote: "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
        name: "Charles Dickens",
        title: "A Tale of Two Cities",
    },
];

const whyUs = [
    {
        content:
            "20+ years of expertise in International Education & Immigration.",
        logo: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-[20px] h-[20px] sm:w-7 sm:h-7"
            >
                <path
                    fillRule="evenodd"
                    d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                    clipRule="evenodd"
                />
            </svg>
        ),
    },
    {
        content: "Global Education & Immigration Experts",
        logo: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4 sm:w-7 sm:h-7"
            >
                <path
                    fillRule="evenodd"
                    d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                    clipRule="evenodd"
                />
            </svg>
        ),
    },
    {
        content: "Dedicated Team Offers Comprehensive Guidance",
        logo: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-[18px] h-[18px] sm:w-7 sm:h-7"
            >
                <path
                    fillRule="evenodd"
                    d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                    clipRule="evenodd"
                />
            </svg>
        ),
    },
    {
        content: "Expert Coaching in IELTS/PTE, Soft Skills",
        logo: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4 sm:w-7 sm:h-7"
            >
                <path
                    fillRule="evenodd"
                    d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                    clipRule="evenodd"
                />
            </svg>
        ),
    },
    {
        content: "Official Exam Registration Center (IDP)",
        logo: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4 sm:w-7 sm:h-7"
            >
                <path
                    fillRule="evenodd"
                    d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                    clipRule="evenodd"
                />
            </svg>
        ),
    },
    {
        content: "Over 20 years of Trusted Expertise",
        logo: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4 sm:w-7 sm:h-7"
            >
                <path
                    fillRule="evenodd"
                    d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                    clipRule="evenodd"
                />
            </svg>
        ),
    },
];

const logos = [
    {
        image: "/new-york-university.png",
        alt: "New York University",
    },
    {
        image: "/university_of_calgary.png",
        alt: "University of Calgary",
    },
    {
        image: "/university-of-toronto.png",
        alt: "University of Toronto",
    },
    {
        image: "/university-college-london.png",
        alt: "University College London",
    },
    {
        image: "/monash-university.png",
        alt: "Monash University",
    },
];

interface Blog {
    id: string;
    title: string;
    description: string;
    country: string;
    categories: string[];
    imageUrl: { href: string };
    publishDate: string;
    minRead: string;
}

function Home() {
    const [blogs, setBlogs] = useState<any[]>([]);
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"],
    });
    const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

    const cardVariants: Variants = {
        offscreen: {
            y: 300,
        },
        onscreen: {
            y: 0,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 0.5,
            },
        },
    };

    const fetchBlogs = useCallback(async () => {
        try {
            const response = await fetch("/api/notion/notion");
            const data = await response.json();
            const mappedBlogs: Blog[] = data.map((blog: any) => ({
                id: blog.id,
                title: blog.title,
                description: blog.summary,
                country: blog.country,
                categories: blog.categories,
                imageUrl: { href: blog.thumbnail },
                publishDate: blog.publishDate,
                minRead: blog.minRead,
            }));
            setBlogs(mappedBlogs);
        } catch (error) {
            console.log("Error fetching blogs", error);
        }
    }, []);

    useEffect(() => {
        fetchBlogs();
    }, [fetchBlogs]);

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[45rem] sm:h-[44rem] overflow-hidden pt-[100px]">
                <div className="relative inset-0 z-0 hidden lg:block">
                    <motion.video
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ type: "tween", duration: 0.2 }}
                        preload="auto"
                        className="w-full h-full object-right-top object-cover"
                        autoPlay
                        playsInline
                        controls
                        controlsList="nodownload, noremoteplayback, noshare, nofullscreen"
                        muted
                        loop
                    >
                        <source src="/landing-video.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </motion.video>
                </div>
                {/* Text Div */}
                <div className="absolute inset-0 z-10 flex sm:pt-0 pt-[80px] justify-center items-center bg-gradient-to-r from-zinc-100 from-50% via-zinc-100/10 lg:flex-col lg:justify-center lg:items-start">
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ type: "tween", duration: 0.2 }}
                        className="xl:text-center text-white lg:w-1/2 px-4 md:pt-4"
                    >
                        <Image
                            src="/landing-mobile-image.jpeg"
                            alt="Stallion Overseas Consultants"
                            className="w-[300px] sm:hidden block mx-auto rounded-lg"
                        />
                        <span className="border w-fit mx-auto flex transition duration-200 rounded-full border-gray-800 px-4 py-1 mb-4 mt-4">
                            <span className="text-md font-medium text-gray-700 flex gap-6">
                                ICCRC Licensed
                            </span>
                        </span>
                        <h1 className="text-2xl sm:text-5xl font-semibold text-center text-gray-800 tracking-tighter xl:text-5xl xl:[line-height:1.125]">
                            <Balancer>
                                Stallion Overseas Consultants:
                                <br className="" /> Facilitating Excellence in
                                Study, <br className="" /> Work and Settlement{" "}
                            </Balancer>
                        </h1>
                        <div className="mt-20">
                            <p className="mx-auto max-w-2xl text-lg text-center text-gray-700">
                                Our students have got admits into:
                            </p>
                            <InfiniteMovingImages
                                items={logos}
                                direction="right"
                                speed="normal"
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Announcements Section */}
            <section>
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: "tween", duration: 0.2 }}
                >
                    <InfiniteMovingAnnouncements
                        direction="right"
                        speed="fast"
                    />
                </motion.div>
            </section>

            {/* Milestones Section */}
            <section className="">
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.175 }}
                    className="flex items-center sm:flex-row gap-8 bg-zinc-950 py-10 lg:py-14 lg:px-[12rem] flex-col text-center sm:justify-between text-zinc-50"
                >
                    <div className="flex flex-col">
                        <h2 className="text-wrap text-4xl text-zinc-50 font-semibold tracking-tighter">
                            <span>
                                <Counter value={7500} />+
                            </span>
                        </h2>
                        <p className="text-wrap tracking-tighter font-medium text-xl">
                            Students Guided
                        </p>
                    </div>
                    <div className="flex flex-col">
                        <h2 className="text-wrap text-4xl text-zinc-50 font-semibold tracking-tighter">
                            <span>
                                <Counter value={1200} />+
                            </span>
                        </h2>
                        <p className="text-wrap tracking-tighter font-medium text-xl">
                            {" "}
                            Universities and Colleges
                        </p>
                    </div>
                    <div className="flex flex-col">
                        <h2 className="text-wrap text-4xl text-zinc-50 font-semibold tracking-tighter">
                            <span>
                                <Counter value={7} />+
                            </span>
                        </h2>
                        <p className="text-wrap tracking-tighter font-medium text-xl">
                            Countries
                        </p>
                    </div>
                    <div className="flex flex-col">
                        <h2 className="text-wrap text-4xl text-zinc-50 font-semibold tracking-tighter">
                            <span>
                                <Counter value={90} />
                                %+
                            </span>
                        </h2>
                        <p className="text-wrap tracking-tighter font-medium text-xl">
                            Success ratio
                        </p>
                    </div>
                </motion.div>
            </section>

            {/* Why us Section */}
            <section className="bg-zinc-100">
                <div className="max-w-screen-xl py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
                    <div className="lg:grid lg:grid-cols-2">
                        <div className="text-gray-800 sm:text-lg ">
                            <h2 className="text-xl md:text-3xl xl:text-5xl font-semibold pt-5 text-center lg:text-left tracking-tight text-zinc-800 px-2 sm:px-4">
                                Why Stallion Overseas Consultants?
                            </h2>
                        </div>
                        <div className="w-full">
                            <motion.ul className="flex flex-col gap-4 px-4 lg:px-0 mt-5 lg:mt-0">
                                {whyUs.map((item, index) => (
                                    <motion.li
                                        initial="offscreen"
                                        whileInView="onscreen"
                                        viewport={{ once: true, amount: 0.5 }}
                                        key={index}
                                        variants={cardVariants}
                                        className="flex flex-row text-[12px] md:text-[18px] rounded-full gap-2 border-2 tracking-tight items-center font-medium border-gray-900 p-2 md:p-5"
                                    >
                                        {item.logo}
                                        {item.content}
                                    </motion.li>
                                ))}
                            </motion.ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section>
                <div className="bg-zinc-950 flex flex-col pb-20">
                    <h2 className="text-zinc-100 text-2xl md:text-3xl xl:text-5xl py-10 sm:py-16 font-semibold flex justify-center text-center lg:text-left tracking-tight ">
                        Success Stories
                    </h2>
                    <InfiniteMovingCards
                        items={testimonials}
                        direction="right"
                        speed="normal"
                    />
                    <div className="flex justify-center mr-5 mt-5">
                        <Link
                            href={"/testimonials"}
                            className="group bg-zinc-200/90 px-4 py-2 flex items-center gap-2 text-zinc-800 rounded-xl border border-zinc-400/50 outline-none"
                        >
                            More Testimonials
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="h-4 w-4 group-hover:translate-x-1 transition"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                                />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Blogs */}
            <section>
                <div className="bg-zinc-100 pt-10 sm:pt-20 mx-2">
                    <h2 className="text-zinc-800 text-3xl md:text-3xl xl:text-5xl mb-0 sm:mb-10 font-semibold flex justify-center text-center lg:text-left tracking-tight">
                        Blogs
                    </h2>
                    <motion.div
                        ref={ref}
                        style={{
                            scale: scaleProgess,
                            opacity: opacityProgess,
                        }}
                        className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mx-auto max-w-7xl justify-between items-center"
                    >
                        {blogs
                            .slice(0, 3)
                            .reverse()
                            .map((blog: any) => (
                                <div
                                    key={slugify(blog.title)}
                                    className="max-w-xl hover:cursor-pointer bg-white/80 border border-zinc-100 mx-1 backdrop-blur-lg flex flex-col justify-between ease-in-out duration-300 rounded-xl hover:shadow-xl"
                                >
                                    <a
                                        href={`/blogs/${slugify(
                                            blog.title
                                        ).toLowerCase()}`}
                                        className="relative"
                                    >
                                        <div className="px-3 pt-3">
                                            <div className="flex justify-between items-center pb-3">
                                                <p className="text-sm font-medium text-[#4761ab]">
                                                    <span className="w-fit flex bg-white/80 border-2 border-zinc-400 transition duration-200 rounded-lg px-2 py-1">
                                                        <span className="text-sm font-medium tracking-tight text-zinc-500">
                                                            {blog.country}
                                                        </span>
                                                    </span>
                                                </p>
                                                <p className="text-sm gap-1 font-medium tracking-tight text-zinc-500">
                                                    {blog.minRead}
                                                </p>
                                            </div>
                                            <Image
                                                src={blog.imageUrl.href}
                                                alt="blog image"
                                                width={100}
                                                height={100}
                                                loading="eager"
                                                className="w-full h-60 rounded-lg object-cover shadow-md"
                                            />
                                        </div>
                                        {/* <span className="absolute top-0 left-0 m-4 border z-20 w-fit flex bg-zinc-50 transition duration-200 rounded-lg  px-2 py-1">
                <span className="text-md font-medium text-zinc-900 flex gap-6">
                  {blog.country}
                </span>
              </span> */}
                                    </a>
                                    <div className="p-4">
                                        <p className="text-sm font-medium tracking-tight text-[#4761ab] mb-3">
                                            {getLocalizedDate(blog.publishDate)}
                                        </p>
                                        <h2 className="text-xl font-medium tracking-tight text-zinc-900">
                                            {blog.title
                                                .split(" ")
                                                .slice(0, 8)
                                                .join(" ")}
                                            {blog.title.split(" ").length > 8
                                                ? "..."
                                                : ""}
                                        </h2>
                                        <p className="mb-3 text-md tracking-tight text-zinc-600">
                                            {blog.description
                                                .split(" ")
                                                .slice(0, 17)
                                                .join(" ")}
                                            {blog.description.split(" ")
                                                .length > 17
                                                ? "..."
                                                : ""}
                                        </p>

                                        {/* <a
                target="_blank"
                href={`/blogs/${slugify(blog.title).toLowerCase()}`}
                className="text-zinc-700 font-medium tracking-tight flex gap-1 items-center hover:underline transition duration-300 ease-in-out"
              >
                Read more
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
                    stroke="currentColor"
                    className="size-4 text-zinc-700"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </span>
              </a> */}
                                    </div>
                                </div>
                            ))}
                    </motion.div>
                    <div className="flex justify-center mt-6">
                        <Link
                            href={"/blogs"}
                            className="group bg-[#4761ab]/90 px-4 py-2 flex items-center gap-2 text-zinc-50 font-medium rounded-xl border border-zinc-400/50 outline-none"
                        >
                            More Blogs
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="h-4 w-4 group-hover:translate-x-1 transition"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                                />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section
                className=" pt-[80px] sm:pt-[100px] pb-20 px-0 xl:px-40"
                id="contact"
            >
                <h2 className="text-zinc-800 text-3xl md:text-3xl mb-10 xl:text-5xl font-semibold flex justify-center text-center lg:text-left tracking-tight">
                    Contact Us
                </h2>
                <div className="flex justify-center">
                    {/* Left side with image (hidden on screens less than lg) */}
                    <div className="hidden lg:block w-full lg:w-1/2 h-full">
                        <Carousel />
                    </div>
                    {/* Right side with form */}
                    <div className="w-full lg:w-1/2 pt-5">
                        <ContactForm />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
