import { BrowserRouter, Route, Routes } from "react-router-dom";
import Page from "../Home/Page";
export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Page />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
