import { linksArray } from "../data/links";
import LinkBarra from "./LinkBarra";

export default function BarraNavegacionMovil() {
  return (
    <nav
      style={{ viewTransitionName: "BarraNavegacionMovil" }}
      className="[box-shadow:1px_1px_7px_2px_black] w-[95%] p-1.5 fixed bottom-4 left-2.5 bg-[#5f5f5f48] rounded-4xl backdrop-blur-[6px] flex justify-center items-center gap-4 md:hidden"
    >
      {linksArray.map(({ link, text, icon }, i) => (
        <LinkBarra key={text} link={link} text={text} Icon={icon} indice={i} />
      ))}
    </nav>
  );
}
