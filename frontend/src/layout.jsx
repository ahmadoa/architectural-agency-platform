import Navbar from "@/components/Navbar";
import { ReactLenis } from "@studio-freight/react-lenis";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";

export default function Layout({ children }) {
  return (
    <div className="">
      <ReactLenis root options={{ duration: 3, smoothWheel: true }}>
        <main className="relative">
          <Navbar />
          {children}
          <Footer />
        </main>
        <Toaster />
      </ReactLenis>
    </div>
  );
}
