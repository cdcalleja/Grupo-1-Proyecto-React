
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


    const addItem = ({id, name, price, quantity}) => {
        let duplicate = cartInfo.find((item) => item.id === id);
        console.log(duplicate);
        if (duplicate !== undefined) {
            const indexOfDuplicate = cartInfo.findIndex((producto) => producto.id === id);
            const newQuantity = (duplicate.quantity += quantity);
            cartInfo.splice(indexOfDuplicate, 1, {id, name, price, quantity: newQuantity})
            setCartPrice (cartPrice + (quantity * price));
        } else {
            setCartInfo([...cartInfo,{id, name, price, quantity}]);
            setCartCount((cc)=> cc + 1);
            // setCartCount((cc)=> cc + 1);
            setCartPrice (cartPrice + (quantity * price));
        }
    }

    //  const exist = cartInfo.find ((x) => x.id === id);
    //  if (exist) {
    //      setCartInfo(cartInfo.map ((x) => x.id === id ? {...exist, qty: exist.qty +1} : x));
    //  } else {
    //      setCartInfo ([...cartInfo, {...id, qty: 1}])
    //  }
     
//      setCartPrice (cartPrice + pricenew);
//      setCartInfo([...cartInfo,{id, name, pricenew}]);
// }


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
    // tambien seteamos el valor de setCartPrice (revisar un tema que no estaria restando bien siempre)
    // finalmente el cartCount resta en 1

    const remove = () => {
        cartInfo.filter (({id, name, pricenew}) => {
            cartInfo.pop (id, name, pricenew)
            setCartPrice (cartPrice - pricenew);
            return setCartCount (cartCount - 1)
        }
        )
    }
    
    // const remove = ({id}) => {
    //     let temp = cartInfo.filter (item => item.id !== id);
    //     setCartInfo(temp);
    //     setCartCount (cartCount - 1) 
    // }

//     const borrarProducto = (index) => {
//         let temporal = carrito.filter(item => item.id !== index);
//         setCarrito(temporal);
//         setItems(items -1)
//     }
// Axel Mullins19:05
// --------------------------
// En el componente
// onClick={ () => borrarProducto(item.id) }

    
   const data = {addItem, remove, cartCount, clearCart, cartInfo, cartPrice};

    return (<shopCartContext.Provider value={data}>{children}</shopCartContext.Provider>)
}

export {ShopCartProvider}
export default shopCartContext;