import {
    createContext,
    useState
} from "react";
import {
    ofertasDB
} from "../data/ofertas";
// import { ofertasDB } from "../data/ofertas";

const shopCartContext = createContext();
const initialCart = [ofertasDB];


const ShopCartProvider = ({children}) => {

    // seteamos el contador del carrito a 0 con useState
    const [cartCount, setCartCount] = useState(0);

    const add = () => setCartCount(cartCount + 1);
    
    const remove = () => setCartCount(cartCount - 1);

    console.log(cartCount);
    console.log(add)


    const data = [add, remove, cartCount];

    return (
        <shopCartContext.Provider value={data}>{children}</shopCartContext.Provider> 
    )
}

export {
    ShopCartProvider
}
export default shopCartContext;