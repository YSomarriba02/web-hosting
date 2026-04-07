import type { SetStateAction } from "react";

export default function MenuHamburg({
  state,
  setState,
}: {
  state: boolean;
  setState: React.Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div
      className="hidden md:flex lg:hidden relative w-10 flex-col justify-center gap-4"
      onClick={() => setState((prev) => !prev)}
    >
      <div
        className={`w-full h-1 bg-white ${state ? "rotate-40 -translate-y-1 translate-x-1" : "rotate-0"} transition-transform ease-in duration-200 origin-left rounded-2xl`}
      ></div>
      <div
        className={`w-full bg-white absolute ${state ? "opacity-0 h-0" : "opacity-100 h-1"} transition-all duration-150 ease-in`}
      ></div>
      <div
        className={`w-full h-1 bg-white ${state ? "rotate-318 translate-y-1 translate-x-1" : "rotate-360"} transition-transform ease-in duration-200 origin-left rounded-2xl`}
      ></div>
    </div>
  );
}
