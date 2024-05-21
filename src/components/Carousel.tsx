"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const images = ["contact.jpg", "contact1.jpeg", "contact2.jpeg"];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prevCurrent) => (prevCurrent + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div>
      <AnimatePresence mode="wait">
        <motion.img
          key={current}
          src={images[current]}
          alt="Carousel Image"
          className="object-cover object-center h-[840px] w-full rounded-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        />
      </AnimatePresence>
    </div>
  );
};

export default Carousel;
