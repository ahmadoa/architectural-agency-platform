import { useScroll, useTransform, motion, cubicBezier } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import greyBuilding from "@/assets/greyBuilding.webp";
import arrow from "@/assets/arrow.svg";

export default function Offering() {
  let Heroref = useRef(null);
  let { scrollYProgress } = useScroll({
    target: Heroref,
    offset: ["start end", "end start"],
  });

  let y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <div ref={Heroref} className="h-screen relative overflow-hidden">
      <motion.img
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 0.9,
        }}
        style={{ y }}
        src={greyBuilding}
        className="h-full w-full scale-110 object-cover object-bottom"
      ></motion.img>
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/40" />
      <div className="absolute inset-0 flex flex-col p-10">
        <div className="h-1/2 w-1/2 text-6xl font-bold uppercase">
          <motion.div
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            transition={{
              duration: 0.6,
            }}
          >
            Orchestrating the Symphony of Design & Build
          </motion.div>
        </div>
        <div className="h-1/2 w-full flex text-primary-foreground justify-end items-start">
          <div className="w-1/2 flex flex-col pl-28 gap-10">
            <motion.p
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              transition={{
                duration: 0.5,
              }}
              className="w-[88%] text-3xl capitalize font-normal"
            >
              From meticulous planning to flawless execution, we bring your
              vision to life with exceptional care and expertise.
            </motion.p>
            <Link
              to="/services"
              className="relative self-start flex flex-row items-center gap-5 overflow-hidden group border-b border-b-white/40"
            >
              <img
                src={arrow}
                className="w-7 group-hover:translate-x-2 stroke-white grayscale invert transition-all duration-500"
              />
              <div className="flex flex-col relative">
                <span className="text-xl group-hover:-translate-y-16 transition-all duration-500 font-medium uppercase">
                  Services
                </span>
                <span className="text-xl absolute translate-y-20 group-hover:-translate-y-0 transition-all duration-500 font-medium uppercase">
                  Services
                </span>
              </div>
              <span className="absolute transition-all duration-500 ease-in-out group-hover:right-0 h-[1px] left-0 right-full -bottom-0 bg-primary-foreground"></span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
