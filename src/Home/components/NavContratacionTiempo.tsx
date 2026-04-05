import ItemContratacionTiempo from "./ItemContratacionTiempo";

export type ContratacionTiempo = "Mensual" | "Trimestral" | "Anual";

const arrayContratacion: ContratacionTiempo[] = [
  "Mensual",
  "Trimestral",
  "Anual",
];

export default function NavContratacionTiempo() {
  return (
    <nav className="w-4/5 h-14">
      <ul className="w-full flex bg-(--color-item) text-sm gap-2 rounded-3xl">
        {arrayContratacion.map((tiempo) => {
          return <ItemContratacionTiempo contratacion={tiempo} key={tiempo} />;
        })}
      </ul>
    </nav>
  );
}
