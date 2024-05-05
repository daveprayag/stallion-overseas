"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import AnnouncementService from "@/services/announcement.service";
import { cn } from "@/utils/cn";

interface Announcement {
  id: string;
  announcement: string;
}

export const InfiniteMovingAnnouncements = ({
  speed = "normal",
  pauseOnHover = true,
  className,
}: {
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);

  const [announcements, setAnnouncements] = useState<Announcement[]>([]);

  const fetchAnnouncements = useCallback(async () => {
    try {
      const announcementService = AnnouncementService.getInstance();
      const fetchedAnnouncements = await announcementService.getAnnouncements();
      setAnnouncements(fetchedAnnouncements);
    } catch (error) {
      console.error("Error fetching announcements:", error);
    }
  }, []);

  useEffect(() => {
    fetchAnnouncements();
  }, [fetchAnnouncements]);

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

      getSpeed();
      setStart(true);
    }
  }

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
        "scroller relative z-10 max-w-screen overflow-hidden px-20 py-8 flex justify-center items-center",
        className
      )}
      style={{ background: "#4761ab" }}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
        style={{
          padding: "0",
          margin: "0",
          listStyle: "none",
          textAlign: "center",
        }} // Center align text
      >
        {announcements.map((announcement, index) => (
          <li
            key={announcement.id}
            className="relative"
            style={{ display: "inline-flex", alignItems: "center" }} // Center align vertically
          >
            <p className="font-medium text-zinc-100 text-xl px-4">
              {announcement.announcement}
            </p>
            {index !== announcements.length - 1 && (
              <span className="text-zinc-100 text-xl mx-2">•</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
