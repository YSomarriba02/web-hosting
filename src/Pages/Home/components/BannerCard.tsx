import type { LucideIcon } from "lucide-react";

interface props {
  Icon: LucideIcon;
  text: string;
  durationAnimation: number;
}

export default function BannerCard({ Icon, text, durationAnimation }: props) {
  return (
    <div
      style={{ animationDelay: `${durationAnimation}ms` }}
      className={`max-w-3/4 py-2 px-4 backdrop-blur-[2px] bg-[#9191912d] rounded-2xl border [box-shadow:2px_1px_6px_1px_#000f30] border-blue-500 flex flex-col justify-center md:py-4 first:flex-row first:gap-4 first:items-center first:translate-x-[30%] nth-2:-translate-x-[20%] [&:nth-child(2)_svg]:size-20 nth-3:translate-x-[30%] md:[&:nth-child(2)_svg]:size-24 lg:nth-2:bg-[#3d3d3d77] lg:nth-2:backdrop-blur-[6px] animate-entradaTextoBanner`}
    >
      <Icon className="size-8" />
      <span className="text-md font-medium">{text}</span>
    </div>
  );
}
