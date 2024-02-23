import Layout from "@/layout";
import ServicesHero from "@/assets/ServicesHero.svg";
import { cubicBezier, motion } from "framer-motion";
import Process from "@/components/Servicespage/Process";
import Offers from "@/components/Servicespage/Offers";

export default function Services() {
  return (
    <Layout>
      <div className={`w-full flex flex-col`}>
        {/* hero */}
        <motion.div className="h-screen w-full flex relative flex-row">
          <motion.img
            src={ServicesHero}
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
              delay: 0.3,
              ease: cubicBezier(0.83, 0, 0.17, 1),
            }}
            alt="About us image"
            className="h-full w-full object-cover object-top"
          ></motion.img>

          <div className="absolute w-full h-full flex flex-col items-center justify-center gap-2">
            <div className="overflow-hidden">
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ delay: 1.3, ease: "easeOut" }}
                className="font-overusedMedium uppercase text-foreground/70"
              >
                Unleashing the Potential
              </motion.div>
            </div>
            <div className="overflow-hidden flex justify-center">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.5, ease: "easeOut" }}
                className="w-5/6 text-5xl uppercase font-overusedBold text-foreground drop-shadow-xl text-center text-wrap"
              >
                Where Dreams Blossom into Lasting Realities
              </motion.div>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/20" />
        </motion.div>
        {/* services intro */}
        <Process />
        {/* offers modals */}
        <Offers />
      </div>
    </Layout>
  );
}