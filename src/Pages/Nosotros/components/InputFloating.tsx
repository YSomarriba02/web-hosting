import React, { useEffect, useRef, useState } from "react";

interface props {
  name: string;
  label: string;
}

export default function InputFloating({ name, label }: props) {
  const [state, setState] = useState<boolean>(false);
  const refInput = useRef<HTMLInputElement>(null);

  return (
    <div className="w-full relative flex items-center border border-slate-500 rounded-md">
      <label
        onMouseDown={(e) => {
          e.preventDefault();
          if (state) {
            refInput.current?.blur();
          } else {
            refInput.current?.focus();
          }
        }}
        className={`left-4 px-2 text-[16px] bg-(--color-item) absolute z-10 ${state ? "-translate-y-full text-blue-400 scale-85" : "translate-y-0"} transition-transform ease-initial duration-200`}
      >
        {label}
      </label>
      <input
        ref={refInput}
        name={name}
        type="text"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          const input = e.currentTarget;
          if (!input) {
            setState(false);
            return;
          }
          setState(true);
        }}
        onFocus={() => {
          setState(true);
        }}
        onBlur={() => {
          if (refInput.current?.value !== "") {
            return;
          }
          setState(false);
        }}
        className={`w-full p-2 rounded-md md:p-4 lg:p-2 ${state ? "outline outline-blue-500" : ""}`}
      />
    </div>
  );
}
