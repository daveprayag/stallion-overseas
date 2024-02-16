import Image from "next/image";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";
<link rel="icon" href="/favicon.ico" sizes="any" />;

export default function Home() {
  const words = `We are under going through a revamp. Check back soon!
`;
  return (
    <main className="flex flex-col min-h-screen text-center items-center justify-center p-24">
      <div>
        <TextGenerateEffect words={words} />
      </div>
      <Image
        src="/Stallion-Overseas-Logo-Black.png"
        alt="Vercel Logo"
        width={200}
        height={150}
        quality={100}
      />
    </main>
  );
}
