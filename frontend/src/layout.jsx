import Navbar from "@/components/Navbar";
import { ReactLenis } from "@studio-freight/react-lenis";
import Footer from "@/components/Footer";

export default function Layout({ children }) {
  return (
    <div className="">
      <ReactLenis root options={{ duration: 3, smoothWheel: true }}>
        <main className="relative">
          <Navbar />
          {children}
          <Footer />
        </main>
      </ReactLenis>
    </div>
  );
}
