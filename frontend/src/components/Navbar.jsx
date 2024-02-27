import Logo from "@/assets/logo.svg";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navbar() {
  const location = useLocation();
  const { pathname } = location;
  console.log(pathname);

  return (
    <nav className="absolute w-full flex flex-col z-50 top-0">
      <div className="py-3 px-10 flex flex-row items-center justify-between">
        <Link to="/" className="overflow-hidden">
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ delay: 2, ease: "easeOut" }}
            className={`flex items-center text-sm font-overusedRegular`}
          >
            <img src={Logo} className="w-5" />
          </motion.div>
        </Link>
        <motion.div className="overflow-hidden">
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ delay: 2.1, ease: "easeOut" }}
            className="flex items-center text-sm font-overusedRegular"
          >
            EST
            <span className="w-2 h-[2px] bg-primary" />
            <span className="font-bold">2012</span>
          </motion.div>
        </motion.div>
        <motion.div
          className="flex items-center gap-3 text-base font-overusedRegular"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 2.1 }}
        >
          <Link to="/" className="overflow-hidden">
            <motion.div
              className={`relative group  ${
                pathname === "/"
                  ? "font-overusedBold mb-1"
                  : "font-overusedMedium mb-1"
              }`}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ delay: 2, ease: "easeOut" }}
            >
              HOME
              <span className="absolute transition-all duration-500 ease-in-out group-hover:right-0 h-[1px] left-0 right-full bottom-[2px] bg-primary"></span>
            </motion.div>
          </Link>

          <span>/</span>
          <Link to="/about" className="overflow-hidden">
            <motion.div
              className={`relative group  ${
                pathname === "/about"
                  ? "font-overusedBold mb-1"
                  : "font-overusedMedium mb-1"
              }`}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ delay: 2.2, ease: "easeOut" }}
            >
              ABOUT
              <span className="absolute transition-all duration-500 ease-in-out group-hover:right-0 h-[1px] left-0 right-full bottom-[2px] bg-primary"></span>
            </motion.div>
          </Link>
          <span>/</span>
          <Link to="/services" className="overflow-hidden">
            <motion.div
              className={`relative group  ${
                pathname === "/services"
                  ? "font-overusedBold mb-1"
                  : "font-overusedMedium mb-1"
              }`}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ delay: 2.3, ease: "easeOut" }}
            >
              SERVICES
              <span className="absolute transition-all duration-500 ease-in-out group-hover:right-0 h-[1px] left-0 right-full bottom-[2px] bg-primary"></span>
            </motion.div>
          </Link>
          <span>/</span>
          <Link to="/projects" className="overflow-hidden">
            <motion.div
              className={`relative group  ${
                pathname === "/projects"
                  ? "font-overusedBold mb-1"
                  : "font-overusedMedium mb-1"
              }`}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ delay: 2.3, ease: "easeOut" }}
            >
              PROJECTS
              <span className="absolute transition-all duration-500 ease-in-out group-hover:right-0 h-[1px] left-0 right-full bottom-[2px] bg-primary"></span>
            </motion.div>
          </Link>
          <span>/</span>
          <Link to="/contact" className="overflow-hidden">
            <motion.div
              className={`relative group  ${
                pathname === "/contact"
                  ? "font-overusedBold mb-1"
                  : "font-overusedMedium mb-1"
              }`}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ delay: 2.3, ease: "easeOut" }}
            >
              CONTACT
              <span className="absolute transition-all duration-500 ease-in-out group-hover:right-0 h-[1px] left-0 right-full bottom-[2px] bg-primary"></span>
            </motion.div>
          </Link>
        </motion.div>
      </div>
      <motion.div
        className="h-[0.3px] w-full bg-primary"
        initial={{
          opacity: 0,
          clipPath: "inset(0% 100% 0% 100%)",
        }}
        animate={{
          opacity: 1,
          clipPath: "inset(0% 0% 0% 0%)",
        }}
        transition={{
          duration: 1,
          delay: 1.8,
          ease: "easeIn",
        }}
      ></motion.div>
    </nav>
  );
}
