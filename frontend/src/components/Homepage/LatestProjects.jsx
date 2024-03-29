import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function LatestProjects() {
  const [projects, setProjects] = useState([]);

  const getProjects = async () => {
    try {
      const response = await axios.get(
        "https://nebula-backend-azure.vercel.app/api/random-projects"
      );
      setProjects(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProjects();
  }, []);

  const demoVariants = {
    initial: {
      y: "3rem",
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        duration: 0.4,
      },
    },
  };

  return (
    <div
      className="h-[calc(100vh + 200px)] md:h-screen bg-foreground px-5 md:px-10 py-5 md:py-10 flex flex-col gap-8 md:gap-16 overflow-hidden"
      data-cursor="-inverse"
    >
      {projects.length > 0 ? (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col md:flex-row justify-between gap-3 md:gap-0 items-start md:items-end"
          >
            <motion.div
              initial={{ x: "-30%", opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="flex flex-row md:flex-col gap-1 md:gap-0 md:text-5xl font-bold text-teal-500"
            >
              <h1>Recent</h1>
              <h1>Projects</h1>
            </motion.div>
            <div className="md:w-1/3 text-sm md:text-xl font-medium text-muted/70 ">
              Check out what we've been cooking up lately Our recent projects
              showcase our passion for creativity and dedication to excellence.
            </div>
          </motion.div>
          <motion.div
            variants={demoVariants}
            initial="initial"
            whileInView="animate"
            className="w-full h-full flex flex-col md:flex-row gap-3 md:gap-7 text-white"
          >
            {projects.map((project, index) => {
              return (
                <Link
                  key={project._id}
                  to={`/projects/${project._id}`}
                  className="md:w-1/3"
                >
                  <motion.div
                    variants={demoVariants}
                    className="w-full h-full rounded-xl flex flex-row overflow-hidden justify-between relative group"
                  >
                    <img
                      src={project.heroImgURL}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-in-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/50" />
                    <div className="absolute bottom-5 left-5">
                      <h1 className="text-sm font-medium text-muted/60">
                        {project.projectCategory}
                      </h1>
                      <h1 className="text-2xl font-bold">{project.name}</h1>
                    </div>
                  </motion.div>
                </Link>
              );
            })}
          </motion.div>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
