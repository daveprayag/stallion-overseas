"use client";
import Image from "next/image";
import Masonry from "@mui/lab/Masonry";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { about } from "@/lib/data";

export default function About() {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesLG = useMediaQuery(theme.breakpoints.down("lg"));
  const columns = matchesSM ? 1 : matchesMD ? 2 : matchesLG ? 3 : 4;

  return (
    <>
      <div className="pt-[100px] w-full items-center text-center justify-center flex flex-col px-4 space-y-4 mb-20">
        <div className=" w-full rounded-lg md:max-w-xl max-w-sm sm:max-w-5xl sm:text-3xl text-2xl font-medium tracking-tight p-4">
          About us
        </div>
        <div className="text-justify font-normal tracking-tight max-w-6xl text-lg">
          Established in 1998, Stallion Overseas Consultants has been a leading
          provider of premium services in the field of overseas education and
          immigration. Our expertise lies in guiding students towards
          educational pursuits and post-study settlement in countries such as
          Canada, the United Kingdom, New Zealand, Australia, European Union
          nations, and the United States of America. With a commitment to
          integrity and excellence, we adopt an honest and supportive approach
          that extends from university selection to post-visa services.
          <span>
            <Masonry columns={columns} spacing={1.5} className="my-10">
              {about.map((item) => (
                <Image
                  key={item.id}
                  className="h-auto max-w-full rounded-xl"
                  width={400}
                  height={400}
                  loading="lazy"
                  quality={100}
                  src={item.url}
                  alt={item.alt}
                />
              ))}
            </Masonry>
          </span>
          As representatives of esteemed global institutions, we offer
          exceptional opportunities for higher education abroad. Under the
          leadership of Miss. Aashvi Thakrar, a member of ICCRC and CAPIC,
          Stallion Immigration Inc., our sister company based in Canada,
          provides invaluable assistance to students in securing post-study work
          permits and facilitating settlement, backed by a decade of experience
          and over 1000 success stories.
          <br />
          <br /> Stallion Overseas Consultants takes great pride in delivering
          expert advice on post-study work permits, permanent immigration, and
          settlement services. Over the past decade, we have successfully
          assisted numerous students in their journey towards direct permanent
          immigration and post-study settlement in their respective countries of
          study. Our proficiency extends to various visa categories, offering
          legal guidance even in complex cases. Experience excellence in
          overseas education and immigration services with Stallion Overseas
          Consultants.
        </div>
      </div>
    </>
  );
}
