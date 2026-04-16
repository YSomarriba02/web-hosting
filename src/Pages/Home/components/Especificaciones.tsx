import Especificacion from "./Especificacion";

import { Lock } from "lucide-react";
import { Gauge } from "lucide-react";
import { HardDrive } from "lucide-react";
import { ShieldCheck } from "lucide-react";
import { Wifi } from "lucide-react";
import { Database } from "lucide-react";

export default function Especificaciones() {
  return (
    <section className="flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <h3 className="font-semibold text-3xl text-center">
          Especificaciones Técnicas Hosting Nicaragua
        </h3>
        <h4 className="font-normal text-lg text-center">
          Infraestructura de nivel empresarial para tu sitio web
        </h4>
      </div>
      <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
        <Especificacion
          Icon={HardDrive}
          nombre="Disco"
          texto="NVMe Gen 4 de alto rendimiento"
        />
        <Especificacion
          Icon={Gauge}
          nombre="Web Server"
          texto="Rendimiento optimizado para máxima velocidad"
        />
        <Especificacion
          Icon={Lock}
          nombre="SSL"
          texto="Certificado SSL gratuito con Let’s Encrypt y renovación automática"
        />
        <Especificacion
          Icon={ShieldCheck}
          nombre="Seguridad"
          texto="Firewall WAF + protección DDoS"
        />
        <Especificacion
          Icon={Wifi}
          nombre="Red"
          texto="Ancho de banda ilimitado"
        />
        <Especificacion
          Icon={Database}
          nombre="Bases de datos optimizadas"
          texto="Alto rendimiento para aplicaciones dinámicas"
        />
      </div>
    </section>
  );
}
