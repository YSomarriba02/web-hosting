import ItemLi from "../../components/ItemLi";
import { terminos } from "./data/Terminos";
export default function Page() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 ">
      <h1 className="text-3xl font-bold mb-6">Términos y Condiciones</h1>

      <p className="mb-4 brightness-75">Última actualización: 2026</p>

      <ol className="flex flex-col gap-3">
        {terminos.map(({ title, segmentos, text }, i) => (
          <ItemLi
            key={title}
            title={title}
            text={text}
            segmentos={segmentos}
            index={i + 1}
          />
        ))}
      </ol>
    </div>
  );
}
