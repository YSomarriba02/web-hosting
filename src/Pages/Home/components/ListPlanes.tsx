import { useContextContratacion } from "../context/contextContratacionTiempo";
import { mensual, trimestral, anual } from "../../Planes/data/Planes";
import Plan from "./Plan";

export default function ListPlanes() {
  const contextContratacion = useContextContratacion();
  const { contratacionTiempo: contratacionActual } = contextContratacion;

  function mvTransicion() {
    if (contratacionActual == "Mensual") {
      return "translate-x-[0%]";
    } else if (contratacionActual == "Trimestral") {
      return "-translate-x-[calc(100%+80px)]";
    } else {
      return "-translate-x-[calc(200%+160px)]";
    }
  }

  const scrollX = mvTransicion();
  return (
    <div
      id="agrupacion"
      className={`w-full flex gap-20 transition-transform duration-300 ease-initial ${scrollX}`}
    >
      {/* Mensual */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6 min-w-full md:h-min">
        {mensual.map(
          ({
            nombre,
            precio,
            precioAnterior,
            isPopular,
            herramientas,
            recursos,
          }) => (
            <Plan
              key={nombre}
              nombre={nombre}
              precio={precio}
              precioAnterior={precioAnterior}
              isPopular={isPopular}
              tiempo="mensual"
              herramientas={herramientas}
              recursos={recursos}
            />
          ),
        )}
      </div>

      {/* Trimestral */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6 min-w-full md:h-min">
        {trimestral.map(
          ({
            nombre,
            precio,
            precioAnterior,
            isPopular,
            herramientas,
            recursos,
          }) => (
            <Plan
              key={nombre}
              nombre={nombre}
              precio={precio}
              precioAnterior={precioAnterior}
              isPopular={isPopular}
              tiempo="trimestral"
              herramientas={herramientas}
              recursos={recursos}
            />
          ),
        )}
      </div>

      {/* Anual */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6 min-w-full md:h-min">
        {anual.map(
          ({
            nombre,
            precio,
            precioAnterior,
            isPopular,
            herramientas,
            recursos,
          }) => (
            <Plan
              key={nombre}
              nombre={nombre}
              precio={precio}
              precioAnterior={precioAnterior}
              isPopular={isPopular}
              tiempo="anual"
              herramientas={herramientas}
              recursos={recursos}
            />
          ),
        )}
      </div>
    </div>
  );
}
