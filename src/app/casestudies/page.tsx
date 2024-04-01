import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function CaseStudies() {
  return (
    <div className="min-h-screen">
      <section>
        <div className="bg-zinc-100 pt-[150px]">
          <h2 className="text-zinc-800 text-4xl mb-10 pt-4 font-semibold flex justify-center text-center lg:text-left tracking-tight">
            Our Case Studies
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mx-auto container px-4 sm:px-6 lg:px-8 justify-center items-center">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="max-w-xl bg-white/80 border border-zinc-100 backdrop-blur-lg rounded-3xl hover:shadow-lg cursor-pointer transition"
              >
                <div className="relative">
                  <Image
                    src="/blog1.jpg"
                    alt="blog image"
                    width={100}
                    height={5}
                    className="w-full h-80 rounded-3xl z-0"
                  />
                  <span className="absolute top-0 left-0 m-4 border z-20 w-fit flex transition duration-200 rounded-full border-gray-800 px-4 py-1 backdrop-blur-md">
                    <span className="text-md font-medium text-gray-700 flex gap-6">
                      ICCRC Licensed
                    </span>
                  </span>
                </div>
                <div className="p-3">
                  <h2 className="text-2xl font-bold mb-2">Blog Title</h2>
                  <p className="mb-4">Blog description...</p>
                  <a
                    href="/blog-page"
                    className="text-[#4761ab] hover:underline"
                  >
                    Read more...
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
