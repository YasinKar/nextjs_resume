import BlurryDots from "@/components/BlurryDots";
import About from "@/components/About";
import ScrollShadow from "@/components/ScrollShadow";

export default function Home() {
  return (
    <main className="relative w-screen h-screen overflow-hidden bg-fixed">
      <BlurryDots />
      <ScrollShadow>
        <About />
      </ScrollShadow>
    </main >
  );
}