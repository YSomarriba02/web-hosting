import { ChevronDown } from "lucide-react";
import type { Question as IQuestion } from "../data/questions";
import { useContextAcordio } from "../context/contextAcordionQuestion";
import { useEffect, useRef, useState } from "react";

type props = IQuestion & { id: number };

export default function Question({
  id,
  title,
  content,
  footer,
  header,
  segmentos,
}: props) {
  const context = useContextAcordio();
  const { idActual, handlerId } = context;
  const isOpen = idActual === id;

  const [height, setHeight] = useState("40px");
  const refTitle = useRef<HTMLDivElement>(null);
  const refBody = useRef<HTMLDivElement>(null);
  const body = content ? (
    <p className="">{content}</p>
  ) : (
    <div className="">
      <p>{header}</p>
      <ul className="px-8 pb-4">
        {segmentos?.map((item, i) => {
          return (
            <li className="list-disc" key={i}>
              {item}
            </li>
          );
        })}
      </ul>
      <p>{footer}</p>
    </div>
  );

  useEffect(() => {
    if (refTitle.current && refBody.current) {
      const close = refTitle.current.offsetHeight;
      const open =
        refTitle.current.offsetHeight + refBody.current.scrollHeight + 16;
      setHeight((_prev) => (isOpen ? `${open}px` : `${close}px`));
    }
  }, [isOpen, refBody]);

  return (
    <div
      onClick={() => handlerId(id)}
      style={{ height }}
      className={`relative rounded-2xl px-4 transition-[height,background] duration-300 ease-in-out flex flex-col ${isOpen ? "bg-(--color-item) before:opacity-0" : "before:opacity-100"} overflow-hidden before:absolute before:w-full before:h-px before:bottom-0  before:bg-gray-300`}
    >
      <div ref={refTitle} className="py-4 flex justify-between">
        <h4 className="md:text-lg">{title}</h4>
        <ChevronDown
          className={`transition-transform ease-out duration-150 ${isOpen ? "rotate-180" : ""}`}
        />
      </div>
      <div
        ref={refBody}
        className={`pb-2 brightness-95 ${isOpen ? "opacity-100" : "opacity-0"} transition-opacity duration-200 ease-in text-sm brightness-75 md:text-sm`}
      >
        {body}
      </div>
    </div>
  );
}
