"use client";

import TestimonialService from "@/services/testimonial.service";
import { cn } from "@/utils/cn";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const testimonialService = TestimonialService.getInstance();
  const [testimonials, setTestimonials] = useState<any[]>([]);

  const fetchTestimonials = useCallback(async () => {
    try {
      const response = await testimonialService.getTestimonials();
      setTestimonials(response);
      console.log("Testimonials", response);
    } catch (error) {
      console.log("Error fetching blogs", error);
    }
  }, []);

  useEffect(() => {
    fetchTestimonials();
  }, [fetchTestimonials]);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller sm:mx-20 mx-0 pb-10 relative z-10 max-w-screen overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-5 py-4 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {testimonials.map((testimonial, idx) => (
          <div key={idx}>
            {testimonial.youtubeLink ? (
              <iframe
                className="rounded-3xl border border-zinc-600 hover:shadow-lg transition hover:shadow-[#4761ab] w-full h-full lg:h-[280px] md:h-[300px] xl:w-[550px] xl:h-[300px]"
                src={testimonial.youtubeLink}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen={true}
              ></iframe>
            ) : (
              <li
                className="sm:w-[350px] w-[250px] max-w-full h-[380px] sm:h-[300px] hover:shadow-lg transition hover:shadow-[#67bf7f] relative rounded-2xl border border-b-0 flex-shrink-0 border-zinc-700 px-8 py-6 md:w-[450px]"
                style={{
                  background:
                    "linear-gradient(180deg, var(--zinc-800), var(--zinc-900)",
                }}
              >
                <blockquote className="flex flex-col h-full justify-between">
                  <div
                    aria-hidden="true"
                    className="user-select-none rounded-2xl -z-1 absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
                  ></div>
                  <span className="relative z-20 text-sm leading-[1.6] text-zinc-100 font-normal">
                    {testimonial.content}
                  </span>
                  <div className="relative z-20 mt-6 flex flex-row h-full items-end">
                    <Image
                      src={testimonial.imageUrl.href}
                      width={40}
                      height={40}
                      alt={testimonial.name}
                      className="w-10 h-10 rounded-full mr-2 justify-center items-center object-center"
                    />
                    <span className="flex flex-col gap-1">
                      <span className="text-sm text-gray-400 font-normal">
                        {testimonial.name}
                      </span>
                      <span className="text-sm text-gray-400 font-normal">
                        {testimonial.university} · {testimonial.country}
                      </span>
                    </span>
                  </div>
                </blockquote>
              </li>
            )}
          </div>
        ))}
      </ul>
    </div>
  );
};
