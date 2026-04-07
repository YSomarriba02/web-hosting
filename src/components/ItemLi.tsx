import type typeItemLi from "../types/ItemLi";

type props = typeItemLi & { index: number };

export default function ItemLi({ title, text, segmentos, index }: props) {
  const body = text ? (
    <p className="text-[14px] brightness-75">{text}</p>
  ) : (
    <ul className="">
      {segmentos?.map((e) => (
        <li className="text-[14px] list-disc list-inside brightness-75">{e}</li>
      ))}
    </ul>
  );
  return (
    <li>
      <h2 className="font-semibold text-[20px]">{`${index}.${title}`}</h2>
      {body}
    </li>
  );
}
