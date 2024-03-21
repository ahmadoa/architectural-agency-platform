import Logo from "@/assets/logo.svg";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";

export default function Navbar() {
  const location = useLocation();
  const { pathname } = location;

  const [isSmalls, setIsSmalls] = useState(false);
  const isSmall = useMediaQuery({ query: "(max-width: 800px)" });

  useEffect(() => {
    setIsSmalls(isSmall);
  }, [isSmall]);

  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="absolute w-full flex flex-col z-50 top-0">
      <div className="py-3 px-10 flex flex-row items-center justify-between">
        <Link to="/" className="overflow-hidden">
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ delay: 2, ease: "easeOut" }}
            className={`flex items-center text-sm `}
          >
            <img src={Logo} className="w-5" />
          </motion.div>
        </Link>
        <motion.div className="overflow-hidden">
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ delay: 2.1, ease: "easeOut" }}
            className="flex items-center text-sm "
          >
            EST
            <span className="w-2 h-[2px] bg-primary" />
            <span className="font-bold">2012</span>
          </motion.div>
        </motion.div>
        {isSmalls ? (
          <div>
            <IoMenu className="text-2xl" onClick={handleShowNavbar} />
          </div>
        ) : (
          <motion.div
            className="flex items-center gap-3 text-base "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 2.1 }}
          >
            <Link to="/" className="overflow-hidden">
              <motion.div
                className={`relative group  ${
                  pathname === "/" ? "font-bold mb-1" : "font-normal mb-1"
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
                  pathname === "/about" ? "font-bold mb-1" : "font-normal mb-1"
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
                    ? "font-bold mb-1"
                    : "font-normal mb-1"
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
                    ? "font-bold mb-1"
                    : "font-normal mb-1"
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
                    ? "font-bold mb-1"
                    : "font-normal mb-1"
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
        )}
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
      <div
        className={`  ${
          showNavbar
            ? "w-full flex flex-col gap-1 items-center justify-center p-5 bg-foreground text-white "
            : "hidden transition-all duration-500"
        }`}
      >
        <Link to="/">
          <div
            className={`relative group  ${
              pathname === "/" ? "font-bold" : "font-normal"
            }`}
          >
            HOME
          </div>
        </Link>
        <Link to="/about">
          <motion.div
            className={`relative group  ${
              pathname === "/about" ? "font-bold" : "font-normal"
            }`}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ delay: 2.2, ease: "easeOut" }}
          >
            ABOUT
            <span className="absolute transition-all duration-500 ease-in-out group-hover:right-0 h-[1px] left-0 right-full bottom-[2px] bg-primary"></span>
          </motion.div>
        </Link>
        <Link to="/services" className="overflow-hidden">
          <div
            className={`relative group  ${
              pathname === "/services" ? "font-bold" : "font-normal"
            }`}
          >
            SERVICES
          </div>
        </Link>
        <Link to="/projects">
          <div
            className={`relative group  ${
              pathname === "/projects" ? "font-bold" : "font-normal"
            }`}
          >
            PROJECTS
          </div>
        </Link>
        <Link to="/contact">
          <div
            className={`relative group  ${
              pathname === "/contact" ? "font-bold" : "font-normal"
            }`}
          >
            CONTACT
          </div>
        </Link>
      </div>
    </nav>
  );
}
