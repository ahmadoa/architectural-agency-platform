import Layout from "@/layout";
import HeroIMG from "@/assets/HeroImg.webp";
import { motion, useScroll, useTransform, cubicBezier } from "framer-motion";
import { useRef } from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import AboutSection from "@/components/Homepage/AboutSection";
import Extended from "@/components/Homepage/ExtendedAbout";
import Offering from "@/components/Homepage/Offering";
import LatestProjects from "@/components/Homepage/LatestProjects";
import Curve from "@/components/Curve/index";

function App() {
  let Heroref = useRef(null);
  let { scrollYProgress } = useScroll({
    target: Heroref,
    offset: ["start end", "end start"],
  });

  let y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <Curve>
      <Layout>
        {/* Hero Section */}
        <section
          id="Hero"
          className="w-full h-120 flex flex-col justify-end py-5 px-10"
        >
          <div className="overflow-hidden w-full">
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
              className=" flex flex-row items-center justify-between text-4xl sm:text-7xl md:text-8xl lg:text-10xl"
            >
              <div className="font-bold">NEBULA</div>
              <div className="self-end font-medium text-muted-foreground">
                STUDIO
              </div>
              <div className="self-center w-8 h-8 bg-muted-foreground rounded-full" />
            </motion.div>
          </div>

          <div className="self-end overflow-hidden">
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ delay: 1, ease: "easeOut" }}
            >
              <div className="self-end font-light">TANGIER, MOROCCO</div>
            </motion.div>
          </div>
        </section>
        <div ref={Heroref} className="h-screen relative overflow-hidden">
          <motion.img
            style={{ y }}
            src={HeroIMG}
            className="h-full w-full scale-110 object-cover object-center will-change-auto"
          ></motion.img>
          <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/20" />
          <div className="absolute w-1/6 flex flex-col gap-3 left-10 bottom-10 text-secondary">
            <FaQuoteLeft className="text-xl" />
            <p className="text-sm font-light">
              Guided by heritage, inspired by innovation, Nebula Studio crafts a
              tomorrow where every design tells a story of elegance — and
              purpose.
            </p>
            <FaQuoteRight className="self-end text-xl" />
          </div>
          <motion.div
            initial={{
              clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            }}
            animate={{
              clipPath: "polygon(0% 0%, 0% 0, 0% 100%, 0% 100%)",
            }}
            transition={{
              duration: 0.9,
              delay: 1.3,
              ease: cubicBezier(0.83, 0, 0.17, 1),
            }}
            className="absolute inset-0 bg-background"
          ></motion.div>
        </div>
        {/* About Section */}
        <AboutSection />
        {/* Projects section */}
        <LatestProjects />
        {/* About section continuation */}
        <Extended />
        <Offering />
      </Layout>
    </Curve>
  );
}

export default App;
