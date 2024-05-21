"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

// Set the worker source
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function PrivacyPolicy() {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageWidth, setPageWidth] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      setPageWidth(window.innerWidth * 0.9);
    };

    // Set the initial pageWidth when the component mounts
    if (typeof window !== "undefined") {
      setPageWidth(window.innerWidth * 0.9);
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  const MyDocument = () => (
    <div className="flex flex-col items-center">
      <Document
        file="/terms-and-conditions.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
        className="w-full"
      >
        {Array.from(new Array(numPages), (el, index) => (
          <Page
            key={`page_${index + 1}`}
            pageNumber={index + 1}
            width={pageWidth}
          />
        ))}
      </Document>
      <p className="mt-4">
        Page {numPages} of {numPages}
      </p>
    </div>
  );

  return (
    <section className="bg-white">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", duration: 1, delay: 0.4 }}
        className="w-full min-h-screen text-center"
      >
        {/* <h1 className="text-4xl font-medium mb-5">Privacy Policy</h1> */}
        <MyDocument />
      </motion.div>
    </section>
  );
}
