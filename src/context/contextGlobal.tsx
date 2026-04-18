import { createContext, useContext, useState } from "react";

interface IcontextPagina {
  paginaActual: number;
  paginaAnterior: number;
  handlePaginaActual: (linkCLicki: number) => void;
}

const contextPagina = createContext<IcontextPagina | null>(null);

export function ProviderContextPagina({
  children,
}: {
  children: React.ReactNode;
}) {
  const [indice, setIndice] = useState(3);
  const [indiceAnterior, setIndiceAnterior] = useState(0);

  function handlePaginaActual(linkClicki: number) {
    console.log(`Clickeado ${linkClicki}  anterior${indiceAnterior}`);
    setIndiceAnterior(indice);
    setIndice(linkClicki);
  }

  return (
    <contextPagina.Provider
      value={{
        handlePaginaActual,
        paginaActual: indice,
        paginaAnterior: indiceAnterior,
      }}
    >
      {children}
    </contextPagina.Provider>
  );
}

export function useContextPagina() {
  const context = useContext(contextPagina);

  if (!context) {
    throw new Error("Debe proveer un contexto para el provider");
  }
  return context;
}
