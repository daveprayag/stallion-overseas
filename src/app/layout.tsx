import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Provider } from "react-wrap-balancer";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stallion Overseas",
  description: "Begin your abroad education journey with Stallion Overseas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <link rel="icon" />
      </head>
      <body className={`${inter.className} bg-zinc-100`}>
        <Provider>
          <Navbar />
          {children}
          <Toaster position="top-right" />
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
