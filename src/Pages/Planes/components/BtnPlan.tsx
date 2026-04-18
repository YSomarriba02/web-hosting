interface props {
  plan: string;
  tiempo: string;
  precio: string;
}

export default function BtnPlan({ plan, tiempo, precio }: props) {
  const mensaje = encodeURIComponent(
    `Hola\n\n` +
      `Me interesa el Plan de hosting ${plan}.\n\n` +
      `• Plan: ${plan}\n` +
      `• Precio ${tiempo}: $${precio}\n\n` +
      `Quedo atento a su respuesta. ¡Gracias!`,
  );
  return (
    <a
      target="_blank"
      href={`https://wa.me/50586556140?text=${mensaje}`}
      className="mt-auto bg-(--color-cta) text-center p-2.5 rounded-sm hover:opacity-90 hover:scale-[98%] transition-[background,scale] ease-initial duration-100"
    >
      Comienza ahora
    </a>
  );
}
