
import { createContext, useState } from "react";

const shopCartContext = createContext();

const ShopCartProvider = ({ children }) => {

    const [cartInfo, setCartInfo] = useState([])

    const [cartCount, setCartCount] = useState(0)

    const [cartPrice, setCartPrice] = useState(0)


    const addItem = ({ id, name, price, quantity }) => {

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



        // const exist = cartItem.find((x) => x.id === producto.id)

        // if(exist) {
        //     setCartItem(cartItem.map((x) => x.id === producto.id ? {...exist, amount: exist.amount + 1 } : x))
        // }else{
        //     setCartItem([...cartItem, {...producto, amount: 1}])
        // }

    

    const remove = (index) => {
        let itemToDelete = cartInfo.filter(item => item.id !== index);

      setCartInfo(itemToDelete)
      setCartCount(cartCount - 1)
    }

    const clearCart = () => {

        setCartCount(0);
        setCartPrice(0);
        setCartInfo([]);

    }

    const data = { addItem, cartInfo, remove, clearCart, cartCount, cartPrice };

    return (
        <shopCartContext.Provider value={data}>
            {children}
        </shopCartContext.Provider>
    )

};

export default shopCartContext;

export { ShopCartProvider };

