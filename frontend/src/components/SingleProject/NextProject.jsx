import { urlFor } from "@/lib/sanity";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function NextProject({ currentID }) {
  const [allProjects, setProjects] = useState([]);
  const [nextProject, setNext] = useState({});

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get("https://nebula-backend-azure.vercel.app/api/projects");
        setProjects(response.data);

        const nonMatchingProjects = response.data.filter(
          (project) => project._id !== currentID
        );

        if (nonMatchingProjects.length) {
          const randomIndex = Math.floor(
            Math.random() * nonMatchingProjects.length
          );
          setNext(nonMatchingProjects[randomIndex]);
        }
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
    console.log(nextProject);
  }, [currentID]);

  return (
    <section>
      {nextProject && (
        <Link
          to={`/projects/${nextProject._id}`}
          reloadDocument
          preventScrollReset={false}
          className="h-screen w-full flex flex-col px-10"
        >
          <div className="h-1/2 flex px-10 pb-10 items-end justify-end">
            <div className="w-full flex flex-row items-center justify-between">
              <h1 className="text-7xl font-overusedBold">{nextProject.name}</h1>
              <button className="flex flex-row gap-1 items-center">
                <div className="h-1 w-1 bg-foreground" />
                <span className="uppercase font-overusedMedium">next case</span>
              </button>
            </div>
          </div>
          <div className="h-1/2 bg-slate-400">
            <img
              src={nextProject.imgURL}
              className="w-full h-full object-cover object-bottom"
            />
          </div>
        </Link>
      )}
    </section>
  );
}
