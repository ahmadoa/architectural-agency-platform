import { useLocation, useParams } from "react-router-dom";
import Layout from "@/layout";
import { useEffect, useState } from "react";
import axios from "axios";
import { urlFor } from "@/lib/sanity";
import { motion } from "framer-motion";
import Gallery from "@/components/SingleProject/Gallery";
import NextProject from "@/components/SingleProject/NextProject";
import Curve from "@/components/Curve";

export default function SingleProject() {
  let { id } = useParams();
  const [project, setProject] = useState({});

  const getProject = async () => {
    try {
      const response = await axios.get(
        `https://nebula-backend-azure.vercel.app/api/singleProject/${id}`
      );
      console.log(response.data);
      setProject(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProject();
  }, []);

  return (
    <Curve>
      <Layout>
        {project.length == 1 ? (
          <div className="flex flex-col gap-5">
            <div className="h-[50vh] flex items-end px-10 overflow-hidden">
              <motion.h1
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl lg:text-7xl font-bold md:pl-20"
              >
                {project[0].name}
              </motion.h1>
            </div>
            <div
              className="h-80 lg:h-screen w-full px-10 overflow-hidden"
              data-cursor="-inverse"
            >
              <motion.img
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                src={urlFor(project[0].heroImgURL).url()}
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="w-full flex flex-col lg:flex-row px-5 gap-10 lg:gap-0 lg:px-10 my-10">
              <div className="lg:w-6/12 flex flex-row mt-1">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col font-bold lg:ml-16 pr-10 text-sm md:text-base lg:pr-24 text-foreground relative"
                >
                  <p className="">Lead Designer</p>
                  <p className="">Location</p>
                  <p className="">Project Category</p>
                  <p className="">Total Land Size</p>
                  <p className="">Status</p>
                  <div className="absolute -bottom-3 lg:bottom-3 h-[1px] w-full bg-slate-500/20" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="flex flex-col font-medium text-sm md:text-base text-muted-foreground relative"
                >
                  <p className="">{project[0].leaddesigner}</p>
                  <p className="">{project[0].location}</p>
                  <p className="">{project[0].projectCategory}</p>
                  <p className="">{project[0].totalLandSize} sqft</p>
                  <p className="">{project[0].status}</p>
                  <div className="absolute -bottom-3 lg:bottom-3 h-[1px] w-full bg-slate-500/20" />
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="lg:w-7/12 text-sm md:text-2xl font-medium pr-10 leading-snug flex flex-wrap text-wrap"
              >
                {project[0].about}
              </motion.div>
            </div>
            <Gallery images={project[0].imgURL} />
            <NextProject currentID={id} />
          </div>
        ) : (
          <div className="h-screen flex items-center justify-center">
            Loading...
          </div>
        )}
      </Layout>
    </Curve>
  );
}
