"use client";
import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import slugify from "slugify";
import getLocalizedDate from "@/lib/getLocalizedDate";

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

export default function Blogs() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [filteredBlogs, setFilteredBlogs] = useState<Blog[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

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
      setFilteredBlogs(mappedBlogs);
    } catch (error) {
      console.log("Error fetching blogs", error);
    }
  }, []);

  useEffect(() => {
    fetchBlogs();
  }, [fetchBlogs]);

  const uniqueCountries = Array.from(
    new Set(blogs.map((blog) => blog.country))
  );
  const uniqueCategories = Array.from(
    new Set(blogs.flatMap((blog) => blog.categories))
  );

  useEffect(() => {
    if (selectedCountry || selectedCategory) {
      let filtered = blogs;
      if (selectedCountry) {
        filtered = filtered.filter((blog) => blog.country === selectedCountry);
      }
      if (selectedCategory) {
        filtered = filtered.filter((blog) =>
          blog.categories.includes(selectedCategory)
        );
      }
      setFilteredBlogs(filtered);
    } else {
      setFilteredBlogs(blogs);
    }
  }, [selectedCountry, selectedCategory, blogs]);

  return (
    <section>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", duration: 1, delay: 0.4 }}
        className="flex flex-col justify-center items-center mb-10"
      >
        <h1 className="pt-[130px] pb-10 text-center font-semibold sm:text-4xl tracking-tight text-2xl">
          What are you interested in?
        </h1>
        <div className="flex sm:flex-row flex-col justify-between items-center h-[200px] sm:h-auto bg-[#4761ab]/55 w-[280px] sm:w-[500px] py-5 sm:py-10 rounded-lg px-4">
          <div className="w-44 relative transition-all duration-500 z-20">
            <button
              className="shadow-md px-4 py-2 w-full relative flex flex-row items-center justify-between bg-white rounded-md"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="text-gray-700">
                {selectedCountry || "Select Country"}
              </span>
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 14.707a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L10 12.586l3.293-3.293a1 1 0 0 1 1.414 1.414l-4 4z"
                />
              </svg>
            </button>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  className="absolute w-full shadow-md mt-1 bg-white rounded-md flex flex-col z-20"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  {uniqueCountries.map((country) => (
                    <div
                      key={country}
                      className="flex flex-row justify-between items-center px-4 py-2 border-b border-gray-100 hover:cursor-pointer hover:bg-zinc-100 transition duration-200"
                      onClick={() => {
                        setSelectedCountry(country);
                        setIsOpen(false);
                      }}
                    >
                      <span className="text-zinc-600 text-sm">{country}</span>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="w-44 relative transition-all duration-500 z-10">
            <button
              className="shadow-md px-4 py-2 w-full relative flex flex-row items-center justify-between bg-white rounded-md"
              onClick={() => setIsCategoryOpen(!isCategoryOpen)}
            >
              <span className="text-gray-700">
                {selectedCategory || "Select Category"}
              </span>
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 14.707a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L10 12.586l3.293-3.293a1 1 0 0 1 1.414 1.414l-4 4z"
                />
              </svg>
            </button>
            <AnimatePresence>
              {isCategoryOpen && (
                <motion.div
                  className="absolute w-full shadow-md mt-1 bg-white rounded-md flex flex-col"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  {uniqueCategories.map((category) => (
                    <div
                      key={category}
                      className="flex flex-row justify-between items-center px-4 py-2 border-b border-zinc-100 hover:cursor-pointer hover:bg-zinc-100 transition duration-200"
                      onClick={() => {
                        setSelectedCategory(category);
                        setIsCategoryOpen(false);
                      }}
                    >
                      <span className="text-zinc-600 text-sm">{category}</span>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button
            className="bg-red-500 hover:bg-red-600 text-zinc-100 font-normal py-2 px-3 hover:shadow-md rounded-lg focus:outline-none focus:shadow-outline"
            onClick={() => {
              setSelectedCountry(null);
              setSelectedCategory(null);
            }}
          >
            Reset
          </button>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "tween", duration: 0.7 }}
        className="bg-zinc-100 pb-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mx-auto container px-4 sm:px-6 lg:px-8 justify-between items-center"
      >
        {filteredBlogs.map((blog) => (
          <div
            key={slugify(blog.title)}
            className="max-w-xl hover:cursor-pointer bg-white/80 border border-zinc-100 backdrop-blur-lg flex flex-col justify-between ease-in-out duration-300 rounded-xl hover:shadow-xl"
          >
            <a
              href={`/blogs/${slugify(blog.title).toLowerCase()}`}
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
                  priority={true}
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
                {blog.title.split(" ").slice(0, 8).join(" ")}
                {blog.title.split(" ").length > 8 ? "..." : ""}
              </h2>
              <p className="mb-3 text-md tracking-tight text-zinc-600">
                {blog.description.split(" ").slice(0, 17).join(" ")}
                {blog.description.split(" ").length > 17 ? "..." : ""}
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
    </section>
  );
}
