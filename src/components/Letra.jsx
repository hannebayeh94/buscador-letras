import React from "react";
import useLetras from "../hooks/useLetras";

const Letra = () => {
  const { letra, cargando } = useLetras();

  return cargando ? "cargando..." : <div className="letra">{letra}</div>;
};

export default Letra;
