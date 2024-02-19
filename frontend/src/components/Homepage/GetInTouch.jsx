import Synergy from "@/assets/synergy.jpg";
import { Link } from "react-router-dom";
import arrow from "@/assets/arrow.svg";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export default function GetInTouch() {
  let ref = useRef(null);
  let { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end center"],
  });
  let y = useTransform(scrollYProgress, [0, 0.8], ["100%", "0%"]);
  let sy = useTransform(scrollYProgress, [0.1, 1], ["170%", "0%"]);

  return (
    <section className="h-screen flex flex-col justify-between p-10 font-overusedRegular">
      <div ref={ref} className="flex flex-col gap-1">
        <motion.div
          initial={{ opacity: 0 }}
          transition={{ duration: 3 }}
          whileInView={{ opacity: 1 }}
        >
          Have a question? Contact us
        </motion.div>
        <div className="overflow-hidden mt-16">
          <motion.div
            style={{ y }}
            className="text-8xl font-overusedBold uppercase"
          >
            unleash creative
          </motion.div>
        </div>

        <div className="overflow-hidden">
          <motion.div
            style={{ y: sy }}
            className="flex flex-row items-center gap-3"
          >
            <span className="text-8xl font-overusedBold uppercase">
              Synergy
            </span>
            <div className="w-60 h-24 overflow-hidden">
              <img
                src={Synergy}
                className="h-full w-full object-center object-cover"
              ></img>
            </div>
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, x: 0 }}
      >
        <Link className="border-b-[1px] border-t-[1px] overflow-hidden border-foreground/35 py-4 flex flex-row gap-8 group">
          <img
            src={arrow}
            className="w-14 group-hover:translate-x-2 transition-all duration-500"
          />
          <div className="flex flex-col relative">
            <span className="text-4xl group-hover:-translate-y-16 transition-all duration-500 font-overusedMedium uppercase">
              Get in touch
            </span>
            <span className="text-4xl absolute translate-y-20 group-hover:-translate-y-0 transition-all duration-500 font-overusedMedium uppercase">
              Get in touch
            </span>
          </div>
        </Link>
      </motion.div>
    </section>
  );
}
