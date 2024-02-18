import Synergy from "@/assets/synergy.jpg";
import { Link } from "react-router-dom";
import arrow from "@/assets/arrow.svg";

export default function GetInTouch() {
  return (
    <section className="h-screen flex flex-col justify-between p-10 font-overusedRegular">
      <div className="flex flex-col gap-1">
        <div>Have a question? Contact us</div>
        <span className="text-8xl font-overusedBold mt-16 uppercase">
          unleash creative
        </span>
        <div className="flex flex-row items-center gap-3">
          <span className="text-8xl font-overusedBold uppercase">Synergy</span>
          <div className="w-60 h-24 overflow-hidden">
            <img
              src={Synergy}
              className="h-full w-full object-center object-cover"
            ></img>
          </div>
        </div>
      </div>
      <Link className="border-b-[1px] border-t-[1px] border-foreground/35 py-4 flex flex-row gap-8">
        <img src={arrow} className="w-14" />
        <span className="text-4xl font-overusedMedium uppercase">
          Get in touch
        </span>
      </Link>
    </section>
  );
}
