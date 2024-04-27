"use client";
import BlogService from "@/services/blog.service";
import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Blogs() {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [filteredBlogs, setFilteredBlogs] = useState<any[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const blogService = BlogService.getInstance();
  const [isOpen, setIsOpen] = useState(false);
  const [isTagOpen, setIsTagOpen] = useState(false);

  const fetchBlogs = useCallback(async () => {
    try {
      const response = await blogService.getBlogs();
      setBlogs(response);
      setFilteredBlogs(response); // Initially, set filteredBlogs to all blogs
      console.log("Blogs", response);
    } catch (error) {
      console.log("Error fetching blogs", error);
    }
  }, [blogService]);

  useEffect(() => {
    fetchBlogs();
  }, [fetchBlogs]);

  // Extract unique country names from blogs
  const uniqueCountries = Array.from(
    new Set(blogs.map((blog) => blog.country))
  );

  // Extract unique tags from blogs
  const uniqueTags = Array.from(new Set(blogs.flatMap((blog) => blog.tags)));

  // Filter blogs based on the selected country
  useEffect(() => {
    if (selectedCountry || selectedTag) {
      let filtered = blogs;

      if (selectedCountry) {
        filtered = filtered.filter((blog) => blog.country === selectedCountry);
      }

      if (selectedTag) {
        filtered = filtered.filter((blog) => blog.tags.includes(selectedTag));
      }

      setFilteredBlogs(filtered);
    } else {
      // If no country or tag is selected, show all blogs
      setFilteredBlogs(blogs);
    }
  }, [selectedCountry, selectedTag, blogs]);

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
          {/* Country Dropdown */}
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

          {/* Tag Dropdown */}
          <div className="w-44 relative transition-all duration-500 z-10">
            <button
              className="shadow-md px-4 py-2 w-full relative flex flex-row items-center justify-between bg-white rounded-md"
              onClick={() => setIsTagOpen(!isTagOpen)}
            >
              <span className="text-gray-700">
                {selectedTag || "Select Tag"}
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
              {isTagOpen && (
                <motion.div
                  className="absolute w-full shadow-md mt-1 bg-white rounded-md flex flex-col"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  {uniqueTags.map((tag) => (
                    <div
                      key={tag}
                      className="flex flex-row justify-between items-center px-4 py-2 border-b border-zinc-100 hover:cursor-pointer hover:bg-zinc-100 transition duration-200"
                      onClick={() => {
                        setSelectedTag(tag);
                        setIsTagOpen(false);
                      }}
                    >
                      <span className="text-zinc-600 text-sm">{tag}</span>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Clear Filters Button */}
          <button
            className="bg-red-500 hover:bg-red-600 text-zinc-100 font-normal py-2 px-3 hover:shadow-md rounded-lg focus:outline-none focus:shadow-outline"
            onClick={() => {
              setSelectedCountry(null);
              setSelectedTag(null);
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
        {filteredBlogs.map((blog: any) => (
          <div
            key={blog.id}
            className="max-w-xl hover:cursor-pointer bg-white/80 border border-zinc-100 backdrop-blur-lg flex flex-col justify-between rounded-3xl hover:shadow-lg transition"
          >
            <a href={`/blogs/${blog.id}`} target="_blank" className="relative">
              <Image
                src={blog.imageUrl.href}
                alt="blog image"
                width={100}
                height={100}
                quality="100"
                loading="lazy"
                objectFit="cover"
                className="w-full h-64 rounded-3xl z-0 object-cover"
              />
              <span className="absolute top-0 left-0 m-4 border z-20 w-fit flex bg-zinc-500 transition duration-200 rounded-full border-zinc-200 px-4 py-1 backdrop-blur-lg">
                <span className="text-md font-medium text-gray-200 flex gap-6">
                  {blog.country}
                </span>
              </span>
            </a>
            <div className="p-3">
              <h2 className="text-2xl font-bold mb-2 tracking-tight">
                {blog.title.split(" ").slice(0, 8).join(" ")}
                {blog.title.split(" ").length > 8 ? "..." : ""}
              </h2>
              <p className="mb-4">
                {" "}
                {blog.description.split(" ").slice(0, 17).join(" ")}
                {blog.description.split(" ").length > 17 ? "..." : ""}
              </p>
              <a
                target="_blank"
                href={`/blogs/${blog.id}`}
                className="text-[#4761ab] hover:underline"
              >
                Read more...
              </a>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
