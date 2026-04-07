import { House, ChartNoAxesGantt, Headset, Bolt } from "lucide-react";
import LinkPanel from "./LinkPanel";

export default function PanelNavegacionTablet({ isOpen }: { isOpen: boolean }) {
  return (
    <nav
      className={`hidden rounded-2xl md:block lg:hidden border border-slate-400 bg-zinc-900 w-[90%] absolute z-10 top-[150%] left-1/2 -translate-x-1/2 ${isOpen ? "h-max p-2" : "h-0 p-0 pb-0 border-0"} transition-[height] duration-200 ease-in overflow-hidden`}
    >
      <LinkPanel Icon={House} link="/" text="Home" />
      <LinkPanel Icon={ChartNoAxesGantt} link="/planes" text="Planes" />
      <LinkPanel Icon={Headset} link="/nosotros" text="Contactanos" />
      <LinkPanel Icon={Bolt} link="/ajustes" text="Ajustes" />
    </nav>
  );
}
