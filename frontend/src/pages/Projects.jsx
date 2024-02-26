import Project from "@/components/Projectspage/project";
import Layout from "@/layout";
import axios from "axios";
import { useEffect, useRef, useState } from "react";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const prevAlignmentIndexRef = useRef(-1);

  const getProjects = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/projects");
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

  return (
    <Layout>
      <div className="flex flex-col items-center gap-5">
        <div className="h-[50vh] flex items-end">
          <h1 className="text-7xl font-overusedBold ">Case Studies</h1>
        </div>
        <div className="w-full flex flex-col gap-10 px-10 pb-10">
          {projects.map((project, index) => (
            <div
              key={project._id}
              className={`w-full flex ${getRandomAlignment()}`}
            >
              <Project
                key={index}
                {...project}
              />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
