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
import BlogService from "@/services/blog.service";
import { useRouter } from "next/navigation";

const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
];

const whyUs = [
  {
    content: "20+ years of expertise in International Education & Immigration.",
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
    image: "/NYU.png",
    alt: "New Youk University",
  },
  {
    image: "/UCalgary-logo.png",
    alt: "University of Calgary",
  },
  {
    image: "/University_of_Toronto-Logo.png",
    alt: "University of Toronto",
  },
  {
    image: "/university-college-london-logo.png",
    alt: "University College London",
  },
];

function Landing() {
  const [blogs, setBlogs] = useState<any[]>([]);
  const blogService = BlogService.getInstance();
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();
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
      const response = await blogService.getBlogs();
      setBlogs(response);
      console.log("Blogs", response);
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
      <section className="relative h-[50em] overflow-hidden pt-[100px]">
        <div className="relative inset-0 z-0 hidden lg:block">
          <motion.video
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
            preload="auto"
            className="w-full h-full"
            autoPlay
            playsInline
            controls
            controlsList="nodownload, noremoteplayback, noshare, nofullscreen"
            muted
            loop
          >
            <source src="/graduation.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </motion.video>
        </div>
        {/* Text Div */}
        <div className="absolute inset-0 z-10 flex justify-center items-center bg-gradient-to-r from-zinc-100 from-50% via-zinc-100/10 lg:flex-col lg:justify-center lg:items-start">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
            className="xl:text-center text-white lg:w-1/2 px-4"
          >
            <span className="border w-fit mx-auto flex transition duration-200 rounded-full border-gray-800 px-4 py-1 mb-4">
              <span className="text-md font-medium text-gray-700 flex gap-6">
                ICCRC Licensed
              </span>
            </span>

            <h1 className="text-2xl md:text-5xl font-semibold text-center text-gray-800 tracking-tighter xl:text-5xl xl:[line-height:1.125]">
              <Balancer>
                Stallion Overseas Consultants:
                <br className="" /> Facilitating Excellence in Study,{" "}
                <br className="" /> Work and Settlement{" "}
              </Balancer>
            </h1>

            <div className="mt-20">
              <p className="mx-auto max-w-2xl text-lg text-center text-gray-700">
                Our students have got admits into:
              </p>
              <InfiniteMovingImages
                items={logos}
                direction="right"
                speed="slow"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className=" bg-zinc-950 py-10 lg:py-14 lg:px-[12rem]">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.175 }}
          className="flex items-center sm:flex-row gap-8 flex-col text-center sm:justify-between text-zinc-50"
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
              <h2 className="text-xl sm:text-3xl font-semibold pt-5 text-center lg:text-left tracking-tight text-zinc-800 px-2 sm:px-0">
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
          <h2 className="text-zinc-100 text-3xl mb-16 pt-12 font-semibold flex justify-center text-center lg:text-left tracking-tight ">
            Loved by our clients
          </h2>
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="fast"
          />
        </div>
      </section>

      {/* Blogs */}
      <section>
        <div className="bg-zinc-100 py-20">
          <h2 className="text-zinc-800 text-4xl mb-16 pt-4 font-semibold flex justify-center text-center lg:text-left tracking-tight">
            Blogs
          </h2>
          <motion.div
            ref={ref}
            style={{
              scale: scaleProgess,
              opacity: opacityProgess,
            }}
            className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mx-auto container px-4 sm:px-6 lg:px-8 justify-between items-center"
          >
            {blogs
              .slice()
              .reverse()
              .map((blog: any) => (
                <div
                  key={blog.$id}
                  className="max-w-xl bg-white/80 border border-zinc-100 backdrop-blur-lg rounded-3xl hover:shadow-lg transition"
                >
                  <div className="relative">
                    <Image
                      src={blog.imageUrl.href}
                      alt="blog image"
                      width={100}
                      height={5}
                      quality={100}
                      loading="lazy"
                      sizes="100vw"
                      style={{
                        width: "100%",
                        height: "auto",
                      }}
                      className="w-full h-80 rounded-3xl z-0"
                    />
                    <span className="absolute top-0 left-0 m-4 border z-20 w-fit flex bg-zinc-500 transition duration-200 rounded-full border-zinc-200 px-4 py-1 backdrop-blur-lg">
                      <span className="text-md font-medium text-gray-200 flex gap-6">
                        {blog.country}
                      </span>
                    </span>
                  </div>
                  <div className="p-3">
                    <h2 className="text-2xl font-bold mb-2 tracking-tight">
                      {blog.title}
                    </h2>
                    <p className="mb-4">
                      {" "}
                      {blog.description.split(" ").slice(0, 20).join(" ")}
                      {blog.description.split(" ").length > 20 ? "..." : ""}
                    </p>
                    <a
                      href={`/blogs/${blog.$id}`}
                      className="text-[#4761ab] hover:underline"
                    >
                      Read more...
                    </a>
                  </div>
                </div>
              ))}
          </motion.div>
          <div className="flex justify-center mt-8">
            <Link
              href={"/blogs"}
              className="group bg-[#4761ab]/90 px-7 py-3 flex items-center gap-2 text-zinc-50 rounded-full border border-zinc-400/50 outline-none"
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
      <section id="contact" className="flex justify-center">
        {/* Left side with image (hidden on screens less than lg) */}
        <div className="hidden lg:block w-full lg:w-1/2 h-full p-5">
          {/* Insert your image here */}
          <Image
            src="contact.jpg"
            alt="Your Image"
            width={100}
            height={5}
            className="object-cover object-center h-[772px] w-full rounded-2xl"
          />
        </div>
        {/* Right side with form */}
        <div className="w-full lg:w-1/2">
          <form className="bg-zinc-100 rounded px-8 pt-6 pb-8 max-w-3xl">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="fullname"
              >
                Full Name
              </label>
              <input
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                id="fullname"
                type="text"
                placeholder="Full Name"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="phone"
              >
                Phone Number
              </label>
              <input
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                id="phone"
                type="tel"
                placeholder="+91"
              />
            </div>
            <div className="mb-4">
              <input
                className="mr-2 leading-tight"
                type="checkbox"
                id="whatsapp"
              />
              <label className="text-sm" htmlFor="whatsapp">
                Get important information on WhatsApp
              </label>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email ID
              </label>
              <input
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                id="email"
                type="email"
                placeholder="Email ID"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="city"
              >
                City
              </label>
              <input
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                id="city"
                type="text"
                placeholder="City"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="destination"
              >
                Preferred Study Destinations
              </label>
              <div>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-blue-500"
                    value="Country 1"
                  />
                  <span className="ml-2">Country 1</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-blue-500"
                    value="Country 2"
                  />
                  <span className="ml-2">Country 2</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-blue-500"
                    value="Country 3"
                  />
                  <span className="ml-2">Country 3</span>
                </label>
                {/* Add more checkboxes as needed */}
              </div>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="intake"
              >
                Which intake do you plan to study?
              </label>
              <input
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                id="intake"
                type="text"
                placeholder="Intake Plan"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="contacttime"
              >
                Preferred Contact Time
              </label>
              <input
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                id="contacttime"
                type="time"
              />
            </div>
            <div className="mb-10">
              <input
                className="mr-2 leading-tight"
                type="checkbox"
                id="terms"
              />
              <label className="text-sm" htmlFor="terms">
                I agree to the Terms and Privacy Policy
              </label>
            </div>
            <div className="flex items-center justify-center">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Landing;
