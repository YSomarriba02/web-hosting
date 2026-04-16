import { useContextPagina } from "../context/contextGlobal";
import { flushSync } from "react-dom";
import { useNavigate } from "react-router-dom";

export default function useViewTransitionPages({
  indice,
  link,
}: {
  indice: number;
  link: string;
}) {
  const navigate = useNavigate();
  const context = useContextPagina();
  const { paginaActual, handlePaginaActual } = context;

  function handlerTransition() {
    const root = document.documentElement;
    root.classList.remove("backward", "fordward");

    if (indice === paginaActual) {
      return;
    }
    if (indice < paginaActual) {
      root.classList.add("backward");
    } else {
      root.classList.add("fordward");
    }

    document.startViewTransition(() => {
      flushSync(() => {
        handlePaginaActual(indice);
      });
      navigate(link);
    });
  }

  return { handlerTransition };
}
