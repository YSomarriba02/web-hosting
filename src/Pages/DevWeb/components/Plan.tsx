import BtnPlan from "./BtnPlan";
import { type planWeb } from "../data/Planes";

interface props extends planWeb {}

export default function Plan({
  nombre,
  titulo,
  tiempo,
  precioRecurrente,
  setup,
  caracteristicas,
  tipo,

  isPopular,
}: props) {
  return (
    <div className="relative w-full last:col-span-full md:last:max-w-100 last:justify-self-center lg:last:col-auto nth-2:mt-8 md:nth-2:mt-0">
      {isPopular && (
        <span className="absolute w-3/4 h-40 -top-8 left-1/2 -translate-x-1/2 rounded-4xl text-center font-medium bg-(--color-cta) brightness-95">
          Mas popular
        </span>
      )}
      <div
        className={`w-full h-full relative flex flex-col rounded-4xl bg-linear-to-b from-neutral-800 to-neutral-900 p-6 shadow-lg border border-neutral-700 hover:border-blue-500 transition-all`}
      >
        <div className="absolute top-4 right-4 text-xs bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full">
          {tipo}
        </div>

        <h3 className="text-xl font-semibold text-white mb-2">{nombre}</h3>

        <p className="text-sm text-neutral-400 mb-4">{titulo}</p>

        <div className="mb-5">
          <span className="text-3xl font-bold text-white">
            ${precioRecurrente}
          </span>
          <span className="text-sm text-neutral-400 ml-1">/{tiempo}</span>

          <div className="text-xs text-neutral-500 mt-1">
            ${setup} pago inicial
          </div>
        </div>

        <ul className="space-y-2 mb-6 text-sm text-neutral-300">
          {caracteristicas.map((c, i) => (
            <li key={i}>✔ {c}</li>
          ))}
        </ul>

        <BtnPlan
          plan={nombre}
          precio={setup}
          precioRecurrente={precioRecurrente}
        />
      </div>
    </div>
  );
}
