import { House, ChartNoAxesGantt, Headset, Bolt } from "lucide-react";
import LinkPanel from "./LinkPanel";
import { linksArray } from "../data/links";

export default function PanelNavegacionTablet({ isOpen }: { isOpen: boolean }) {
  return (
    <nav
      className={`hidden rounded-2xl md:block lg:hidden border border-slate-400 bg-zinc-900 w-[90%] absolute z-20 top-[150%] left-1/2 -translate-x-1/2 ${isOpen ? "h-max p-2" : "h-0 p-0 pb-0 border-0"} transition-[height] duration-200 ease-in overflow-hidden`}
    >
      {linksArray.map(({ text, icon, link }, i) => (
        <LinkPanel key={text} Icon={icon} link={link} text={text} indice={i} />
      ))}
    </nav>
  );
}
