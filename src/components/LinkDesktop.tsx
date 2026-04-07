import { Link, useLocation } from "react-router-dom";

interface props {
  text: string;
  link: string;
}
export default function LinkDesktop({ link, text }: props) {
  const location = useLocation();
  return (
    <Link
      to={link}
      className={`font-medium text-[15px] transition-all duration-100 ease-in ${location.pathname == link ? "text-shadow-2xs text-shadow-amber-50 text-[17px]" : ""}`}
    >
      <span className="">{text}</span>
    </Link>
  );
}
