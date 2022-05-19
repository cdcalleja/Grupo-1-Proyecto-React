
import {createContext, useState} from "react";


const shopCartContext = createContext();

const ShopCartProvider = ({children}) => {

    const [cartCount, setCartCount] = useState(0);
    const [cartInfo, setCartInfo] = useState([]);
    const [cartPrice, setCartPrice] = useState(0)



    const addItem = ({id, name, price, quantity}) => {
        let duplicate = cartInfo.find((item) => item.id === id);
        if (duplicate !== undefined) {
            const indexOfDuplicate = cartInfo.findIndex((producto) => producto.id === id);
            const newQuantity = (duplicate.quantity += quantity);
            cartInfo.splice(indexOfDuplicate, 1, {id, name, price, quantity: newQuantity})
            setCartPrice (cartPrice + (quantity * price));
        } else {
            setCartInfo([...cartInfo,{id, name, price, quantity}]);
            setCartCount((cc)=> cc + 1);
    
            setCartPrice (cartPrice + (quantity * price));
        }
    }
    
    const remove = (index) => {
        let itemToDelete = cartInfo.filter(item => item.id !== index);        
        setCartInfo(itemToDelete)
        setCartCount(cartCount - 1)
        // setCartPrice(cartPrice - priceToRest)
        // setCartPrice ((prevState) => ([...cartPrice, {prevState}]))
       }


    const clearCart =() => {
        setCartCount(0);
        setCartPrice (0);
        setCartInfo([]);
    }

    // let totalPrice = cartInfo.map((item) => totalPrice += item.price);


   const data = {addItem, remove, cartCount, clearCart, cartInfo, cartPrice};

    return (<shopCartContext.Provider value={data}>{children}</shopCartContext.Provider>)
}

export {ShopCartProvider}
export default shopCartContext;
