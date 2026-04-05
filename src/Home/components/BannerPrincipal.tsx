import BannerCard from "./BannerCard";
import ButtonInicioRapido from "./ButtonInicioRapido";

import { Clock } from "lucide-react";
import { Gauge } from "lucide-react";
import { GlobeLock } from "lucide-react";

export default function BannerPrincipal() {
  return (
    <div className="p-8 flex flex-col justify-around items-center gap-3.5 min-h-[calc(100vh-200px)] relative rounded-2xl overflow-hidden bg-[url('/imagenes/banner1.jpg')] bg-cover bg-no-repeat saturate-200 md:bg-[url('/imagenes/banner1_tablet.png')] bg-center md:gap-18 md:justify-center lg:h-[calc(100vh-200px)] lg:flex-row">
      <div className="flex flex-col gap-8">
        <p className="text-4xl text-center font-semibold lg:text-start lg:px-10 lg:text-5xl ">
          Impulsa tu vision
        </p>

        <footer className="hidden flex-col gap-4 md:px-10 md:gap-6 lg:flex">
          <p className="font-medium md:text-2xl brightness-75">
            Obtén alojamiento web räpido y confiablc desdc solo USD después de
            la prucba.
          </p>
          <ButtonInicioRapido />
        </footer>
      </div>

      <div className="w-full flex flex-col items-center gap-6 px-2">
        <BannerCard text="Built for speed" Icon={GlobeLock} />
        <BannerCard text="Built for speed" Icon={Gauge} />
        <BannerCard text="Built for speed" Icon={Clock} />
      </div>
      <footer className="flex flex-col items-center gap-4 md:px-10 md:gap-6 lg:hidden">
        <p className="text-center font-medium md:text-2xl">
          Obtén alojamiento web räpido y confiablc desdc solo USD después de la
          prucba.
        </p>
        <ButtonInicioRapido />
      </footer>
    </div>
  );
}
