import React, { createContext, useContext, useState } from "react";
import type { ContratacionTiempo } from "../../Planes/components/NavContratacionTiempo";

interface contextContratacion {
  contratacionTiempo: ContratacionTiempo;
  handlerContratacionTiempo: (timepo: ContratacionTiempo) => void;
}

const contextContratacion = createContext<contextContratacion | null>(null);

export function ProviderContratacion({
  children,
}: {
  children: React.ReactNode;
}) {
  const [contratacion, setContratacion] =
    useState<ContratacionTiempo>("Mensual");

  function handlerContratacion(tiempo: ContratacionTiempo) {
    console.log(`El contexto anterior es ${contratacion}`);
    setContratacion(tiempo);
  }
  return (
    <contextContratacion.Provider
      value={{
        contratacionTiempo: contratacion,
        handlerContratacionTiempo: handlerContratacion,
      }}
    >
      {children}
    </contextContratacion.Provider>
  );
}

export function useContextContratacion() {
  const context = useContext(contextContratacion);
  if (!context)
    throw new Error("Debe de proporcionar un contexto para usar este hook");
  return context;
}
