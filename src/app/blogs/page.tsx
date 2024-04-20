"use client";
import BlogService from "@/services/blog.service";
import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Blogs() {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [filteredBlogs, setFilteredBlogs] = useState<any[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const blogService = BlogService.getInstance();

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

  // Filter blogs based on the selected country
  useEffect(() => {
    if (selectedCountry) {
      const filtered = blogs.filter((blog) => blog.country === selectedCountry);
      setFilteredBlogs(filtered);
    } else {
      // If no country is selected, show all blogs
      setFilteredBlogs(blogs);
    }
  }, [selectedCountry, blogs]);

  useEffect(() => {
    // Simulate website loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    // Cleanup function
    return () => clearTimeout(timer);
  }, []);

  return (
    <section>
      <motion.h1
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", duration: 1, delay: 0.4 }}
        className="pt-[130px] pb-6 text-center font-semibold sm:text-4xl tracking-tight text-2xl"
      >
        What are you interested in?
      </motion.h1>
      <div className="flex justify-center space-x-4 pb-10">
        {/* Render button for All */}
        {uniqueCountries.map((country) => (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", duration: 1 }}
            key={country}
            onClick={() => setSelectedCountry(country)}
            className={`px-4 py-2 rounded-lg ${
              country === selectedCountry
                ? "bg-zinc-100 shadow-md shadow-[#4761ab] text-zinc-800"
                : "bg-zinc-100 hover:shadow-md hover:shadow-[#4761ab] text-zinc-800"
            }`}
          >
            {country}
          </motion.button>
        ))}
      </div>
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
                height={75}
                quality={100}
                loading="lazy"
                objectFit="cover"
                className="w-full h-75 rounded-3xl z-0"
              />
              <span className="absolute top-0 left-0 m-4 border z-20 w-fit flex bg-zinc-500 transition duration-200 rounded-full border-zinc-200 px-4 py-1 backdrop-blur-lg">
                <span className="text-md font-medium text-gray-200 flex gap-6">
                  {blog.country}
                </span>
              </span>
            </a>
            <div className="p-3">
              <h2 className="text-2xl font-bold mb-2 tracking-tight">
                {blog.title.split(" ").slice(0, 9).join(" ")}
                {blog.title.split(" ").length > 9 ? "..." : ""}
              </h2>
              <p className="mb-4">
                {" "}
                {blog.description.split(" ").slice(0, 20).join(" ")}
                {blog.description.split(" ").length > 20 ? "..." : ""}
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
