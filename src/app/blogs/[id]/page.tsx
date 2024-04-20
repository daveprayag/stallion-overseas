"use client";
import BlogService from "@/services/blog.service";
import React, { useCallback, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function page() {
  const pathname = usePathname();
  const [blog, setBlog] = useState<any>({});
  const blogService = BlogService.getInstance();

  const fetchBlogs = useCallback(async () => {
    try {
      const { id } = { id: pathname.split("/")[2] };
      const response: any = await blogService.getBlogById(id);
      setBlog(response);
      console.log("Blog with id", response);
    } catch (error) {
      console.log("Error fetching blogs", error);
    }
  }, []);

  useEffect(() => {
    fetchBlogs();
  }, [fetchBlogs]);

  return (
    <div className="bg-zinc-100 pt-[100px] min-w-screen">
      {blog && (
        <div className="w-full flex flex-col items-center">
          <div className="bg-[#4761ab]/40 w-full py-14 px-[150px]">
            <h1 className="text-3xl font-semibold text-zinc-800">
              {blog.title}
            </h1>
            <p className="text-lg text-zinc-600">{blog.country}</p>
          </div>
          <div className="flex flex-col justify-center items-center sm:px-[150px] py-14">
            {/* {blog.imageUrl && (
              <Image
                src={blog.imageUrl.href}
                alt={blog.title}
                width={500}
                height={200}
                quality={100}
                loading="lazy"
                className="rounded-lg"
              />
            )} */}
            <p className="text-lg flex tracking-wide text-justify text-zinc-700">
              {blog.description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
