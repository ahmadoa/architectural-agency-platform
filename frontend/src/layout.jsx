import Navbar from "@/components/Navbar";

export default function Layout({ children }) {
  return (
    <div className="">
      <Navbar />
      {children}
    </div>
  );
}
