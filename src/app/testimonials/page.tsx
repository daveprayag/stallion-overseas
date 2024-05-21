"use client";
import TestimonialService from "@/services/testimonial.service";
import React, { useCallback, useEffect, useState } from "react";
import Masonry from "@mui/lab/Masonry";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function Testimonials() {
  const testimonialService = TestimonialService.getInstance();
  const [testimonials, setTestimonials] = useState<any[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isTagOpen, setIsTagOpen] = useState(false);

  const fetchTestimonials = useCallback(async () => {
    try {
      const response = await testimonialService.getTestimonials();
      setTestimonials(response);
      console.log("Testimonials", response);
    } catch (error) {
      console.log("Error fetching testimonials", error);
    }
  }, [testimonialService]);

  useEffect(() => {
    fetchTestimonials();
  }, [fetchTestimonials]);

  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const columns = matchesSM ? 1 : matchesMD ? 2 : 3;

  // Extract unique countries and tags from testimonials
  const uniqueCountries = Array.from(
    new Set(testimonials.map((testimonial) => testimonial.country))
  );
  const uniqueTags = Array.from(
    new Set(
      testimonials
        .map((testimonial) => testimonial.tag)
        .filter((tag) => tag !== null)
    )
  );

  return (
    <section>
      <div className="w-full min-h-screen flex-col flex items-center pt-[140px]">
        <h1 className="pb-10 text-center font-semibold sm:text-4xl tracking-tight text-2xl">
          What are you interested in?
        </h1>
        <div className="flex sm:flex-row flex-col justify-between items-center h-[200px] sm:h-auto bg-[#4761ab]/55 w-[280px] sm:w-[500px] py-5 sm:py-10 rounded-lg px-4">
          {/* Country Dropdown */}
          <div className="w-44 relative transition-all duration-500 z-10">
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
                {selectedTag || "Select Category"}
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

        <div className="max-w-7xl md:mx-20 mx-10 py-10">
          <Masonry columns={columns} spacing={2}>
            {testimonials
              .filter((testimonial) =>
                selectedCountry ? testimonial.country === selectedCountry : true
              )
              .filter((testimonial) =>
                selectedTag ? testimonial.tag === selectedTag : true
              )
              .map((testimonial, index) => (
                <div
                  key={index}
                  className="h-fit max-w-full rounded-xl hover:shadow-lg border p-4 ease-in-out duration-300 bg-white"
                >
                  {testimonial.youtubeLink ? (
                    <iframe
                      src={testimonial.youtubeLink}
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen={true}
                      className="w-full h-[200px] rounded-lg"
                    ></iframe>
                  ) : (
                    <div className="text-justify">
                      <span className="text-[15px] text-zinc-600 font-medium">
                        {testimonial.content}
                      </span>
                      <div className="mt-6 flex flex-row h-full items-center text-start ">
                        <Image
                          src={testimonial.imageUrl.href}
                          width={45}
                          height={45}
                          alt={testimonial.name + "testimonial image"}
                          className="w-11 h-11 rounded-full mr-2 object-cover"
                        />
                        <span className="flex flex-col gap-0.5">
                          <span className="text-sm text-zinc-700 font-medium">
                            {testimonial.name}
                          </span>
                          <span className="text-sm text-zinc-500 font-normal">
                            {testimonial.university} · {testimonial.country}
                          </span>
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              ))}
          </Masonry>
        </div>
      </div>
    </section>
  );
}
