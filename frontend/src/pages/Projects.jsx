import Project from "@/components/Projectspage/project";
import Layout from "@/layout";
import axios from "axios";
import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useRef, useState, useLayoutEffect } from "react";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const prevAlignmentIndexRef = useRef(-1);

  const getProjects = async () => {
    try {
      const response = await axios.get("https://nebula-backend-azure.vercel.app/api/projects");
      setProjects(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProjects();
  }, []);

  const alignments = ["justify-start", "justify-center", "justify-end"];

  const getRandomAlignment = () => {
    let newIndex = prevAlignmentIndexRef.current;
    while (newIndex === prevAlignmentIndexRef.current) {
      newIndex = Math.floor(Math.random() * alignments.length);
    }
    prevAlignmentIndexRef.current = newIndex;
    return alignments[newIndex];
  };

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.5]);
  const y = useTransform(scrollYProgress, [0, 0.5], ["-10%", "40%"]);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <Layout>
      <div ref={container} className="flex flex-col items-center gap-5">
        <motion.div
          style={{ scale, y }}
          className="h-[50vh] flex items-end overflow-hidden"
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-7xl font-overusedBold "
          >
            Case Studies
          </motion.h1>
        </motion.div>
        {projects.length > 0 && (
          <motion.div
            initial={{ y: "60%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="w-full flex flex-col gap-10 px-10 pb-10"
          >
            {projects.map((project, index) => (
              <div
                key={project._id}
                className={`w-full flex ${getRandomAlignment()}`}
              >
                <Project key={index} {...project} />
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </Layout>
  );
}
