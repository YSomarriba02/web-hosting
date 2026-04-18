interface props {
  plan: string;
  precioRecurrente: string;
  precio: string;
}

export default function BtnPlan({ plan, precioRecurrente, precio }: props) {
  const mensaje = encodeURIComponent(
    `Hola\n\n` +
      `Me interesa el Plan ${plan}.\n\n` +
      `• Plan: ${plan}\n` +
      `• Precio mensual: $${precioRecurrente}\n\n` +
      `• Precio setup: $${precio}\n\n` +
      `Quedo atento a su respuesta. ¡Gracias!`,
  );
  return (
    <a
      target="_blank"
      href={`https://wa.me/50586556140?text=${mensaje}`}
      className="w-full text-center mt-auto bg-(--color-cta) hover:bg-blue-500 text-white py-2.5 rounded-lg font-medium transition-all shadow-md"
    >
      Inicia ahora
    </a>
  );
}
