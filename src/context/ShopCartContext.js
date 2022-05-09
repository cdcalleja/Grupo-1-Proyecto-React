
import {createContext, useState} from "react";


const shopCartContext = createContext();

const ShopCartProvider = ({children}) => {

    // seteamos el contador del carrito a 0 con useState
    const [cartCount, setCartCount] = useState(0);
    // seteamos cartInfo a un array vacio
    const [cartInfo, setCartInfo] = useState([]);
    // seteamos cartPrice a 0
    const [cartPrice, setCartPrice] = useState(0)


//    Additem realiza lo siguiente: primero pasas desestructurando el id, el nombre y el precio del los productos que vas a mapear con
// posterioridad en el componente carrito (ver linea 56 de Carrito.jsx) entonces, seteas el contador de items del carrito sumandole uno al valor
// inicial del useState de 0, en cartInfo haces spread operator (...) de cartInfo para que posteriormente agregue el id, name y pricenew del elemento 
// de la lista de productos que desees agregar. En setCartPrice a cartPrice (que en use state lo inicializamos en 0) le vas a sumar el price new del elemento que agregaste


    const addItem = ({id, name, pricenew}) => 
    {setCartCount(cartCount + 1);
     setCartInfo([...cartInfo,{id, name, pricenew}]);
     setCartPrice (cartPrice + pricenew);
}


// clearCart va a tener la funcion de retornar el estado del carrito a sus valores iniciale en todas sus funciones, por ello
// el setCartCount se setea a 0 al igual que el setCartPrice y el setCartInfo se resetea a su array vacio.

    const clearCart =() => {
        setCartCount(0);
        setCartPrice (0);
        setCartInfo([]);
    }


    // remove va a tener la funcion de eliminar un item del carrito (en este caso va a ser siempre el ultimo agregado), para ello de
    // cartInfo (el elemento que mapeamos en Carrito.jsx linea 56) usamos filter y pasamos id, name y pricenew desestructuradas haciendo
    // una arrowfunction que con pop elimine ese id, name y price new ultimos que se agregaron.
    // tambien seteamos el valor
    const remove = () => {
        cartInfo.filter (({id, name, pricenew}) => {
            cartInfo.pop (id, name, pricenew)
            setCartPrice (0);
            return setCartCount (cartCount - 1)
        }
        )
    }
    
 
    //   )} 
    // setCartCount(cartCount - 1);
// setCartCount(cartCount - 1);

    

    const data = {addItem, remove, cartCount, clearCart, cartInfo, cartPrice};

    return (
        <shopCartContext.Provider value={data}>{children}</shopCartContext.Provider> 
    )
}

export {
    ShopCartProvider
}
export default shopCartContext;