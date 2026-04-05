import { useContextContratacion } from "../context/contextContratacionTiempo";
import type { ContratacionTiempo } from "./NavContratacionTiempo";

interface props {
  contratacion: ContratacionTiempo;
}

export default function ItemContratacionTiempo({ contratacion }: props) {
  const contextContratacion = useContextContratacion();
  const { handlerContratacionTiempo, contratacionTiempo: contratacionActual } =
    contextContratacion;

  const isElegido = contratacionActual == contratacion;
  return (
    <li
      className={`flex-1 relative ${isElegido ? "bg-zinc-950 after:content-[''] after:absolute after:-bottom-2 after:left-0 after:bg-blue-600 after:w-full after:h-1 after:rounded-3xl" : ""} transition-colors duration-200 ease-out ${contratacion == "Mensual" ? "rounded-l-3xl" : ""} ${contratacion == "Anual" ? "rounded-r-3xl" : ""}`}
    >
      <button
        onClick={() => handlerContratacionTiempo(contratacion)}
        className={`w-full py-3 ${isElegido ? "font-medium" : ""}`}
      >
        {contratacion}
      </button>
    </li>
  );
}
