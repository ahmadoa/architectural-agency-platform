import { motion, useTransform, useScroll, cubicBezier } from "framer-motion";
import { useRef } from "react";
import TeamWork from "@/assets/teamwork.webp";
import Building from "@/assets/building1.webp";

export default function TeamValues() {
  const parentRef = useRef(null);
  let { scrollYProgress } = useScroll({
    target: parentRef,
    offset: ["start end", "end start"],
  });

  let Lefty = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  let righty = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);

  return (
    <section
      ref={parentRef}
      className="px-5 md:px-10 py-10 md:py-20 flex flex-col md:flex-row justify-between relative overflow-hidden"
    >
      <motion.div
        style={{ y: Lefty }}
        className="md:w-3/6 h-fit translate-y-96 flex flex-col gap-10 md:gap-20 mb-10 md:mb-0"
      >
        <h1 className="w-2/3 text-2xl md:text-6xl leading-[1.1] font-bold text-wrap">
          A team driven by passion & ambition
        </h1>
        <div className="h-96 relative">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="absolute w-32 h-32 bg-gradient-to-b from-purple-600/70 to-purple-600/30 rounded-bl-full z-0 -bottom-16 -left-10"
          ></motion.div>
          <div className="absolute w-full h-full z-50">
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
              src={TeamWork}
              alt="About us image"
              className="h-full w-full object-cover object-center"
            ></motion.img>
          </div>
        </div>
      </motion.div>
      <motion.div
        style={{ y: righty }}
        className="md:w-3/6 md:pl-16 flex flex-col-reverse md:flex-col mt-40 md:mt-0 items-center gap-20"
      >
        <div className="hidden md:flex relative self-end mr-5 mt-24 h-[28rem] w-full md:w-4/6">
          <div className="absolute w-36 h-20 bg-gradient-to-r from-red-600/80 to-red-600/20 z-50 rounded-b-full bottom-32 -right-14"></div>
          <div className="absolute w-full h-full z-0">
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
              src={Building}
              alt="building image"
              className="h-full w-full object-cover object-center"
            ></motion.img>
          </div>
        </div>
        <div className="self-start md:w-2/3 md:pl-10 flex flex-col text-base leading-snug gap-5 font-normal">
          <p>
            At <span className="font-bold">Nebula</span> Architectural Agency,
            ambition and passion fuel our every project. We're a team of
            talented architects who work efficiently and collaboratively to
            translate your vision into reality. We believe in fostering open
            communication and transparency, ensuring you're involved every step
            of the way.
          </p>
          <p>
            We leverage cutting-edge technology and stay informed about the
            latest trends to ensure your project is future-proofed and reflects
            your individual needs.
          </p>
          <p>
            Choose <span className="font-bold">Nebula</span> for our expertise,
            innovative approach, and client-centric focus. We deliver
            exceptional value without compromising on quality, making your
            architectural dreams a reality.
          </p>
        </div>
      </motion.div>
      <div className="absolute bottom-0 left-64 flex flex-col">
        <div className="w-56 h-28 rounded-t-full bg-purple-300/10"></div>
        <div className="w-56 h-28 rounded-t-full bg-purple-300/10"></div>
      </div>
    </section>
  );
}
