import { createContext, useContext, useState } from "react";

interface Acordion {
  idActual: number;
  handlerId: (id: number) => void;
}

const contextAcordio = createContext<Acordion | null>(null);

export function AcordionProvider({ children }: { children: React.ReactNode }) {
  const [idActual, setId] = useState(-1);
  function handlerId(id: number) {
    setId((prev) => (prev === id ? -1 : id));
  }
  return (
    <contextAcordio.Provider value={{ idActual, handlerId }}>
      {children}
    </contextAcordio.Provider>
  );
}

export function useContextAcordio() {
  const contex = useContext(contextAcordio);
  if (!contex)
    throw new Error(
      "Debe proporcionar un contexto para usar useContextAcordio",
    );
  return contex;
}
