import Harmony from "@/assets/harmony.webp";
import { motion, useScroll, useTransform, cubicBezier } from "framer-motion";
import { useRef } from "react";
import Paragraph from "@/components/Homepage/AboutParagraph";

const aboutPvalue =
  "a culmination of a decade of experience by our world-class team, we envision shaping spaces that inspire & empower, fostering connections between people & their environment. Through thoughtful design & collaboration.";

export default function AboutSection() {
  let ref = useRef(null);
  let { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  let Harmonyx = useTransform(scrollYProgress, [0.1, 0.5], ["160%", "70%"], {
    ease: cubicBezier(0.33, 1, 0.68, 1),
  });
  let Inx = useTransform(scrollYProgress, [0.2, 0.5], ["-100%", "-20%"], {
    ease: cubicBezier(0.33, 1, 0.68, 1),
  });
  let Designx = useTransform(scrollYProgress, [0.3, 0.5], ["130%", "40%"], {
    ease: cubicBezier(0.33, 1, 0.68, 1),
  });
  let opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={ref} className="flex flex-col gap-5 px-10">
      <div className="flex flex-col gap-3 py-20 items-center text-8xl font-bold uppercase">
        <motion.div
          style={{ x: Harmonyx, opacity }}
          className="font-semibold text-6xl"
        >
          Harmony
        </motion.div>
        <motion.div
          style={{ x: Inx, opacity }}
          className="flex flex-row items-center gap-5"
        >
          <span>in</span>
          <div className="w-52 h-20 overflow-hidden">
            <img
              src={Harmony}
              className="w-full h-full object-cover object-center"
            ></img>
          </div>
        </motion.div>
        <motion.div style={{ x: Designx, opacity }}>Design</motion.div>
      </div>
      <div className="w-full relative">
        <span className="absolute left-1 top-3 text-sm uppercase text-purple-950 font-medium">
          nebula studio
        </span>
        <Paragraph value={aboutPvalue} />
      </div>
    </section>
  );
}
