import Layout from "@/layout";
import AboutIMG from "@/assets/About.svg";
import { useEffect, useRef, useState } from "react";
import { cubicBezier, motion, useScroll } from "framer-motion";
import Paragraph from "@/components/Aboutpage/AboutParagraph";

const textAbout =
  "norea est un écosystème spécialisé dans les métiers de l’immobilier responsable.Du conseil aux travaux, son panel d’expertises développé et enrichi depuis plus de 25 ans en fait aujourd’hui un acteur significatif dans son lieu d’ancrage, Paris et l’Île-de-France. Forte du talent de ses équipes et enthousiaste face à ses nouvelles perspectives de développement en 2024 et 2025, norea cultive un équilibre stratégique entre audace, pragmatisme et durabilité.";

export default function About() {
  const parentElement = useRef(null);
  const { scrollYProgress } = useScroll({
    target: parentElement,
    offset: ["0.2 0.9", "start 0.1"],
  });

  return (
    <Layout>
      <div className="w-full flex flex-col">
        {/* hero */}
        <motion.div className="h-screen w-full flex relative flex-row">
          <motion.img
            src={AboutIMG}
            initial={{
              opacity: 0,
              clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
            }}
            animate={{
              opacity: 1,
              clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
            }}
            transition={{
              duration: 1,
              delay: 0.3,
              ease: cubicBezier(0.83, 0, 0.17, 1),
            }}
            alt="About us image"
            className="h-full w-full object-cover object-top"
          ></motion.img>
          <div className="absolute w-full h-full flex flex-col items-center justify-center gap-2">
            <div className="overflow-hidden">
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ delay: 1.3, ease: "easeOut" }}
                className="font-overusedMedium uppercase text-foreground/70"
              >
                unveiling creativity
              </motion.div>
            </div>
            <div className="overflow-hidden flex justify-center">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.5, ease: "easeOut" }}
                className="w-5/6 text-5xl uppercase font-overusedBold text-foreground drop-shadow-xl text-center text-wrap"
              >
                Architecture is the art of creating dreams in stone
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* insights & values */}
        <section
          ref={parentElement}
          className="sticky-0 h-screen flex items-center w-full bg-foreground overflow-hidden"
        >
          <div>
            <Paragraph value={textAbout} scrollYProgress={scrollYProgress} />
          </div>
        </section>

        {/* pre-team section */}
        <div className="h-screen"></div>
      </div>
    </Layout>
  );
}
