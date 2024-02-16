"use client";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const countDownDate = new Date("March 31, 2024 00:00:00").getTime();

    const x = setInterval(function () {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      const daysElement = document.getElementById("days");
      const hoursElement = document.getElementById("hours");
      const minutesElement = document.getElementById("minutes");
      const secondsElement = document.getElementById("seconds");

      if (daysElement && hoursElement && minutesElement && secondsElement) {
        daysElement.textContent = days + "d";
        hoursElement.textContent = hours + "h";
        minutesElement.textContent = minutes + "m";
        secondsElement.textContent = seconds + "s";
      }

      if (distance < 0) {
        clearInterval(x);
        if (daysElement) daysElement.innerHTML = "EXPIRED";
      }
    }, 1000);

    return () => clearInterval(x);
  }, []);

  return (
    <div className="min-h-screen flex justify-center items-center relative">
      <div className="bg-[#67bf7f] absolute top-[6rem] -z-10 right-[1%] h-[50%] w-[70%] sm:w-[80%] blur-[10rem] rounded-full"></div>
      <div className="bg-[#4761ab] absolute top-[6rem] -z-10 left-[0.5%] h-[50%] w-[70%] sm:w-[80%] blur-[10rem] rounded-full"></div>
      <div className="bg-[#4761ab] absolute top-[10%] "></div>
      <div className="max-w-lg sm:w-full bg-gray-50/10 border border-gray-400 shadow-lg rounded-lg overflow-hidden">
        <div className="py-6 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <Image
            src="/Stallion-Overseas-Logo-Black.png"
            alt="Stallion Overseas"
            width={200}
            height={100}
            quality={100}
          />
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 text-center">
            Coming Soon
          </h2>
          <p className="mt-2 text-lg sm:text-xl text-gray-800 text-center">
            The website is under a revamp. Stay tuned!
          </p>
        </div>
        <div className="py-4 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 pb-10 justify-center items-center">
            <div className="border border-gray-400 rounded-lg px-4 py-2">
              <div
                id="days"
                className="font-bold font-mono sm:text-2xl text-gray-800"
              ></div>
            </div>
            <div className="border border-gray-400 rounded-lg px-4 py-2">
              <div
                id="hours"
                className="font-bold font-mono sm:text-2xl text-gray-800"
              ></div>
            </div>
            <div className="border border-gray-400 rounded-lg px-4 py-2">
              <div
                id="minutes"
                className="font-bold font-mono sm:text-2xl text-gray-800"
              ></div>
            </div>
            <div className="border border-gray-400 rounded-lg px-4 py-2">
              <div
                id="seconds"
                className="font-bold font-mono sm:text-2xl text-gray-800"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
