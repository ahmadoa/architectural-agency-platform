import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import completedBuild from "@/assets/completedBuild.webp";
import render from "@/assets/3drender.webp";
import Sketch from "@/assets/Sketch.webp";

export default function Process() {
  const parentRef = useRef();
  const { scrollYProgress } = useScroll({
    target: parentRef,
    offset: ["start end", "end start"],
  });

  const img_y_1 = useTransform(scrollYProgress, [0, 1], ["30%", "-60%"]);
  const img_scale_1 = useTransform(scrollYProgress, [0, 0.4], [1, 1.2]);
  const title_y_1 = useTransform(scrollYProgress, [0, 1], ["20%", "60%"]);
  const img_y_2 = useTransform(scrollYProgress, [0, 1], ["30%", "-60%"]);
  const img_scale_2 = useTransform(scrollYProgress, [0.2, 0.7], [1, 1.2]);
  const title_y_2 = useTransform(scrollYProgress, [0, 1], ["-40%", "20%"]);
  const img_y_3 = useTransform(scrollYProgress, [0, 1], ["50%", "-30%"]);
  const img_scale_3 = useTransform(scrollYProgress, [0.6, 1.2], [1, 1.2]);
  const title_y_3 = useTransform(scrollYProgress, [0, 1], ["-100%", "50%"]);
  const img_width = useTransform(scrollYProgress, [0.5, 1.1], ["60%", "115%"]);

  return (
    <section
      ref={parentRef}
      className="w-full h-[300vh] flex flex-col gap-20 px-10 pt-16 overflow-hidden"
    >
      {/* first part */}
      <div className="h-1/4 w-full flex flex-row">
        <motion.div
          style={{ y: title_y_1 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-1/2 h-full pt-16 flex justify-center"
        >
          <h1 className="w-3/4 font-overusedBold text-4xl text-center">
            We transform initial ideas into awe-inspiring realities
          </h1>
        </motion.div>
        <div className="w-1/2 h-full flex justify-center">
          <motion.div
            style={{ y: img_y_1 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="w-7/12 h-full bg-foreground/50 relative overflow-hidden shadow-2xl"
          >
            <motion.img
              src={Sketch}
              style={{ scale: img_scale_1 }}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-b to-black/0 from-black/40" />
            <div className="w-1/2 absolute inset-0 top-7 left-7 flex flex-col gap-5 text-xl font-overusedMedium text-primary-foreground">
              <span className="text-sm text-gray-300">01</span>
              <h1>From Blueprint to Brilliance</h1>
            </div>
          </motion.div>
        </div>
      </div>
      {/* second part */}
      <div className="h-1/4 w-full flex flex-row">
        <div className="w-1/2 h-full flex items-end">
          <motion.div
            style={{ y: img_y_2 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="w-7/12 h-full bg-foreground/50 overflow-hidden relative shadow-2xl"
          >
            <motion.img
              src={render}
              style={{ scale: img_scale_2 }}
              className="w-full h-full object-cover object-center"
            />

            <div className="absolute inset-0 bg-gradient-to-b to-black/0 from-black/40" />
            <div className="w-1/2 absolute inset-0 top-7 left-7 flex flex-col gap-5 text-xl font-overusedMedium text-primary-foreground">
              <span className="text-sm text-gray-300">02</span>
              <h1>Where Comfort Meets Style</h1>
            </div>
          </motion.div>
        </div>
        <motion.div
          style={{ y: title_y_2 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-1/2 h-full flex justify-center items-center"
        >
          <motion.h1 className="pr-20 font-overusedBold text-3xl text-center">
            We curate spaces that reflect your personality and enhance your
            well-being.
          </motion.h1>
        </motion.div>
      </div>
      {/* third part */}
      <div className="h-2/4 w-full flex flex-col items-center">
        <div className="w-full h-1/4 flex justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="h-full w-full flex justify-center"
          >
            <motion.h1
              style={{ y: title_y_3 }}
              className="w-2/3 font-overusedBold pt-10 text-4xl text-center"
            >
              We design with the future in mind, fostering vibrant and
              sustainable urban environments
            </motion.h1>
          </motion.div>
        </div>
        <motion.div
          style={{ y: img_y_3, width: img_width }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="w-5/6 h-3/4 flex items-end"
        >
          <motion.div className="w-full h-full bg-foreground/50 relative overflow-hidden shadow-2xl">
            <motion.img
              src={completedBuild}
              style={{ scale: img_scale_3 }}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-b to-black/0 from-black/40" />
            <div className="w-1/4 absolute inset-0 top-7 left-7 flex flex-col gap-5 text-xl font-overusedMedium text-primary-foreground">
              <span className="text-sm text-gray-300">03</span>
              <h1>Shaping Sustainable Communities</h1>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
