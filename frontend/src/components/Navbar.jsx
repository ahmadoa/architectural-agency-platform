import Logo from "@/assets/logo.svg";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="py-3 px-10 flex flex-row items-center justify-between border-b-[1px] border-primary">
      <Link to="/">
        <img src={Logo} className="w-5" />
      </Link>
      <div className="flex items-center text-sm font-overusedRegular">
        EST
        <span className="w-2 h-[2px] bg-primary" />
        <span className="font-bold">2021</span>
      </div>
      <div className="flex items-center gap-3 text-sm font-overusedRegular">
        <Link to="/about" className="relative group">
          HOME
          <span className="absolute transition-all duration-500 ease-in-out group-hover:right-0 h-[1px] left-0 right-full bottom-[2px] bg-primary"></span>
        </Link>
        <span>/</span>
        <Link to="/about" className="relative group">
          ABOUT
          <span className="absolute transition-all duration-500 ease-in-out group-hover:right-0 h-[1px] left-0 right-full bottom-[2px] bg-primary"></span>
        </Link>
        <span>/</span>
        <Link to="/services" className="relative group">
          SERVICES
          <span className="absolute transition-all duration-500 ease-in-out group-hover:right-0 h-[1px] left-0 right-full bottom-[2px] bg-primary"></span>
        </Link>
      </div>
    </nav>
  );
}
