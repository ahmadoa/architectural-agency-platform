import Layout from "@/layout";
import AboutIMG from "@/assets/About.svg";
import { cubicBezier, easeIn, motion } from "framer-motion";

export default function About() {
  return (
    <Layout>
      <div className="w-full flex">
        <div className="h-screen w-full flex flex-row">
          <motion.div className="w-5/12 h-full" transition={{ duration: 1.5 }}>
            <motion.img
              src={AboutIMG}
              initial={{
                opacity: 0,
                clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
              }}
              animate={{
                opacity: 1,
                clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
              }}
              transition={{
                duration: 1,
                ease: cubicBezier(0.83, 0, 0.17, 1),
              }}
              alt="About us image"
              className="h-full w-full object-cover object-top"
            ></motion.img>
          </motion.div>
          <div className="w-7/12 h-full flex flex-col items-center justify-center p-10 gap-3">
            <div className="overflow-hidden">
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ delay: 1.1, ease: "easeOut" }}
                className="font-overusedsemiboldItalic text-xl text-muted-foreground"
              >
                unveiling creativity
              </motion.div>
            </div>
            <div className="overflow-hidden flex justify-center">
              <motion.div
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.3, ease: "easeOut" }}
                className="w-3/4 text-5xl uppercase font-overusedBold text-center text-wrap"
              >
                Architecture is the art of creating dreams in stone
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
