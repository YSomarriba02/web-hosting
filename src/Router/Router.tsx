import { Route, Routes } from "react-router-dom";
import Page from "../Pages/Home/Page";
import Planes from "../Pages/Planes/Page";
import Nosotros from "../Pages/Nosotros/Page";
import Terminos from "../Pages/Terminos/Page";
import Privacidad from "../Pages/Privacidad/Page";
import Cookies from "../Pages/Cookies/Page";
import Web from "../Pages/DevWeb/Page";

export default function Router() {
  return (
    <Routes>
      <Route index element={<Page />}></Route>
      <Route path="/planes" element={<Planes />} />
      <Route path="/nosotros" element={<Nosotros />} />
      <Route path="web" element={<Web />} />
      <Route path="/terminos" element={<Terminos />} />
      <Route path="/privacidad" element={<Privacidad />} />
      <Route path="/cookies" element={<Cookies />} />
    </Routes>
  );
}
