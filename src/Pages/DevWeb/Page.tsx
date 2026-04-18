import Hero from "./components/Hero";
import Planes from "./components/Planes";

export default function Page() {
  return (
    <div className=" flex flex-col gap-20">
      <Hero key={Date.now()} />
      <Planes />
    </div>
  );
}
