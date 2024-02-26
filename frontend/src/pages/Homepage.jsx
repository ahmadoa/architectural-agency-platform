import Layout from "@/layout";
import HeroIMG from "@/assets/HeroImg.svg";
import { motion, useScroll, useTransform, cubicBezier } from "framer-motion";
import { useRef, useLayoutEffect } from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import AboutSection from "@/components/Homepage/AboutSection";
import Extended from "@/components/Homepage/ExtendedAbout";
import Offering from "@/components/Homepage/Offering";
import LatestProjects from "@/components/Homepage/LatestProjects";

function App() {
  let Heroref = useRef(null);
  let { scrollYProgress } = useScroll({
    target: Heroref,
    offset: ["start end", "end start"],
  });

  let y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <Layout>
      {/* Hero Section */}
      <section
        id="Hero"
        className="w-full h-120 flex flex-col justify-end py-5 px-10"
      >
        <div className="overflow-hidden w-full">
          <motion.div
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className=" flex flex-row items-center justify-between text-4xl sm:text-7xl md:text-8xl lg:text-10xl"
          >
            <div className="font-overusedBold">NEBULA</div>
            <div className="self-end font-overusedMedium text-muted-foreground">
              STUDIO
            </div>
            <div className="self-center w-8 h-8 bg-muted-foreground rounded-full" />
          </motion.div>
        </div>

        <div className="self-end overflow-hidden">
          <motion.div
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            transition={{ delay: 1, ease: "easeOut" }}
          >
            <div className="self-end font-overusedLight">TANGIER, MOROCCO</div>
          </motion.div>
        </div>
      </section>
      <div ref={Heroref} className="h-screen relative overflow-hidden">
        <motion.img
          initial={{
            opacity: 0,
            clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
          }}
          animate={{
            opacity: 1,
            clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
          }}
          transition={{
            duration: 0.9,
            delay: 1.3,
            ease: cubicBezier(0.83, 0, 0.17, 1),
          }}
          style={{ y }}
          src={HeroIMG}
          className="h-full w-full scale-110 object-cover object-center"
        ></motion.img>
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/20" />
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
      {/* Projects section */}
      <LatestProjects />
      {/* About section continuation */}
      <Extended />
      <Offering />
    </Layout>
  );
}

export default App;
