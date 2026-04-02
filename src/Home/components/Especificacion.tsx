import type { LucideIcon } from "lucide-react";

interface props {
  Icon: LucideIcon;
  nombre: string;
  texto: string;
}
export default function Especificacion({ Icon, nombre, texto }: props) {
  return (
    <div className="px-4 py-8 flex items-center gap-4 bg-(--color-item) rounded-2xl">
      <div className="flex justify-center bg-[#16222e] p-3 h-max rounded-2xl">
        <Icon size={22} color="#0c84f9" />
      </div>
      <div className="w-full">
        <h4 className="font-medium text-lg">{nombre}</h4>
        <p>{texto}</p>
      </div>
    </div>
  );
}
