import { type Plan as IPlan } from "../../Planes/data/Planes";
import { Check } from "lucide-react";

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
      className={`relative bg-(--color-item) px-4 py-8 pb-6 flex flex-col gap-4 rounded-2xl last:col-span-full last:justify-self-center last:max-w-95 w-full lg:last:col-auto ${isPopular ? "border-2 border-blue-600" : ""} ${nombre === "Supreme" ? "border-2 border-yellow-300" : ""}`}
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
              <div className="flex w-full text-sm">
                <p className="brightness-75">{nombre}</p>
                <span className="ml-auto font-medium">{valor}</span>
              </div>
            );
          })}
      </div>

      <div className="flex flex-col gap-0.5">
        {herramientas.length > 0 &&
          herramientas.map((e) => {
            return (
              <div className="flex gap-2 items-center">
                <Check
                  size={14}
                  className={`text-[#0883ff] ${nombre === "Supreme" ? "text-amber-300" : ""}`}
                />
                <span className="text-sm font-medium">{e}</span>
              </div>
            );
          })}
      </div>
      <button className="bg-(--color-cta) p-2.5 rounded-sm hover:opacity-90 hover:scale-[98%] transition-[background,scale] ease-initial duration-100">
        Comenzar
      </button>
    </div>
  );
}
