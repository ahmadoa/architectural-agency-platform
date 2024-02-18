import Navbar from "@/components/Navbar";
import { ReactLenis } from "@studio-freight/react-lenis";

export default function Layout({ children }) {
  return (
    <div className="">
      <ReactLenis root options={{ duration: 3, smoothWheel: true }}>
        <Navbar />
        {children}
      </ReactLenis>
    </div>
  );
}
