import useDimension from "@/hooks/useDimension";
import { useTransform, useScroll, motion } from "framer-motion";
import { useRef } from "react";

export default function Gallery({ images }) {
  const imageChunks = [];

  // Chunk the images array into groups of 3
  for (let i = 0; i < images.length; i += 3) {
    imageChunks.push(images.slice(i, i + 3));
  }

  const { height } = useDimension();

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, height * 0.7]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 0.5]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 0.8]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 0.6]);

  return (
    <section className="w-full">
      <div
        ref={container}
        className="h-[300vh] flex flex-row p-5 gap-5 overflow-hidden bg-foreground"
      >
        <Column images={[images[0], images[1], images[2]]} y={y} />
        <Column images={[images[3], images[4], images[5]]} y={y2} />
        <Column images={[images[6], images[7], images[8]]} y={y3} />
        <Column images={[images[9], images[11], images[10]]} y={y4} />
      </div>
    </section>
  );
}

const Column = ({ images, y = 0 }) => {
  return (
    <motion.div
      style={{ y }}
      className=" w-1/4 min-w-[250px] h-full flex flex-col gap-5 overflow-hidden relative column"
    >
      {images.map((src, index) => {
        return (
          <div className="h-full w-full overflow-hidden rounded-xl relative">
            <img
              src={src}
              className="w-full h-full object-cover object-center"
              alt={"gallery" + index}
            />
          </div>
        );
      })}
    </motion.div>
  );
};
