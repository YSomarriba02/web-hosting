import ItemIcon from "./components/ItemIcon";
import Questions from "./components/Questions";

import { Phone } from "lucide-react";
import { Mail } from "lucide-react";
import { Map } from "lucide-react";
import Formulario from "./components/Formulario";

export default function Page() {
  return (
    <div>
      <section className={`flex flex-col items-center gap-4 lg:px-[0vw] mb-20`}>
        <div
          className={`rounded-2xl overflow-hidden flex flex-col justify-center px-[5vw] h-[75vh] relative text-(--color-base) bg-[url('/imagenes/banner_contactanos2.jpg')] bg-no-repeat bg-cover bg-right  md:brightness-100 md:bg-position-[top,left]`}
        >
          <div className="w-full flex flex-col gap-10 lg:w-1/2 md:gap-4">
            <h2 className="text-(--color-text) w-full font-semibold text-[28px] md:text-4xl md:text-(--color-fondo) lg:w-[40vw]">
              Estamos aquí para ayudarle las 24 horas del dia, 7 dias a la
              semana.
            </h2>
            <h3 className="text-(--color-text) w-full text- text-lg md:text-(--color-fondo)">
              Todos nuestros asesores están capacitados y entusiasmados por
              trabajar contigo, ya sea que necesites ayuda para restablecer tu
              contraseña o estés buscando un equipo para crear tu presencia web
              completa.
            </h3>
          </div>
        </div>

        <div className="w-full lg:w-4/5 bg-(--color-item) flex flex-col gap-8 p-4 md:p-8">
          <div>
            <h3 className="text-3xl font-semibold md:text-4xl lg:text-3xl">
              Contactanos Ahora
            </h3>
            <p className="brightness-75">
              Estamos aquí para ayudarte. Contáctanos por cualquiera de estos
              medios.
            </p>
          </div>

          <div className="flex flex-col gap-10 lg:flex-row">
            <div className="w-full flex flex-col gap-6">
              <div>
                <h3 className="font-semibold text-lg md:text-2xl lg:text-[22px]">
                  Informacion de contacto
                </h3>
                <p className="text-sm brightness-75 md:text-lg lg:text-[16px]">
                  Nuestro equipo está disponible para asistirte de lunes a
                  viernes, de 9:00 a 18:00 (hora EST).
                </p>
              </div>

              <ul className="flex flex-col gap-3">
                <ItemIcon
                  key="Phone"
                  Icon={Phone}
                  nombre="Telefono"
                  valor="+505 888888"
                />
                <ItemIcon
                  key="Email"
                  Icon={Mail}
                  nombre="Email"
                  valor="Hosting@gmail.com"
                />
                <ItemIcon
                  key="Empresa"
                  Icon={Map}
                  nombre="Empresa"
                  valor="Managua, Nicaragua"
                />
              </ul>
            </div>

            <Formulario />
          </div>
        </div>
      </section>

      <Questions />
    </div>
  );
}
