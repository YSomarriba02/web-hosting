import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-(--color-base2) text-gray-300 rounded-sm">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Marca */}
          <div>
            <h2 className="text-xl font-bold text-white">Hosting</h2>
            <p className="mt-4 text-sm">
              Soluciones de hosting rápidas, seguras y confiables para tu
              negocio online.
            </p>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="text-white font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  Hosting Web
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white">
                  Dominios
                </a>
              </li>
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h3 className="text-white font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  Sobre nosotros
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Contacto
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Soporte
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/terminos" className="hover:text-white">
                  Términos y condiciones
                </Link>
              </li>
              <li>
                <Link to="/privacidad" className="hover:text-white">
                  Política de privacidad
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="hover:text-white">
                  Política de cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Hosting. Todos los derechos reservados.
          </p>

          {/* Redes */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">
              Facebook
            </a>
            <a href="#" className="hover:text-white">
              Twitter
            </a>
            <a href="#" className="hover:text-white">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
