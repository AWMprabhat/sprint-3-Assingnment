import { useContext, createContext, useState } from "react";
import { AuthContext } from "./AuthContext";

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [counter, setCounter] = useState(0);
    const {isAuthorized} = useContext(AuthContext);
    
    const addToCart = (value) => {
        setCounter(counter+value);
    }
    
    const buy = () => {
        if(isAuthorized) {
            console.log("Can buy");
        } else {
            console.log("Cannot buy");
        }
    }

    return(
        <CartContext.Provider value={{addToCart, buy, counter}}>
            {children}
        </CartContext.Provider>
    )
}