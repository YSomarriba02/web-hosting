import { type LucideIcon } from "lucide-react";
import { useLocation } from "react-router-dom";
import useViewTransitionPages from "../utils/handlerViewTransitionPages";

interface props {
  text: string;
  link: string;
  Icon: LucideIcon;
  indice: number;
}
export default function LinkBarra({ Icon, link, text, indice }: props) {
  const location = useLocation();
  const { handlerTransition } = useViewTransitionPages({ indice, link });

  return (
    <a
      onClick={(e) => {
        e.preventDefault();
        handlerTransition();
      }}
      href={link}
      className={`p-2 rounded-3xl flex flex-col items-center ${location.pathname == link ? "flex-[3] bg-[#cfcfcf5b]" : "flex-1"} transition-[flex-grow,background] duration-200 ease-in-out`}
    >
      <Icon className="size-5" />
      <span className="text-[10px]">{text}</span>
    </a>
  );
}
