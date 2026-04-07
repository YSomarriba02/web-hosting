import { questionsList } from "../data/questions";
import Question from "./Question";
import { AcordionProvider } from "../context/contextAcordionQuestion";

export default function ListQuestions() {
  return (
    <AcordionProvider>
      <div className="flex flex-col gap-2 md:gap-3">
        {questionsList.map(
          ({ title, content, footer, header, segmentos }, i) => (
            <Question
              key={i}
              id={i}
              title={title}
              content={content}
              header={header}
              segmentos={segmentos}
              footer={footer}
            />
          ),
        )}
      </div>
    </AcordionProvider>
  );
}
