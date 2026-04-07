import { useState } from "react";
import PanelNavegacionTablet from "./PanelNavegacionTablet";
import MenuHamburg from "./MenuHamburg";
import LinkDesktop from "./LinkDesktop";

export default function HeaderNav() {
  const [state, setState] = useState(false);
  return (
    <nav className="relative p-2 px-6 bg-slate-800 rounded-2xl [box-shadow:1px_1px_6px_2px_white] flex items-center gap-30 md:justify-between">
      <div className="flex gap-4 items-center">
        <img src="/imagenes/logo.png" alt="" className="size-10" />
        <p className="text-2xl font-semibold">Hosting</p>
      </div>

      <div className="hidden lg:flex gap-3">
        <LinkDesktop link="/" text="Home" />
        <LinkDesktop link="/planes" text="Planes" />
        <LinkDesktop link="/nosotros" text="Contactanos" />
        <LinkDesktop link="/ajustes" text="Ajustes" />
      </div>

      <MenuHamburg setState={setState} state={state} />
      <PanelNavegacionTablet isOpen={state} />
    </nav>
  );
}
