import { type LucideIcon } from "lucide-react";
import { useLocation } from "react-router-dom";
import useViewTransitionPages from "../utils/handlerViewTransitionPages";

interface props {
  text: string;
  link: string;
  Icon: LucideIcon;
  indice: number;
}
export default function LinkPanel({ Icon, link, text, indice }: props) {
  const location = useLocation();
  const { handlerTransition } = useViewTransitionPages({ indice, link });

  return (
    <a
      onClick={(e) => {
        e.preventDefault();
        handlerTransition();
      }}
      href={link}
      className={`last:border-0 p-2 flex items-center gap-4 border-b border-b-slate-600 ${location.pathname == link ? "" : ""}`}
    >
      <Icon className="size-4" />
      <span className="text-lg">{text}</span>
    </a>
  );
}
