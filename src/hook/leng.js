import { useContext } from "react";
import { LengContext } from "../context/leng";

export const useLeng = () => {
    const context = useContext(LengContext);

    if (context === undefined) {
        console.log('context is undefined');
        
    }

    return context;
}