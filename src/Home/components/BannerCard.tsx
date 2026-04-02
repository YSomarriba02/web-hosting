import type { LucideIcon } from "lucide-react";

interface props {
  Icon: LucideIcon;
  text: string;
  self?: "self-end";
}

export default function BannerCard({ Icon, text, self }: props) {
  return (
    <div
      className={`p-2 w-1/2 backdrop-blur-[2px] bg-[#9191912d] rounded-2xl [box-shadow:2px_1px_6px_1px_#000f30] ${self}`}
    >
      <Icon size={30} />
      <span className="text-md">{text}</span>
    </div>
  );
}
