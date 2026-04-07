import { BrowserRouter } from "react-router-dom";
import BarraNavegacionMovil from "./components/BarraNavegacionMovil";
import HeaderNav from "./components/HeaderNav";
import Router from "./Router/Router";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <main>
        <div className="bg-(--color-base) text-(--color-text) p-8 pb-30 px-6 flex flex-col gap-8 overflow-x-hidden md:p-18 lg:p-24 lg:pt-8">
          <HeaderNav />
          <div className="min-h-screen">
            <Router></Router>
          </div>

          <BarraNavegacionMovil />
          <Footer />
        </div>
      </main>
    </BrowserRouter>
  );
}

export default App;
