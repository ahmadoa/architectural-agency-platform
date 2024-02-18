import AboutImgSection from "@/assets/aboutSectionHomePG.jpg";
import { motion, useScroll, useTransform, cubicBezier } from "framer-motion";
import { useRef } from "react";
import Paragraph from "@/components/Homepage/AboutParagraph";

const aboutPvalue =
  "a culmination of decades of experience by our world-class team, we envision shaping spaces that inspire & empower, fostering connections between people & their environment. Through thoughtful design & collaboration.";

export default function AboutSection() {
  let ref = useRef(null);
  let { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  let Harmonyx = useTransform(scrollYProgress, [0.1, 0.75], ["160%", "70%"], {
    ease: cubicBezier(0.33, 1, 0.68, 1),
  });
  let Inx = useTransform(scrollYProgress, [0.2, 0.75], ["-100%", "-20%"], {
    ease: cubicBezier(0.33, 1, 0.68, 1),
  });
  let Designx = useTransform(scrollYProgress, [0.3, 0.75], ["100%", "40%"], {
    ease: cubicBezier(0.33, 1, 0.68, 1),
  });

  return (
    <div ref={ref} className="flex flex-col gap-5 px-10">
      <div className="flex flex-col gap-3 py-20 items-center text-8xl font-overusedBold uppercase">
        <motion.div
          style={{ x: Harmonyx }}
          className="font-overusedsemiboldItalic text-6xl"
        >
          Harmony
        </motion.div>
        <motion.div
          style={{ x: Inx }}
          className="flex flex-row items-center gap-5"
        >
          <span>in</span>
          <div className="w-52 h-20 overflow-hidden">
            <img
              src={AboutImgSection}
              className="w-full h-full object-cover object-center"
            ></img>
          </div>
        </motion.div>
        <motion.div style={{ x: Designx }}>Design</motion.div>
      </div>
      <div className="w-full relative">
        <span className="absolute left-1 top-12 text-sm uppercase text-purple-950 font-overusedMedium">
          nebula studio
        </span>
        <Paragraph value={aboutPvalue} />
      </div>
    </div>
  );
}
