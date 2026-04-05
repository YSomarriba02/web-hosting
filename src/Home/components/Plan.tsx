import { Check } from "lucide-react";

interface recursos {
  nombre: string;
  valor: string;
}

interface props {
  nombre: string;
  precio: string;

  recursos: recursos[];
  herramientas: string[];
}

export default function Plan({
  nombre,
  precio,
  herramientas,
  recursos,
}: props) {
  return (
    <div className="bg-(--color-item) px-4 py-8 pb-6 flex flex-col gap-4 rounded-2xl last:col-span-full last:justify-self-center last:max-w-95 w-full lg:last:col-auto">
      <div>
        <h5 className="font-bold text-2xl">{nombre}</h5>
        <h5 className="font-bold text-2xl">${precio} </h5>
      </div>

      <div className="flex flex-col gap-0.5 w-full">
        {recursos.length > 0 &&
          recursos.map(({ nombre, valor }) => {
            return (
              <div className="flex w-full text-[12px]">
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
                <Check color="#0c81f5" size={14} />
                <span className="text-[12px]">{e}</span>
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
