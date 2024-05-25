// src/app/about/page.tsx

import dynamic from "next/dynamic";

// Dynamically import the About page component with no SSR
const DynamicAboutPageWithNoSSR = dynamic(() => import("./dynamicContent"), {
  ssr: false,
});

const AboutPage = () => {
  return <DynamicAboutPageWithNoSSR />;
};

export default AboutPage;
