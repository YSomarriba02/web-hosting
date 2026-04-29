import { useState } from "react";
import PanelNavegacionTablet from "./PanelNavegacionTablet";
import MenuHamburg from "./MenuHamburg";
import LinkDesktop from "./LinkDesktop";
import { Link } from "react-router-dom";
import { linksArray } from "../data/links";

export default function HeaderNav() {
  const [state, setState] = useState(false);

  return (
    <nav
      style={{ viewTransitionName: "no" }}
      className="relative z-10 p-2 px-6 bg-slate-800 rounded-2xl flex items-center gap-30 md:justify-between"
    >
      <Link to={"/"} className="flex gap-4 items-center">
        <img src="/icons/icon_fastucloud.png" alt="" className="size-10" />
        <p className="text-2xl font-semibold">Fastucloud</p>
      </Link>

      <div className="hidden lg:flex gap-3">
        {linksArray.map(({ link, text }, index) => (
          <LinkDesktop key={text} link={link} text={text} indice={index} />
        ))}
      </div>

      <MenuHamburg setState={setState} state={state} />
      <PanelNavegacionTablet isOpen={state} />
    </nav>
  );
}
