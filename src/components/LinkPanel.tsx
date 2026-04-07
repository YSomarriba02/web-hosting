import { type LucideIcon } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

interface props {
  text: string;
  link: string;
  Icon: LucideIcon;
}
export default function LinkPanel({ Icon, link, text }: props) {
  const location = useLocation();
  return (
    <Link
      to={link}
      className={`last:border-0 p-2 flex items-center gap-4 border-b border-b-slate-600 ${location.pathname == link ? "" : ""}`}
    >
      <Icon className="size-4" />
      <span className="text-lg">{text}</span>
    </Link>
  );
}
