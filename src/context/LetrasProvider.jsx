import axios from "axios";
import React from "react";
import { useState } from "react";
import { createContext } from "react";

const LetrasContext = createContext();

const LetrasProvider = ({ children }) => {
  const [alerta, setAlerta] = useState(false);
  const [letra, setLetra] = useState("");
  const [cargando, setCargando] = useState(false);

  const busquedaLetra = async (busqueda) => {
    setCargando(true);

    try {
      const { artista, cancion } = busqueda;
      const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
      const { data } = await axios.get(url);
      setLetra(data.lyrics);
      setAlerta("");
    } catch (error) {
      setAlerta("Cancion no encontrada");
    }

    setCargando(false);
  };

  return (
    <LetrasContext.Provider
      value={{
        alerta,
        setAlerta,
        busquedaLetra,
        letra,
        cargando,
      }}
    >
      {children}
    </LetrasContext.Provider>
  );
};

export { LetrasProvider };

export default LetrasContext;
