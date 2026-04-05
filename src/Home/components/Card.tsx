import ButtonInicioRapido from "./ButtonInicioRapido";

interface props {
  image: string;
  title: string;
  text: string;
}
export default function Card({ image, text, title }: props) {
  return (
    <div className="rounded-3xl p-4 min-h-[calc(100vh-30vh)]  bg-slate flex flex-col items-center gap-2 overflow-hidden md:p-8 lg:flex-row-reverse lg:gap-10 lg:even:flex-row">
      <div className="flex h-1/2 rounded-3xl overflow-clip mask-[linear-gradient(to_bottom,black_70%,transparent)] md:h-[50vh] lg:justify-center lg:w-full">
        <img src={image} className="h-full aspect-square lg:rounded-4xl" />
      </div>
      <div className="h-1/2 flex flex-col gap-6 items-center justify-center text-center md:h-max lg:w-full lg:text-start lg:items-start">
        <h3 className="text-4xl font-semibold md:text-5xl">{title}</h3>
        <p className="text-lg md:text-2xl brightness-75 lg:text-3xl">{text}</p>
        <ButtonInicioRapido />
      </div>
    </div>
  );
}
