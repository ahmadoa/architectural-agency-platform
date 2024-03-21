import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";

export default function Project(props) {
  const [styles, setStyles] = useState({
    width: `${Math.floor(Math.random() * 30) + 60}%`, // Distribute vertically
  });

  const innerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: innerRef,
    offset: ["start end", "end start"],
  });

  const img_scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <div
      ref={innerRef}
      className="h-80 lg:h-[90vh] w-full"
      style={styles}
      data-cursor="-inverse"
    >
      <Link to={`/projects/${props._id}`} className="flex flex-col h-full">
        <div className="h-full w-full relative shadow-xl overflow-hidden">
          <motion.img
            style={{ scale: img_scale }}
            src={props.imgURL}
            alt={props.name}
            className="h-full w-full object-cover object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/30 " />
          <div className="absolute bottom-5 z-auto left-5 flex flex-col mt-2 text-primary-foreground font-medium">
            <p className="text-sm text-zinc-300">{props.projectCategory}</p>
            <h3 className="text-xl">{props.name}</h3>
          </div>
        </div>
      </Link>
    </div>
  );
}
