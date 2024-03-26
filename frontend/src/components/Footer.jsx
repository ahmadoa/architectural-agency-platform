import GetInTouch from "./GetInTouch";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="flex flex-col">
      <GetInTouch />
      <div
        className="h-screen bg-foreground p-5 md:p-10 flex flex-col justify-between"
        data-cursor="-inverse"
      >
        <div className="flex flex-row flex-wrap-reverse gap-10 md:gap-0 justify-between">
          <div className="flex flex-row flex-wrap gap-10 md:gap-36 text-sm md:text-base">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex flex-row gap-3 text-white font-medium"
            >
              <span className="text-muted/50">01/</span>
              <div className="flex flex-col gap-3 md:gap-5">
                <h1 className="uppercase">Sitemap</h1>
                <div className="flex flex-col gap-1 md:gap-2 text-muted/50">
                  <Link
                    to="/"
                    className="hover:text-primary-foreground transition-all"
                  >
                    Home{" "}
                  </Link>
                  <Link
                    to="/about"
                    className="hover:text-primary-foreground transition-all"
                  >
                    About{" "}
                  </Link>
                  <Link
                    to="/services"
                    className="hover:text-primary-foreground transition-all"
                  >
                    Services{" "}
                  </Link>
                  <Link
                    to="/projects"
                    className="hover:text-primary-foreground transition-all"
                  >
                    Study Cases{" "}
                  </Link>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="flex flex-row gap-3 text-white font-medium"
            >
              <span className="text-muted/50">02/</span>
              <div className="flex flex-col gap-3 md:gap-5">
                <h1 className="uppercase">socials</h1>
                <div className="flex flex-col gap-1 md:gap-2 text-muted/50">
                  <Link
                    to="https://www.linkedin.com/in/ahmad-ouladaouid"
                    target="_blank"
                    className="hover:text-primary-foreground transition-all"
                  >
                    LinkedIn
                  </Link>
                  <Link
                    to="https://www.instagram.com/ahmad_oulada"
                    target="_blank"
                    className="hover:text-primary-foreground transition-all"
                  >
                    Instagram
                  </Link>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="flex flex-row gap-3 text-white font-medium"
            >
              <span className="text-muted/50">03/</span>
              <div className="flex flex-col gap-3 md:gap-5">
                <h1 className="uppercase">infos</h1>
                <div className="flex flex-col gap-1 md:gap-2 text-muted/50">
                  <Link
                    to="/"
                    className="hover:text-primary-foreground transition-all"
                  >
                    Legal Notice
                  </Link>
                  <Link
                    to="/"
                    className="hover:text-primary-foreground transition-all"
                  >
                    Cookie policy{" "}
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <Link
              to="/contact"
              className="uppercase font-medium text-primary-foreground relative"
            >
              let's work together
              <div className="absolute w-full h-[2px] bg-primary-foreground" />
            </Link>
          </motion.div>
        </div>
        <div className="overflow-hidden w-full">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className=" flex flex-row items-center justify-between text-4xl sm:text-8xl lg:text-9xl xl:text-10xl"
          >
            <div className="font-bold text-primary-foreground">NEBULA</div>
            <div className="self-end font-medium text-muted-foreground">
              STUDIO
            </div>
            <div className="self-center h-4 w-4 md:w-8 md:h-8 bg-muted-foreground rounded-full" />
          </motion.div>
          <div className="w-full h-[1px] bg-muted/60 my-3 md:my-5" />
          <div className="flex flex-row justify-end md:justify-between">
            <div className="hidden md:flex text-xs md:text-sm font-medium text-primary-foreground">
              &copy; 2024 NEBULA STUDIO
            </div>
            <div className="text-xs md:text-sm font-medium text-primary-foreground">
              Website Made By Ahmad Oulad Aouid &reg;
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
