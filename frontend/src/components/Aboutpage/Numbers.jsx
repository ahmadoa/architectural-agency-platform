import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

export default function Numbers({ theme, setTheme }) {
  const parentRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: parentRef,
    offset: ["start end", "end start"],
  });

  const title_y = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);
  const row_1_y = useTransform(scrollYProgress, [0, 1], ["-5%", "7%"]);
  const row_2_y = useTransform(scrollYProgress, [0, 1], ["5%", "-10%"]);

  return (
    <section
      ref={parentRef}
      className="w-full bg-foreground px-10 py-24 flex flex-row"
    >
      <motion.div
        style={{ y: title_y }}
        initial={{ opacity: 0, y: "100%" }}
        whileInView={{ opacity: 1, y: 0 }}
        className="w-1/3 text-teal-500 text-2xl font-overusedBold"
      >
        In Numbers
      </motion.div>
      <div className="w-2/3  flex flex-row gap-7">
        {/* row 1 */}
        <motion.div
          style={{ y: row_1_y }}
          className="w-1/2 flex flex-col gap-7"
        >
          <div className="w-full bg-gradient-to-r from-[rgb(69,170,137)] to-[rgb(36,104,92)] text-primary-foreground rounded-2xl flex flex-col gap-4 p-14 font-overusedBold">
            <span className="text-5xl font-overusedBold">60</span>
            <span className="text-3xl">collaborators & associates</span>
          </div>
          <div className="w-full bg-gradient-to-r from-[rgb(225,181,212)] to-[rgb(162,146,170)] text-primary-foreground rounded-2xl flex flex-col gap-4 p-14 font-overusedBold">
            <span className="text-5xl font-overusedBold">250</span>
            <span className="text-3xl">qualified mobilize partners</span>
          </div>
          <div className="w-full bg-gradient-to-r from-[rgb(223,115,73)] to-[rgba(176,85,49,0.7)] text-primary-foreground rounded-2xl flex flex-col gap-4 p-14 font-overusedBold">
            <span className="text-5xl">1 million</span>
            <span className="text-3xl flex flex-col">
              $ investment
              <span>RSE & Innovation</span>
            </span>
          </div>
        </motion.div>
        {/* row 2 */}
        <motion.div
          style={{ y: row_2_y }}
          className="w-1/2 flex flex-col gap-7"
        >
          <div className="w-full bg-gradient-to-r from-[rgb(1,144,214)] to-[rgb(1,97,141)] text-primary-foreground rounded-2xl flex flex-col gap-4 p-14 font-overusedBold">
            <span className="text-5xl">12</span>
            <span className="text-3xl flex flex-col">
              years of<span> experience</span>
            </span>
          </div>
          <div className="w-full bg-gradient-to-r from-[rgb(183,213,134)] to-[rgb(137,167,89)] text-primary-foreground rounded-2xl flex flex-col gap-4 p-14 font-overusedBold">
            <span className="text-5xl">26 million</span>
            <span className="text-3xl flex flex-col">
              $ in sales<span> turnover</span>
            </span>
          </div>
          <div className="w-full bg-gradient-to-r from-[rgb(215,67,57)] to-[rgb(172,53,45)] text-primary-foreground rounded-2xl flex flex-col gap-4 p-14 font-overusedBold">
            <span className="text-5xl">150 000 m²</span>
            <span className="text-3xl flex flex-col">
              $ in sales<span> turnover</span>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
