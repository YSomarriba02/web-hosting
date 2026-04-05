import { BrowserRouter, Route, Routes } from "react-router-dom";
import Page from "../Home/Page";
import Planes from "../Planes/Page";
import Nosotros from "../Nosotros/Page";
import Ajustes from "../Ajustes/Page";
export default function Router() {
  return (
    <Routes>
      <Route index element={<Page />}></Route>
      <Route path="/planes" element={<Planes />} />
      <Route path="/nosotros" element={<Nosotros />} />
      <Route path="/ajustes" element={<Ajustes />} />
    </Routes>
  );
}
