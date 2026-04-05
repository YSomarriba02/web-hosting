import NavContratacionTiempo from "./NavContratacionTiempo";
import { ProviderContratacion } from "../context/contextContratacionTiempo";
import ListPlanes from "./ListPlanes";

export default function Planes() {
  return (
    <ProviderContratacion>
      <section className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <h3 className="font-semibold text-3xl text-center">
            Planes de Hosting Nicaragua
          </h3>
          <h4 className="font-normal text-lg text-center">
            Elige el plan perfecto para tu proyecto
          </h4>
        </div>
        <div className="flex flex-col items-center w-full gap-4">
          <NavContratacionTiempo />
          <ListPlanes />
        </div>
      </section>
    </ProviderContratacion>
  );
}
