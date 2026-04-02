import ButtonInicioRapido from "./ButtonInicioRapido";

interface props {
  image: string;
  title: string;
  text: string;
}
export default function Card({ image, text, title }: props) {
  return (
    <div className="rounded-3xl p-4 pb-14 h-[calc(100vh-60%)]  bg-slate flex flex-col items-center gap-6 overflow-hidden">
      <div className="h-1/2 rounded-3xl overflow-clip mask-[linear-gradient(to_bottom,black_70%,transparent)]">
        <img src={image} className="h-full aspect-square" />
      </div>
      <div className="h-1/2 flex flex-col gap-6 items-center">
        <h3 className="text-4xl font-semibold text-center">{title}</h3>
        <p className="text-lg text-center">{text}</p>
        <ButtonInicioRapido />
      </div>
    </div>
  );
}
