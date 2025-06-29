"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import NewsletterForm from "./Newsletter-Form";

function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.175 }}
      className="bg-[#4761ab] w-full"
    >
      <div className="w-full max-w-full sm:max-w-[84rem] py-10 px-4 sm:px-6 lg:px-8 lg:pt-20 mx-auto">
        {/* <!-- Grid --> */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="col-span-full lg:col-span-1">
            <Image
              src={"/Stallion-Overseas-Logo-White.png"}
              width={170}
              height={150}
              alt="Stallion Overseas Logo"
            />
          </div>
          {/* <!-- End Col --> */}

          <div className="col-span-1">
            <h3 className="font-semibold text-gray-100 text-lg">
              General enquiries
            </h3>

            <div className="mt-3 grid md:space-y-2 space-y-1 text-zinc-200">
              <a href="mailto:study@stallionoverseas.co">
                study@stallionoverseas.co
              </a>
              <a href="mailto:study@globalvisa.co.in">study@globalvisa.co.in</a>

              <h3 className="font-semibold text-gray-100 text-lg pt-5">
                Call Us
              </h3>
              <div className="mt-3">
                <p>Mr. Gaurav Thakrar</p>
                <a href="tel:+919979924241">+91 99799 24241</a>
              </div>
              <div className="mt-2">
                <p>Mr. Pravin Thakrar</p>
                <a href="tel:+919925384012">+91 99253 84012</a>
              </div>
            </div>
          </div>
          <hr className="sm:hidden flex" />
          {/* <!-- End Col --> */}

          <div className="col-span-1">
            <h3 className="font-semibold text-gray-100 text-lg">
              Office Locations
            </h3>

            <div className="mt-3 grid space-y-3">
              <a
                className="gap-x-2 text-zinc-100"
                target="_blank"
                href="https://www.google.com/maps/place/Stallion+Overseas+Consultants/@22.3177902,73.1656559,17z/data=!3m1!4b1!4m6!3m5!1s0x395fc957d88fa855:0xc4cd7b89dc7f7a44!8m2!3d22.3177902!4d73.1656559!16s%2Fg%2F11rr1__grs?entry=ttu"
              >
                <span className="font-semibold">Vadodara</span>
                <br />
                <p className="tracking-tight font-normal">
                  309-312, Neptune Edge, Neptune Campus, Dr. Sarabhai Road,
                  Vadodara, 390007, (Guj.) - India
                </p>
              </a>
              <a
                className="gap-x-2 text-zinc-100 cursor-pointer"
                href="https://www.google.com/maps/place/Global+Visa/@22.5516601,72.938822,17z/data=!4m6!3m5!1s0x395e4e78ebeaaaab:0x197d2a67ed250d3a!8m2!3d22.5516559!4d72.9388074!16s%2Fg%2F11jbb5ckjp?entry=ttu"
                target="_blank"
              >
                <span className="font-semibold">Anand</span>
                <br />
                <p className="tracking-tight">
                  202, Maruti Sharnam, Opp. Nand Bhoomi Party Plot, Anand
                  Vidhyanagar Road, Anand, 388001, (Guj.) - India
                </p>
              </a>
            </div>
          </div>
          <hr className="sm:hidden flex" />
          {/* <!-- End Col --> */}

          <div className="col-span-1">
            <h4 className="font-semibold text-zinc-100 text-lg">
              Subscribe to our Newsletter
            </h4>

            {/* <form>
              <div className="mt-3 flex flex-col items-center gap-2 sm:flex-row sm:gap-3 bg-zinc-100 rounded-lg p-2">
                <div className="w-full">
                  <label htmlFor="hero-input" className="sr-only">
                    Search
                  </label>
                  <input
                    type="text"
                    id="hero-input"
                    name="hero-input"
                    className="py-3 px-4 block w-full rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none bg-zinc-100"
                    placeholder="Enter your email"
                  />
                </div>
                <a
                  className="w-full sm:w-auto whitespace-nowrap p-3 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-[#4761ab] text-zinc-100 hover:bg-[#3e5bab] disabled:opacity-50 disabled:pointer-events-none"
                  href="#"
                >
                  Subscribe
                </a>
              </div>
              <p className="text-xs text-zinc-100 mt-2">
                Only blog updates, no fuss.
              </p>
            </form> */}
            <NewsletterForm />
          </div>
          {/* <!-- End Col --> */}
        </div>
        {/* <!-- End Grid --> */}

        <div className="mt-5 sm:mt-12 grid gap-y-2 sm:gap-y-0 sm:flex sm:justify-between text-center sm:items-center">
          <div className="text-center">
            <p className="text-zinc-300 text-sm">
              Made by{" "}
              <a
                href="https://www.prayagdave.com"
                target="_blank"
                className="italic hover:text-zinc-100 transition"
              >
                Prayag Dave
              </a>
            </p>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-sm text-zinc-300">
              © 2024 Stallion Overseas. All rights reserved.
            </p>
          </div>
          {/* <!-- End Col --> */}

          {/* <!-- Social Brands --> */}
          <div>
            <a
              className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-white/10 disabled:opacity-50 focus:outline-none focus:ring-1 focus:ring-gray-600"
              href="https://www.facebook.com/stallionoverseas"
              target="_blank"
            >
              <svg
                className="flex-shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
              </svg>
            </a>
            <a
              className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-white/10 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600"
              href="https://g.page/r/CUR6f9yJe83EEAI/review"
              target="_blank"
            >
              <svg
                className="flex-shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
              </svg>
            </a>
            <a
              className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-white/10 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600"
              href="#"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-twitter-x"
                viewBox="0 0 16 16"
              >
                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
              </svg>
            </a>
            <a
              className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-white/10 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600"
              href="https://www.instagram.com/stallionoverseasconsultants"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-instagram"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s.444-.01.297-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
              </svg>
            </a>
            <a
              className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-white/10 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600"
              href="https://www.youtube.com/@StallionOverseasConsultants"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-youtube"
                viewBox="0 0 16 16"
              >
                <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />
              </svg>
            </a>
          </div>
          {/* <!-- End Social Brands --> */}
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;
