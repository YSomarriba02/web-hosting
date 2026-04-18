import { planes } from "../data/Planes";
import Plan from "./Plan";

export default function Planes() {
  return (
    <section className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
      {planes.length > 0 &&
        planes.map(
          (
            {
              nombre,
              tiempo,
              setup,
              tipo,
              titulo,
              precioRecurrente,
              caracteristicas,

              isPopular,
            },
            i,
          ) => (
            <Plan
              key={i}
              nombre={nombre}
              titulo={titulo}
              tiempo={tiempo}
              setup={setup}
              tipo={tipo}
              precioRecurrente={precioRecurrente}
              caracteristicas={caracteristicas}
              isPopular={isPopular}
            />
          ),
        )}
    </section>
  );
}
