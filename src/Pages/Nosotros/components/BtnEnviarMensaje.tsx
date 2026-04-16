import { SendHorizontal } from "lucide-react";

export default function BtnEnviarMensaje() {
  return (
    <button
      type="submit"
      className="w-full p-2 bg-(--color-cta) flex items-center justify-center gap-4 rounded-sm"
    >
      <span>Enviar mensaje</span>
      <SendHorizontal />
    </button>
  );
}
