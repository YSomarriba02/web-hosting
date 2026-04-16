import ListQuestions from "./ListQuestions";

export default function Questions() {
  return (
    <section className="flex flex-col gap-12 lg:px-[10vw]">
      <h2 className="text-[38px] font-medium md:text-3xl">
        Preguntas Frecuentes
      </h2>
      <ListQuestions />
    </section>
  );
}
