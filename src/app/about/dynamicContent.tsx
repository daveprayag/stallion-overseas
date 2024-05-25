"use client";
import { World } from "@/components/ui/globe";
import { motion } from "framer-motion";
import Image from "next/image";
import Balancer from "react-wrap-balancer";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { useEffect } from "react";

const globeConfig = {
  pointSize: 4,
  globeColor: "#062056",
  showAtmosphere: true,
  atmosphereColor: "#FFFFFF",
  atmosphereAltitude: 0.1,
  emissive: "#062056",
  emissiveIntensity: 0.1,
  shininess: 0.9,
  polygonColor: "rgba(255,255,255,0.7)",
  ambientLight: "#38bdf8",
  directionalLeftLight: "#ffffff",
  directionalTopLight: "#ffffff",
  pointLight: "#ffffff",
  arcTime: 1000,
  arcLength: 0.9,
  rings: 1,
  maxRings: 3,
  initialPosition: { lat: 22.3193, lng: 114.1694 },
  autoRotate: true,
  autoRotateSpeed: 0.5,
};

const colors = ["#06b6d4", "#3b82f6", "#0c0c29"];

const sampleArcs = [
  {
    order: 1,
    startLat: -19.885592,
    startLng: -43.951191,
    endLat: -22.9068,
    endLng: -43.1729,
    arcAlt: 0.1,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 1,
    startLat: 28.6139,
    startLng: 77.209,
    endLat: 3.139,
    endLng: 101.6869,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 1,
    startLat: -19.885592,
    startLng: -43.951191,
    endLat: -1.303396,
    endLng: 36.852443,
    arcAlt: 0.5,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 2,
    startLat: 1.3521,
    startLng: 103.8198,
    endLat: 35.6762,
    endLng: 139.6503,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 2,
    startLat: 51.5072,
    startLng: -0.1276,
    endLat: 3.139,
    endLng: 101.6869,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 2,
    startLat: -15.785493,
    startLng: -47.909029,
    endLat: 36.162809,
    endLng: -115.119411,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 3,
    startLat: -33.8688,
    startLng: 151.2093,
    endLat: 22.3193,
    endLng: 114.1694,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 3,
    startLat: 21.3099,
    startLng: -157.8581,
    endLat: 40.7128,
    endLng: -74.006,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 3,
    startLat: -6.2088,
    startLng: 106.8456,
    endLat: 51.5072,
    endLng: -0.1276,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 4,
    startLat: 11.986597,
    startLng: 8.571831,
    endLat: -15.595412,
    endLng: -56.05918,
    arcAlt: 0.5,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 4,
    startLat: -34.6037,
    startLng: -58.3816,
    endLat: 22.3193,
    endLng: 114.1694,
    arcAlt: 0.7,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 4,
    startLat: 51.5072,
    startLng: -0.1276,
    endLat: 48.8566,
    endLng: -2.3522,
    arcAlt: 0.1,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 5,
    startLat: 14.5995,
    startLng: 120.9842,
    endLat: 51.5072,
    endLng: -0.1276,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 5,
    startLat: 1.3521,
    startLng: 103.8198,
    endLat: -33.8688,
    endLng: 151.2093,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 5,
    startLat: 34.0522,
    startLng: -118.2437,
    endLat: 48.8566,
    endLng: -2.3522,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 6,
    startLat: -15.432563,
    startLng: 28.315853,
    endLat: 1.094136,
    endLng: -63.34546,
    arcAlt: 0.7,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 6,
    startLat: 37.5665,
    startLng: 126.978,
    endLat: 35.6762,
    endLng: 139.6503,
    arcAlt: 0.1,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 6,
    startLat: 22.3193,
    startLng: 114.1694,
    endLat: 51.5072,
    endLng: -0.1276,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 7,
    startLat: -19.885592,
    startLng: -43.951191,
    endLat: -15.595412,
    endLng: -56.05918,
    arcAlt: 0.1,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 7,
    startLat: 48.8566,
    startLng: -2.3522,
    endLat: 52.52,
    endLng: 13.405,
    arcAlt: 0.1,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 7,
    startLat: 52.52,
    startLng: 13.405,
    endLat: 34.0522,
    endLng: -118.2437,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 8,
    startLat: -8.833221,
    startLng: 13.264837,
    endLat: -33.936138,
    endLng: 18.436529,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 8,
    startLat: 49.2827,
    startLng: -123.1207,
    endLat: 52.3676,
    endLng: 4.9041,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 8,
    startLat: 1.3521,
    startLng: 103.8198,
    endLat: 40.7128,
    endLng: -74.006,
    arcAlt: 0.5,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 9,
    startLat: 51.5072,
    startLng: -0.1276,
    endLat: 34.0522,
    endLng: -118.2437,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 9,
    startLat: 22.3193,
    startLng: 114.1694,
    endLat: -22.9068,
    endLng: -43.1729,
    arcAlt: 0.7,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 9,
    startLat: 1.3521,
    startLng: 103.8198,
    endLat: -34.6037,
    endLng: -58.3816,
    arcAlt: 0.5,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 10,
    startLat: -22.9068,
    startLng: -43.1729,
    endLat: 28.6139,
    endLng: 77.209,
    arcAlt: 0.7,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 10,
    startLat: 34.0522,
    startLng: -118.2437,
    endLat: 31.2304,
    endLng: 121.4737,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 10,
    startLat: -6.2088,
    startLng: 106.8456,
    endLat: 52.3676,
    endLng: 4.9041,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 11,
    startLat: 41.9028,
    startLng: 12.4964,
    endLat: 34.0522,
    endLng: -118.2437,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 11,
    startLat: -6.2088,
    startLng: 106.8456,
    endLat: 31.2304,
    endLng: 121.4737,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 11,
    startLat: 22.3193,
    startLng: 114.1694,
    endLat: 1.3521,
    endLng: 103.8198,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 12,
    startLat: 34.0522,
    startLng: -118.2437,
    endLat: 37.7749,
    endLng: -122.4194,
    arcAlt: 0.1,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 12,
    startLat: 35.6762,
    startLng: 139.6503,
    endLat: 22.3193,
    endLng: 114.1694,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 12,
    startLat: 22.3193,
    startLng: 114.1694,
    endLat: 34.0522,
    endLng: -118.2437,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 13,
    startLat: 52.52,
    startLng: 13.405,
    endLat: 22.3193,
    endLng: 114.1694,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 13,
    startLat: 11.986597,
    startLng: 8.571831,
    endLat: 35.6762,
    endLng: 139.6503,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 13,
    startLat: -22.9068,
    startLng: -43.1729,
    endLat: -34.6037,
    endLng: -58.3816,
    arcAlt: 0.1,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
  {
    order: 14,
    startLat: -33.936138,
    startLng: 18.436529,
    endLat: 21.395643,
    endLng: 39.883798,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))],
  },
];

