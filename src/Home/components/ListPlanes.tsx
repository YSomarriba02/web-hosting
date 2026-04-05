import { useContextContratacion } from "../context/contextContratacionTiempo";
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
        <Plan
          nombre={"Esencial"}
          precio="2.07"
          recursos={[
            { nombre: "Almacenamiento", valor: "10 GB SSD" },
            { nombre: "Sitios", valor: "1" },
            { nombre: "Ancho de banda", valor: "100 Gb" },
            { nombre: "Email", valor: "1 cuenta" },
          ]}
          herramientas={[
            "SSLL gratuito",
            "cPanel",
            "LiteSpeed Cache",
            "1-click install",
          ]}
        />

        <Plan
          nombre={"Esencial"}
          precio="2.07"
          recursos={[
            { nombre: "Almacenamiento", valor: "10 GB SSD" },
            { nombre: "Sitios", valor: "1" },
            { nombre: "Ancho de banda", valor: "100 Gb" },
            { nombre: "Email", valor: "1 cuenta" },
          ]}
          herramientas={[
            "SSLL gratuito",
            "cPanel",
            "LiteSpeed Cache",
            "1-click install",
          ]}
        />

        <Plan
          nombre={"Esencial"}
          precio="2.07"
          recursos={[
            { nombre: "Almacenamiento", valor: "10 GB SSD" },
            { nombre: "Sitios", valor: "1" },
            { nombre: "Ancho de banda", valor: "100 Gb" },
            { nombre: "Email", valor: "1 cuenta" },
          ]}
          herramientas={[
            "SSLL gratuito",
            "cPanel",
            "LiteSpeed Cache",
            "1-click install",
          ]}
        />
      </div>

      {/* Trimestral */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6 min-w-full md:h-min">
        <Plan
          nombre={"Esencial"}
          precio="2.07"
          recursos={[
            { nombre: "Almacenamiento", valor: "10 GB SSD" },
            { nombre: "Sitios", valor: "1" },
            { nombre: "Ancho de banda", valor: "100 Gb" },
            { nombre: "Email", valor: "1 cuenta" },
          ]}
          herramientas={[
            "SSLL gratuito",
            "cPanel",
            "LiteSpeed Cache",
            "1-click install",
          ]}
        />

        <Plan
          nombre={"Esencial"}
          precio="2.07"
          recursos={[
            { nombre: "Almacenamiento", valor: "10 GB SSD" },
            { nombre: "Sitios", valor: "1" },
            { nombre: "Ancho de banda", valor: "100 Gb" },
            { nombre: "Email", valor: "1 cuenta" },
          ]}
          herramientas={[
            "SSLL gratuito",
            "cPanel",
            "LiteSpeed Cache",
            "1-click install",
          ]}
        />

        <Plan
          nombre={"Esencial"}
          precio="2.07"
          recursos={[
            { nombre: "Almacenamiento", valor: "10 GB SSD" },
            { nombre: "Sitios", valor: "1" },
            { nombre: "Ancho de banda", valor: "100 Gb" },
            { nombre: "Email", valor: "1 cuenta" },
          ]}
          herramientas={[
            "SSLL gratuito",
            "cPanel",
            "LiteSpeed Cache",
            "1-click install",
          ]}
        />
      </div>

      {/* Anual */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6 min-w-full md:h-min">
        <Plan
          nombre={"Esencial"}
          precio="2.07"
          recursos={[
            { nombre: "Almacenamiento", valor: "10 GB SSD" },
            { nombre: "Sitios", valor: "1" },
            { nombre: "Ancho de banda", valor: "100 Gb" },
            { nombre: "Email", valor: "1 cuenta" },
          ]}
          herramientas={[
            "SSLL gratuito",
            "cPanel",
            "LiteSpeed Cache",
            "1-click install",
          ]}
        />

        <Plan
          nombre={"Esencial"}
          precio="2.07"
          recursos={[
            { nombre: "Almacenamiento", valor: "10 GB SSD" },
            { nombre: "Sitios", valor: "1" },
            { nombre: "Ancho de banda", valor: "100 Gb" },
            { nombre: "Email", valor: "1 cuenta" },
          ]}
          herramientas={[
            "SSLL gratuito",
            "cPanel",
            "LiteSpeed Cache",
            "1-click install",
          ]}
        />

        <Plan
          nombre={"Esencial"}
          precio="2.07"
          recursos={[
            { nombre: "Almacenamiento", valor: "10 GB SSD" },
            { nombre: "Sitios", valor: "1" },
            { nombre: "Ancho de banda", valor: "100 Gb" },
            { nombre: "Email", valor: "1 cuenta" },
          ]}
          herramientas={[
            "SSLL gratuito",
            "cPanel",
            "LiteSpeed Cache",
            "1-click install",
          ]}
        />
      </div>
    </div>
  );
}
