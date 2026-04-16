import type { LucideIcon } from "lucide-react";

interface props {
  Icon: LucideIcon;
  nombre: string;
  valor: string;
}

export default function ItemIcon({ Icon, nombre, valor }: props) {
  return (
    <li className="w-max flex justify-center items-center gap-2">
      <Icon className="box-content rounded-sm p-2 text-blue-500 size-5 bg-[#0a1622] md:size-7" />
      <div className="flex flex-col">
        <p className="text-sm font-medium md:text-lg">{nombre}</p>
        <p className="text-[16px] brightness-75">{valor}</p>
      </div>
    </li>
  );
}
