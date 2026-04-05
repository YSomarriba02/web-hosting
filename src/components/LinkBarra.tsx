import { type LucideIcon } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

interface props {
  text: string;
  link: string;
  Icon: LucideIcon;
}
export default function LinkBarra({ Icon, link, text }: props) {
  const location = useLocation();
  return (
    <Link
      to={link}
      className={`p-2 rounded-3xl flex flex-col items-center ${location.pathname == link ? "flex-[3] bg-[#cfcfcf5b]" : "flex-1"} transition-[flex-grow,background] duration-200 ease-in-out`}
    >
      <Icon className="size-5" />
      <span className="text-[10px]">{text}</span>
    </Link>
  );
}
