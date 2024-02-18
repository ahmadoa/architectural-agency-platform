import Layout from "@/layout";
import HeroIMG from "@/assets/HeroImg.jpg";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import AboutSection from "@/components/Homepage/AboutSection";

function App() {
  let Heroref = useRef(null);
  let { scrollYProgress } = useScroll({
    target: Heroref,
    offset: ["start end", "end start"],
  });

  let y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);


  return (
    <Layout>
      {/* Hero Section */}
      <section
        id="Hero"
        className="w-full h-120 flex flex-col justify-end py-5 px-10"
      >
        <div className="w-full flex flex-row items-center justify-between text-4xl sm:text-7xl md:text-8xl lg:text-10xl">
          <div className="font-overusedBold">NEBULA</div>
          <div className="self-end font-overusedMedium text-muted-foreground">
            STUDIO
          </div>
          <div className="self-center w-8 h-8 bg-muted-foreground rounded-full" />
        </div>
        <div className="self-end font-overusedLight">TANGIER, MOROCCO</div>
      </section>
      <div
        ref={Heroref}
        className="h-screen relative overflow-hidden shadow-innerLG"
      >
        <motion.img
          style={{ y }}
          src={HeroIMG}
          className="h-full w-full scale-110 object-cover object-center"
        ></motion.img>
        <div className="absolute w-1/6 flex flex-col gap-3 left-10 bottom-10 text-secondary">
          <FaQuoteLeft className="text-xl" />
          <p className="text-sm font-overusedItalic">
            Guided by heritage, inspired by innovation, Nebula Studio crafts a
            tomorrow where every design tells a story of elegance — and purpose.
          </p>
          <FaQuoteRight className="self-end text-xl" />
        </div>
      </div>
      {/* About Section */}
      <AboutSection />
      <div className="h-screen"></div>
    </Layout>
  );
}

export default App;
