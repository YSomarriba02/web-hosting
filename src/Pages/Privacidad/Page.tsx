import ItemLi from "../../components/ItemLi";
import { privacidades } from "./data/privacidades";
export default function Privacidad() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">Política de Privacidad</h1>

      <p className="mb-4 brightness-75">Última actualización: 2026</p>

      <ol className="flex flex-col gap-3">
        {privacidades.map(({ title, text }, i) => (
          <ItemLi index={i + 1} title={title} text={text} />
        ))}
      </ol>
    </div>
  );
}
