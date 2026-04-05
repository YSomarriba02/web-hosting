import { House } from "lucide-react";
import { ChartNoAxesGantt } from "lucide-react";
import { Headset } from "lucide-react";
import { Bolt } from "lucide-react";
import LinkBarra from "./LinkBarra";

export default function BarraNavegacionMovil() {
  return (
    <nav className="[box-shadow:1px_1px_7px_2px_black] w-[95%] p-1.5 fixed bottom-4 left-2.5 bg-[#5f5f5f48] rounded-4xl backdrop-blur-[6px] flex justify-center items-center gap-4 md:hidden">
      <LinkBarra Icon={House} link="/" text="Home" />
      <LinkBarra Icon={ChartNoAxesGantt} link="/planes" text="Planes" />
      <LinkBarra Icon={Headset} link="/nosotros" text="Contactanos" />
      <LinkBarra Icon={Bolt} link="/ajustes" text="Ajustes" />
    </nav>
  );
}