export default function About() {
  useEffect(() => {
    const scriptId = "EmbedSocialHashtagScript";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://embedsocial.com/cdn/ht.js";
      document.getElementsByTagName("head")[0].appendChild(script);
    }
  }, []);

  return (
    <>
      <div className="container sm:max-w-8xl space-y-4 pt-[150px]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center space-y-3"
        >
          <h1 className="sm:text-4xl text-3xl font-bold tracking-tight">
            Welcome to Stallion Overseas Consultants
          </h1>
          <p className="text-xl text-zinc-600 tracking-tight">
            <Balancer>
              A premier provider of comprehensive services in the field of
              overseas education and immigration.
            </Balancer>
          </p>
          <div className="w-full flex-grow flex items-center justify-center">
            <div className="w-full h-[350px] sm:h-[700px]">
              <World data={sampleArcs} globeConfig={globeConfig} />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="items-center space-y-4"
        >
          <div className="flex sm:flex-row flex-col gap-6">
            <div className="bg-white border-l-2 border-t-2 rounded-lg p-6 border-black border-b-8 border-r-8 flex flex-col">
              <h2 className="sm:text-4xl text-3xl font-medium tracking-tight mb-4">
                Our Mission
              </h2>
              <p className="text-lg text-zinc-600 font-sans tracking-tight text-justify">
                At Stallion Overseas Consultants, our mission is to empower
                students with the knowledge and resources needed to navigate the
                complexities of studying abroad and achieving their aspirations
                of global education. We strive to offer personalized services
                that align with the unique goals and ambitions of each student.
              </p>
            </div>
            <div className="bg-white border-l-2 border-t-2 rounded-lg p-6 border-black border-b-8 border-r-8 flex flex-col">
              <h2 className="sm:text-4xl text-3xl font-medium tracking-tight mb-4">
                Our Services
              </h2>
              <p className="text-lg text-zinc-600 font-sans tracking-tight text-justify">
                We specialize in offering expert guidance and support for
                students aspiring to study in countries such as Canada, the
                United Kingdom, New Zealand, Australia, various European Union
                nations, and the United States of America. Our services
                encompass every aspect of the student journey, from university
                selection to post-visa services and settlement assistance.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="space-x-4 md:flex md:items-center md:justify-between pt-14"
        >
          <div className="md:w-1/2 sm:pb-0 pb-4">
            <h2 className="text-3xl font-medium tracking-tight text-center md:text-left pb-3">
              Leadership and Expertise
            </h2>
            <p className="text-lg text-zinc-600 text-justify tracking-tight font-sans sm:pr-10 pr-0">
              Under the leadership of Miss Aashvi Thakrar, a distinguished
              member of ICCRC (Immigration Consultants of Canada Regulatory
              Council) and CAPIC (Canadian Association of Professional
              Immigration Consultants), our sister company, Stallion Immigration
              Inc., based in Canada, provides invaluable support to students
              seeking post-study work permits and settlement opportunities. With
              over a decade of experience and over 1000 success stories, we are
              committed to ensuring that our students achieve their academic and
              career goals.
            </p>
          </div>
          <div className="bg-zinc-600/30 rounded-xl p-4 md:w-1/2">
            <Image
              src="https://cloud.appwrite.io/v1/storage/buckets/65d5959e686de65fbff8/files/6633a0f4002ac01daa7c/view?project=65ce4a623b4b3033c9e0&mode=admin"
              alt="Gaurav Thakrar"
              width={500}
              height={100}
              className="rounded-xl w-full h-full object-cover"
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="items-center w-full pt-14"
        >
          <div className="flex sm:flex-row flex-col gap-6">
            <div className="bg-white w-full border-l-2 border-t-2 rounded-lg p-6 border-black border-b-8 border-r-8 flex flex-col">
              <h2 className="sm:text-4xl text-3xl font-medium tracking-tight mb-4 text-center sm:text-left pb-3">
                Why Choose Stallion Overseas Consultants?
              </h2>
              <ul className="list-disc list-inside space-y-2 text-lg text-zinc-600 text-justify tracking-tight font-sans">
                <li>
                  <strong>Integrity and Excellence:</strong> We uphold the
                  highest standards of integrity and professionalism in all our
                  services.
                </li>
                <li>
                  <strong> Personalized Guidance:</strong> Our approach is
                  tailored to the individual needs and aspirations of each
                  student.
                </li>
                <li>
                  <strong> Comprehensive Services:</strong> From university
                  selection to visa processing and settlement support, we offer
                  end-to-end assistance.
                </li>
                <li>
                  <strong> Legal Expertise:</strong> Our team is well-versed in
                  various visa categories and immigration laws, ensuring
                  accurate and reliable guidance.
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="space-x-4 md:flex md:items-center md:justify-between pt-14"
        >
          <div className="md:w-1/2 sm:pb-0 pb-4">
            <h2 className="text-3xl font-medium tracking-tight text-center md:text-left pb-3">
              Our Success Stories
            </h2>
            <p className="text-lg text-gray-600 text-justify tracking-tight font-sans sm:pr-10 pr-0">
              Over the past decade, Stallion Overseas Consultants has
              successfully assisted numerous students in realizing their dreams
              of studying abroad and achieving permanent immigration and
              settlement. Our proficiency extends to navigating complex visa
              cases, ensuring that students receive the best possible support
              and representation.
            </p>
          </div>
          <div className="flex justify-center mx-auto items-center w-full md:w-1/2">
            <div className="flex justify-center items-center text-center rounded-xl p-4 w-full max-w-lg">
              <div
                className="embedsocial-hashtag w-full"
                data-ref="29e49bfcc0393b026bb741e3d86cd4c8f9387276"
              >
                <a
                  className="feed-powered-by-es w-full"
                  href="https://embedsocial.com/blog/embed-google-reviews/"
                  target="_blank"
                  title="Google reviews"
                  rel="noopener noreferrer"
                ></a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
        className="sm:px-8 px-4 sm:py-8 py-4"
      >
        <div className="h-[25rem] w-full rounded-3xl bg-zinc-950 relative flex flex-col items-center justify-center antialiased">
          <div className="max-w-5xl mx-auto p-4 space-y-4 mb-3">
            <h1 className="relative z-10 text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-b from-zinc-200 to-zinc-600 text-center font-sans font-semibold">
              Contact Us
            </h1>
            <p className="text-zinc-500 max-w-2xl mx-auto my-4 text-md relative z-10 text-justify">
              Experience excellence in overseas education and immigration
              services with Stallion Overseas Consultants. Contact us today to
              embark on your journey towards global education and career
              success!
            </p>
          </div>
          <BackgroundBeams />
          <button className="p-[3px] relative">
            <a
              href="https://api.whatsapp.com/send?phone=+919979924241&text=Hello%20Stallion%20Overseas%2C%20I%20have%20a%20query%20regarding%20your%20services."
              target="_blank"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#67bf7f] to-[#4761ab] rounded-lg" />
              <div className="px-5 py-2 items-center flex bg-zinc-950 rounded-lg relative group transition duration-200 text-zinc-400 hover:text-zinc-100 hover:bg-transparent">
                <AiOutlineWhatsApp className="h-[1.2rem] w-[1.2rem] mr-2 font-medium tracking-tight" />
                Talk To Us
              </div>
            </a>
          </button>
        </div>
      </motion.div>
    </>
  );
}
