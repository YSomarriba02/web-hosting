import { type Plan as IPlan } from "../data/Planes";
import { Check } from "lucide-react";
import BtnPlan from "./BtnPlan";

type props = IPlan & {
  tiempo: "mensual" | "trimestral" | "anual";
};

export default function Plan({
  nombre,
  precio,
  precioAnterior,
  tiempo,
  isPopular,
  herramientas,
  recursos,
}: props) {
  return (
    <div
      className={`relative bg-(--color-item) px-4 py-8 pb-6 flex flex-col gap-4 rounded-2xl last:col-span-full last:justify-self-center last:max-w-95 w-full lg:last:col-auto hover:brightness-125 hover:translate-y-3 transition-[filter,translate] duration-150 ease-out ${isPopular ? "border-2 border-blue-600" : ""} ${nombre === "Supreme" ? "border-2 border-yellow-300" : ""}`}
    >
      {isPopular && (
        <span className="absolute right-1 top-1 bg-blue-500 px-3 py-0.5 rounded-tr-xl font-medium text-sm">
          Más popular
        </span>
      )}
      <div>
        <h5
          className={`font-bold text-2xl ${nombre === "Supreme" ? "text-yellow-300" : ""}`}
        >
          {nombre}
        </h5>
        <h5 className="font-bold text-3xl">
          ${precio}{" "}
          <span className="text-sm brightness-75">
            {`/${tiempo}`}&nbsp;&nbsp;
          </span>
          {tiempo == "mensual" && (
            <span className="text-sm brightness-75 line-through">
              {precioAnterior}
            </span>
          )}
        </h5>
      </div>

      <div className="flex flex-col gap-0.5 w-full">
        {recursos.length > 0 &&
          recursos.map(({ nombre, valor }) => {
            return (
              <div key={nombre} className="flex w-full text-sm">
                <p className="brightness-75">{nombre}</p>
                <span className="ml-auto font-medium">{valor}</span>
              </div>
            );
          })}
      </div>

      <div className="flex flex-col gap-0.5">
        {herramientas.length > 0 &&
          herramientas.map((e, i) => {
            return (
              <div key={i} className="flex gap-2 items-center">
                <Check
                  size={14}
                  className={`text-[#0883ff] ${nombre === "Supreme" ? "text-amber-300" : ""}`}
                />
                <span className="text-sm font-medium">{e}</span>
              </div>
            );
          })}
      </div>
      <BtnPlan plan={nombre} precio={precio} tiempo={tiempo} />
    </div>
  );
}
