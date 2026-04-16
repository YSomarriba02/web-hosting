import { useLocation } from "react-router-dom";
import useViewTransitionPages from "../utils/handlerViewTransitionPages";

interface props {
  text: string;
  link: string;
  indice: number;
}
export default function LinkDesktop({ link, text, indice }: props) {
  const location = useLocation();
  const { handlerTransition } = useViewTransitionPages({ indice, link });
  return (
    <a
      onClick={(e) => {
        e.preventDefault();
        handlerTransition();
      }}
      href={link}
      className={`font-medium text-[15px] transition-all duration-100 ease-in ${location.pathname == link ? "text-shadow-2xs text-shadow-amber-50 text-[17px]" : ""}`}
    >
      <span className="">{text}</span>
    </a>
  );
}
