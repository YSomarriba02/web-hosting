import BannerCard from "./BannerCard";
import ButtonInicioRapido from "./ButtonInicioRapido";

import { Clock } from "lucide-react";
import { Gauge } from "lucide-react";
import { GlobeLock } from "lucide-react";

export default function BannerPrincipal() {
  return (
    <div className="p-8 flex flex-col items-center gap-3.5 h-[calc(100vh-200px)] relative rounded-2xl overflow-hidden bg-[url('/imagenes/banner1.jpg')] bg-cover bg-no-repeat saturate-200">
      <p className="block text-4xl text-center font-semibold">
        Impulsa tu vision
      </p>

      <div className="mt-auto w-full flex flex-col gap-1.5">
        <BannerCard text="Built for speed" Icon={GlobeLock} />
        <BannerCard text="Built for speed" Icon={Gauge} self="self-end" />
        <BannerCard text="Built for speed" Icon={Clock} />
      </div>
      <footer className="flex flex-col items-center gap-1">
        <p className="text-center font-medium">
          Obtén alojamiento web räpido y confiablc desdc solo USD después de la
          prucba.
        </p>
        <ButtonInicioRapido />
      </footer>
    </div>
  );
}
