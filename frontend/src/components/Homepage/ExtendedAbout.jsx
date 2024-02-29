import arrow from "@/assets/arrow.svg";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import building2 from "@/assets/building_2.webp";
import building3 from "@/assets/building_3.webp";
import { useRef } from "react";

export default function Extended() {
  const parentRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: parentRef,
    offset: ["start end", "end start"],
  });
  const pic_1_y = useTransform(scrollYProgress, [0, 1], ["10%", "-20%"]);
  const pic_2_y = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  return (
    <section className="w-full pt-16 flex flex-col gap-28">
      <div className="flex flex-col px-16">
        {/* row 1 */}
        <div className="w-full flex flex-row items-center justify-between text-7xl font-overusedBold uppercase">
          <div className="overflow-hidden">
            <h1>Architects,</h1>
          </div>
          <div className="overflow-hidden">
            <h1>Designers</h1>
          </div>
        </div>
        {/* row 1 */}
        <div className="w-full flex flex-row items-center justify-end text-7xl font-overusedBold uppercase">
          <div className=" overflow-hidden">
            <h1>And creatives</h1>
          </div>
        </div>
      </div>
      <div ref={parentRef} className="flex h-[120vh] flex-row">
        <div className="w-1/2 flex justify-start">
          <motion.div style={{ y: pic_1_y }} className="w-3/4 h-5/6">
            <motion.img
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              transition={{
                duration: 0.4,
              }}
              src={building2}
              alt="building 2"
              className="h-full w-full object-cover object-center"
            ></motion.img>
          </motion.div>
        </div>
        <div className="w-1/2 flex flex-col justify-between">
          <div className="flex flex-col pl-28 gap-10">
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
              className="w-[88%] text-3xl capitalize font-overusedMedium"
            >
              Distinguished by a great sensitivity in seeing and creating beauty
              by constantly reinventing ourselves.
            </motion.p>
            <Link
              to="/about"
              className="relative self-start flex flex-row items-center gap-5 overflow-hidden group border border-b border-b-foreground/40"
            >
              <img
                src={arrow}
                className="w-7 group-hover:translate-x-2 transition-all duration-500"
              />
              <div className="flex flex-col relative">
                <span className="text-xl group-hover:-translate-y-16 transition-all duration-500 font-overusedMedium uppercase">
                  about us
                </span>
                <span className="text-xl absolute translate-y-20 group-hover:-translate-y-0 transition-all duration-500 font-overusedMedium uppercase">
                  about us
                </span>
              </div>
              <span className="absolute transition-all duration-500 ease-in-out group-hover:right-0 h-[1px] left-0 right-full -bottom-0 bg-foreground"></span>
            </Link>
          </div>
          <motion.div
            style={{ y: pic_2_y }}
            className="self-end mr-10 h-5/12 w-3/6"
          >
            <motion.img
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              transition={{
                duration: 0.4,
              }}
              src={building3}
              alt="building 3"
              className="h-full w-full object-cover object-center"
            ></motion.img>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
