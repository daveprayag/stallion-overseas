"use client";
import InstitutionService from "@/services/institution.service";
import React, { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";

export default function Page() {
  const [institutions, setInstitutions] = useState<any[]>([]);
  const [filteredInstitutions, setFilteredInstitutions] = useState<any[]>([]);
  const [filterType, setFilterType] = useState<string | null>(null);
  const [filterProvince, setFilterProvince] = useState<string | null>(null);
  const [provinces, setProvinces] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isProvinceOpen, setIsProvinceOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const fetchInstitutions = useCallback(async (countryName: string) => {
    try {
      const response = await InstitutionService.getInstance().getInstitutions(
        countryName
      );
      setInstitutions(response);
      setFilteredInstitutions(response);
      const uniqueProvinces = Array.from(
        new Set(response.map((inst: any) => inst.province))
      );
      setProvinces(uniqueProvinces);
      console.log("fetchInstitutions", response);
    } catch (error) {
      console.log("Error fetching institutions", error);
    }
  }, []);

  useEffect(() => {
    fetchInstitutions("France");
  }, [fetchInstitutions]);

  useEffect(() => {
    if (filteredInstitutions.length > 0) {
      setIsLoading(false);
    }
  }, [filteredInstitutions]);

  const handleFilterTypeChange = (type: string | null) => {
    setFilterType(type);
    applyFilters(type, filterProvince);
  };

  const handleFilterProvinceChange = (province: string | null) => {
    setFilterProvince(province);
    applyFilters(filterType, province);
  };

  const applyFilters = (type: string | null, province: string | null) => {
    let filtered = [...institutions];

    if (type) {
      filtered = filtered.filter((inst) => inst.type === type);
    }

    if (province) {
      filtered = filtered.filter((inst) => inst.province === province);
    }

    setFilteredInstitutions(filtered);
  };

  const clearFilters = () => {
    setFilterType(null);
    setFilterProvince(null);
    setFilteredInstitutions(institutions);
  };

  return (
    <div className="text-center flex flex-col items-center w-full min-h-screen pt-[100px] space-y-10 pb-[100px]">
      {/* Info section */}
      <div>
        <h1 className=" text-zinc-800 font-semibold sm:text-4xl text-2xl pt-6 pb-10 flex items-center justify-center gap-4">
          Study in France{" "}
          <Image
            src="/media/france.png"
            width={50}
            height={50}
            alt="australia-logo"
            className="sm:w-[50px] w-[40px]"
          />
        </h1>
        <p className="text-justify xl:px-80 px-10 text-lg tracking-tight text-zinc-600 ">
          France is synonymous with art, culture, and academic excellence,
          making it a top destination for international students. With its
          world-renowned universities, vibrant cities, and rich history, France
          offers students a truly immersive and inspiring educational
          experience. From studying at prestigious institutions like the
          Sorbonne to exploring charming towns and picturesque countryside,
          students can enjoy a unique blend of academic rigor and cultural
          exploration. With its diverse cuisine, thriving arts scene, and
          unparalleled architectural beauty, France provides an ideal backdrop
          for academic and personal growth.
        </p>
      </div>

      {/* Filter section */}
      <div className="flex sm:flex-row flex-col justify-between items-center h-[200px] sm:h-auto bg-[#4761ab]/55 w-[350px] sm:w-[500px] py-5 sm:py-10 rounded-lg px-4">
        <div className="w-44 relative transition-all duration-500 z-20">
          <button
            className="shadow-md px-4 py-2 w-full relative flex flex-row items-center justify-between bg-white rounded-md"
            id="btnContainer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="text-gray-700">
              {filterType || "Institution type"}
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
                id="divContainer"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <div
                  className="flex flex-row justify-between items-center px-4 py-2 border-b border-gray-100 hover:cursor-pointer hover:bg-zinc-100 transition duration-200"
                  onClick={() => {
                    handleFilterTypeChange("University");
                    setIsOpen(false);
                  }}
                >
                  <span className="text-zinc-600 text-sm">University</span>
                </div>

                <div
                  className="flex flex-row justify-between items-center px-4 py-2 hover:cursor-pointer hover:bg-gray-100 transition duration-200"
                  onClick={() => {
                    handleFilterTypeChange("College");
                    setIsOpen(false);
                  }}
                >
                  <span className="text-zinc-600 text-sm">College</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="w-44 relative transition-all duration-500 z-10">
          <button
            className="shadow-md px-4 py-2 w-full relative flex flex-row items-center justify-between bg-white rounded-md"
            id="btnContainer"
            onClick={() => setIsProvinceOpen(!isProvinceOpen)}
          >
            <span className="text-gray-700">
              {filterProvince || "Province"}
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
            {isProvinceOpen && (
              <motion.div
                className="absolute w-full shadow-md mt-1 bg-white rounded-md flex flex-col"
                id="divContainer"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                {provinces.map((province) => (
                  <div
                    key={province}
                    className="flex flex-row justify-between items-center px-4 py-2 border-b border-zinc-100 hover:cursor-pointer hover:bg-zinc-100 transition duration-200"
                    onClick={() => {
                      handleFilterProvinceChange(province);
                      setIsProvinceOpen(false);
                    }}
                  >
                    <span className="text-zinc-600 text-sm">{province}</span>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <button
          className="bg-red-500 hover:bg-red-600 text-zinc-100 font-normal py-1 px-3 rounded-lg focus:outline-none focus:shadow-outline"
          onClick={clearFilters}
        >
          Reset
        </button>
      </div>

      {/* Institutions section */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "tween", duration: 0.7 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-12 mx-auto container px-4 sm:px-6 lg:px-8 justify-items-center"
      >
        {isLoading ? (
          <Skeleton count={5} height={200} />
        ) : (
          filteredInstitutions.map((institution: any) => (
            <motion.div
              key={institution.id}
              onClick={() => window.open(institution.website, "_blank")}
              className="hover:cursor-pointer bg-white w-[240px] backdrop-blur-lg flex flex-col justify-between items-center rounded-2xl hover:shadow-lg z-0 hover:shadow-[#4761ab]/30 transition"
              // whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={institution.imageUrl.href}
                alt="institution image"
                width={100}
                height={100}
                objectFit="contain"
                loading="lazy"
                sizes="100vw"
                className="rounded-lg mt-4 w-auto px-2.5 h-[100px] object-contain"
              />
              <div className="p-3 w-full">
                <h2 className="text-xl font-semibold pb-2">
                  {institution.name}
                </h2>
                <div className="!text-left px-2 space-y-1">
                  <p className="text-sm text-zinc-700">
                    {institution.province}
                  </p>
                  <p className="text-sm text-zinc-700">
                    {institution.campuses.join(", ")}
                  </p>
                </div>
              </div>
            </motion.div>
          ))
        )}
      </motion.div>
    </div>
  );
}
