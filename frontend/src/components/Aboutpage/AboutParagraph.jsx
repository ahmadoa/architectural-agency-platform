import { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";

export default function Paragraph({ value, scrollYProgress, ref }) {
  const words = value.split(" ");

  return (
    <div className="text-4xl pb-10 leading-snug max-w-full uppercase flex justify-center flex-wrap font-overusedBold">
      {words.map((word, i) => {
        const start = i / words.length;
        const len = 1 / words.length;
        const end = start + len;
        return (
          <Word key={i} range={[start, end]} progress={scrollYProgress}>
            {word}
          </Word>
        );
      })}
    </div>
  );
}

const Word = ({ children, range, progress }) => {
  const characters = children.split("");
  const amount = range[1] - range[0];
  const step = amount / children.length;

  return (
    <span className="relative px-1 text-primary-foreground">
      {characters.map((character, i) => {
        const start = range[0] + i * step;
        const end = range[0] + step * (i + 1);
        return (
          <Character key={i} range={[start, end]} progress={progress}>
            {character}
          </Character>
        );
      })}
    </span>
  );
};

const Character = ({ children, range, progress }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span>
      <span className="absolute text-background/20">{children}</span>
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
};
