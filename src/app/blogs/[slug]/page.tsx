"use client";
import React, { useCallback, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import toast from "react-hot-toast";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import getLocalizedDate from "@/lib/getLocalizedDate";
import { motion } from "framer-motion";

type BlogPost = {
  title: string;
  categories: string[];
  thumbnail: string;
  summary: string;
  publishedDate: string;
  id: string;
  country: string;
  lastUpdated: string;
};

type BlogData = {
  post: BlogPost;
  markdown: string;
};

export default function Page() {
  const pathname = usePathname();
  const [blog, setBlog] = useState<BlogData | null>(null);
  const slug = pathname!.split("/")[2];

  const fetchBlogs = useCallback(async () => {
    try {
      const response = await fetch(`/api/notion/${slug}`);
      if (!response.ok) {
        throw new Error("Error fetching blog post");
      }
      const data = await response.json();
      console.log("DATA", data);

      setBlog(data);
    } catch (error: any) {
      toast.error("Error fetching blog post, try again later.");
    }
  }, [slug]);

  useEffect(() => {
    if (slug) {
      fetchBlogs();
    }
  }, [slug, fetchBlogs]);

  if (!blog) {
    return (
      <div className="pt-[400px] pb-[400px] flex justify-center items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, rotate: 360 }} // Animate rotation
          transition={{ delay: 0.5, duration: 1, repeat: Infinity }}
        >
          <svg
            width="100"
            height="100"
            viewBox="0 0 50 50"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="25"
              cy="25"
              r="20"
              fill="none"
              strokeWidth="3"
              stroke="url(#spinner-gradient)" // Apply gradient stroke
              strokeLinecap="round"
            />
            <defs>
              {/* Define gradient colors */}
              <linearGradient
                id="spinner-gradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#0070f3" />
                <stop offset="100%" stopColor="#00c2ff" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      </div>
    );
  }

  const publishedOn = getLocalizedDate(blog.post.publishedDate);
  const modifiedDate = getLocalizedDate(blog.post.lastUpdated);

  return (
    <div className="pt-[100px]">
      {blog && (
        <div>
          <div className="px-6 py-16 pt-16 pb-48 mx-auto -mb-48 text-center bg-zinc-200 md:pb-96 md:-mb-96">
            <div className="max-w-3xl mx-auto">
              <div className="sm:flex items-center justify-center mb-2 space-x-2 text-sm text-zinc-500">
                <div className="">{publishedOn}</div>
                {publishedOn !== modifiedDate && (
                  <>
                    <span className="sm:block hidden">•</span>
                    <span className="0">Updated on {modifiedDate}</span>
                  </>
                )}
              </div>
              <div className="font-extrabold tracking-tight text-gray-900 text-w-4xl sm:text-4xl text-2xl">
                {blog.post.title}
              </div>
              <div className="max-w-3xl mx-auto mt-3 text-xl leading-8 text-gray-500 sm:mt-4">
                {blog.post.summary}
              </div>
            </div>
          </div>

          <div className="max-w-5xl px-6 mx-auto my-16 md:px-8">
            <Image
              className="rounded-lg aspect-video"
              objectFit="cover"
              src={blog.post.thumbnail}
              placeholder="blur"
              blurDataURL={blog.post.thumbnail}
              layout="intrinsic"
              width={1200}
              height={684}
              alt={"blog cover"}
              priority={true}
            />
          </div>
          <div className="max-w-5xl px-6 mx-auto mb-24 space-y-8 md:px-8">
            <article className="prose">
              <ReactMarkdown>{blog.markdown}</ReactMarkdown>
            </article>
          </div>
        </div>
      )}
    </div>
  );
}
