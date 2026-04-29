const delayEntrada =
  "[calc(var(--delay-viewtransitionpage)+var(--time-viewtransitionpage))]";
export default function Hero() {

  return (
    <div className="flex flex-col gap-6 justify-center px-8 pt-[10%]  md:pt-[18%] md:px-18 h-[70vh] w-full bg-[url('/imagenes/hero_creamostuweb_movil.jpg')] bg-cover bg-no-repeat rounded-2xl lg:bg-[url('/imagenes/hero_creamostuweb.jpg')] lg:pt-[7%] lg:px-22">
      <div className="flex flex-col">
        <div className="flex flex-col gap-3 lg:gap-5">
          <h2
            className={`text-3xl font-semibold opacity-100 translate-y-0 starting:opacity-0 starting:-translate-y-[200%] transition-[opacity,translate] duration-200 ease-in delay-${delayEntrada} md:text-4xl lg:text-5xl`}
          >
            Nos encargamos de todo
          </h2>
          <h3
            className={`text-lg brightness-90 translate-y-0 opacity-100 starting:translate-y-full starting:opacity-0 transition-[opacity,translate] duration-200 ease-in delay-${delayEntrada} md:text-2xl lg:text-3xl`}
          >
            Tu solo enfocate en tu negocio
          </h3>
        </div>

        <div className="flex flex-col items-end">
          <span className="text-lg lg:text-2xl">Desde $19.99</span>
          <span className="text-lg font-medium md:text-2xl lg:text-3xl">
            Sin complicaciones
          </span>
        </div>

        <div>
          <p className="text-[16px] brightness-75 md:text-lg lg:text-[20px] lg:w-2/3">
            Tu enfoque está en tu negocio. Nosotros creamos, diseñamos,
            optimizamos y mantenemos tu página web para que funcione 24/7.
          </p>
        </div>
      </div>
      <a
        href="#planesweb"
        className="bg-(--color-cta) p-2 w-max rounded-2xl font-medium lg:p-4 lg:px-[6%]"
      >
        Crear mi web ahora
      </a>
    </div>
  );
}
