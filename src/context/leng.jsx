import { createContext, useState } from "react";
import dataEn from '../data/cv.json'
import dataEs from '../data/cvEs.json'

export const LengContext = createContext()

export const LengProvider = ({ children }) => {
    const [leng, setLeng] = useState(true); // Estado para manejar el idioma
    const [dataGen, setDataGen] = useState(dataEn);
    const toggleLanguage = () => {
      setLeng((prevLeng) => {
        const newLeng = !prevLeng;
        setDataGen(newLeng ? dataEn : dataEs); // Cambia los datos con base en el nuevo estado
        return newLeng;
      });
    };
  
    return (
      <LengContext.Provider value={{ 
        leng, 
        toggleLanguage, 
        dataGen 
      }}>
        {children}
      </LengContext.Provider>
    );
  };

