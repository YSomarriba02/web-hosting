import BannerPrincipal from "./components/BannerPrincipal";
import Card from "./components/Card";
import Especificaciones from "./components/Especificaciones";
import Planes from "./components/Planes";

export default function Page() {
  return (
    <div className="flex flex-col gap-16">
      <BannerPrincipal />
      <section className="flex flex-col gap-6">
        <Card
          image="/imagenes/img1.jpg"
          title="Lanza a gran velocidad"
          text={`Lanza tu sitio web räpido y
fåcllmente en una Infraestructura de
alojamiento potente.`}
        />
        <Card
          image="/imagenes/img2.jpg"
          title="99.9% uptime"
          text={`Infraestructura y red optimizada
para garantizar que tu sitio web esté
siempre disponible sin interrupciones.`}
        />
        <Card
          image="/imagenes/img3.jpg"
          title="Hospeda con confianza"
          text={`Cuenta con un 99.99% de tiempo en
linea y centros de datos globales en
EE.UU., Asia, Europa y el Reino
Unido.`}
        />
      </section>
      <Especificaciones />
      <Planes />
    </div>
  );
}
