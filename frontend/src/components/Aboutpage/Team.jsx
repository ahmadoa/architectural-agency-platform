import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { useScroll, useTransform, motion } from "framer-motion";
import { urlFor } from "@/lib/sanity";

export default function Team() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const desktop = useMediaQuery({ query: "(max-width: 1024px)" });
  const tablet = useMediaQuery({ query: "(max-width: 600px)" });

  useEffect(() => {
    setIsDesktop(desktop);
  }, [desktop]);

  useEffect(() => {
    setIsTablet(tablet);
  }, [tablet]);

  let parentRef = useRef(null);
  let { scrollYProgress } = useScroll({
    target: parentRef,
  });
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    isTablet ? ["1%", "-770%"] : isDesktop ? ["1%", "-145%"] : ["1%", "-145%"]
  );

  const [team, setTeam] = useState([]);

  const getTeam = async () => {
    try {
      const response = await axios.get(
        "https://nebula-backend-azure.vercel.app/api/team"
      );
      setTeam(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getTeam();
  }, []);

  return (
    <section
      ref={parentRef}
      className="relative bg-gradient-to-b from-foreground to-background h-[300vh]"
      data-cursor="-inverse"
    >
      <div className="sticky top-0 overflow-hidden h-screen py-10 flex justify-between flex-col">
        <div className="px-5 md:px-10">
          <h1 className="w-fit h-fit text-2xl font-bold text-teal-500 py-1 md:px-3 rounded-full">
            Meet The Team
          </h1>
        </div>
        <motion.div style={{ x }} className="h-5/6 flex gap-5 pl-5 md:pl-7">
          {team.length > 0 ? (
            team.map((member) => (
              <div key={member._id}>
                <Card
                  name={member.name}
                  role={member.role}
                  img={member.imgURL}
                  keyID={member._id}
                />
              </div>
            ))
          ) : (
            <p>Loading team data...</p>
          )}
        </motion.div>
      </div>
    </section>
  );
}

const Card = ({ name, role, img }) => {
  return (
    <div className="h-full w-72 lg:w-80 rounded-xl bg-slate-600 relative overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
      <img
        src={urlFor(img).quality(100).height(700).width(500).fit("fillmax")}
        className="w-full h-full"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/30"></div>
      <div className="absolute bottom-4 left-4  flex flex-col">
        <h1 className="text-primary-foreground font-bold text-2xl">{name}</h1>
        <p className="text-primary-foreground font-normal text-sm">{role}</p>
      </div>
    </div>
  );
};
