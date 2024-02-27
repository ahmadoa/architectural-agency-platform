import Navbar from "@/components/Navbar";
import { ReactLenis } from "@studio-freight/react-lenis";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import MouseFollower from "mouse-follower";
import gsap from "gsap";
import "./cursor.scss";

export default function Layout({ children }) {
  MouseFollower.registerGSAP(gsap);
  const cursor = new MouseFollower({
    visible: true,
    visibleOnState: false,
    speed: 0.8,
    ease: "expo.out",
    overwrite: true,
    skewing: 2,
    showTimeout: 20,
    hideOnLeave: true,
    hideTimeout: 300,
    hideMediaTimeout: 300,
  });

  return (
    <div className="">
      <ReactLenis root options={{ duration: 3, smoothWheel: true }}>
        <main className="relative ">
          <Navbar />
          {children}
          <Footer />
        </main>
        <Toaster />
      </ReactLenis>
    </div>
  );
}
