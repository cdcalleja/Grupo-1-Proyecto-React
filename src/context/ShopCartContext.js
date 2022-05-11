
import {createContext, useState} from "react";


const shopCartContext = createContext();

const ShopCartProvider = ({children}) => {

    // seteamos el contador del carrito a 0 con useState
    const [cartCount, setCartCount] = useState(0);
    // seteamos cartInfo a un array vacio
    const [cartInfo, setCartInfo] = useState([]);
    // seteamos cartPrice a 0
    const [cartPrice, setCartPrice] = useState(0)


// Add item va a cumplir varias funciones: se le pasa desestructuring los parametros que queres usar en este caso id, name, price y quantity
// estos parametros vienen dados de la linea 65 del componente emergente que a su vez recibe id, pricenew y name del componente padre (productos),
// donde se realiza el mapeo de la lista a mostrar en el slider, mientras que quantity se equipara en la misma linea al contador de cantidad de items.
// dentro del addItem generamos una variable (duplicate) que va a hacer un find al cartInfo (el state que es lo que agrega los items al carrito que se inicializa como array vacio)
// que va a buscar todos los id de los items que se repitan y guardarlos en la variable dudplicate.
// realizamos un if que si duplicate no es igual a undefined (es decir que esta definido porque ya existe), 
// creamos una nueva variable (indexOfDuplicate) que en el cart Info hace un findIndex que nos permite buscar el indice de un producto 
// en este caso que sea igual al id. cuando esto ded true creamos una nueva variable (newQuantity) que va a ser igual a la variable
// duplicate.quantity que sea += a quantity para que conozcamos la cantidad de elementos del mismo id que agregamos al carrito.
// en tercera instancia hacemos un splice al cartInfo para que usando el indexOfDuplicate (el primer valor que se pasa es el punto
// de partida para eliminar), el segundo valor en este caso 1 indica la cantidad de elementos a eliminar y en el tercer parametro
// se  pasa la nueva lista con la cantidad de elementos a a gregar equiparando quantity a new quantity
// finalmente seteamos el cartPrice(que inicializa en 0) a que sea la multiplicacion de lcantidad de items agregados por el precio
// el cartCount cumple la funcionalidad de mostrar la cantidad de items que se agregan al carrito
// en el Else lo que hace es que cuando encuentra un undefined (es decir un elemento nuevo para agregar al cartInfo) simplemente le
// agregamos esa info al cartIndo mediante el spreadoperator (...) y pasandole el id, name, price y quantity.
// y seteamos el cartPrice igual que en el otro caso posible.

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
    
            setCartPrice (cartPrice + (quantity * price));
        }
    }
    


    // remove va a hacer un filter del cartInfo 
    const remove = (index) => {
        let itemToDelete = cartInfo.filter(item => item.id !== index);        
        console.log(itemToDelete)
        setCartInfo(itemToDelete)
        setCartCount(cartCount - 1)
        // setCartPrice(cartPrice - priceToRest)
        // setCartPrice ((prevState) => ([...cartPrice, {prevState}]))
       }


// clearCart va a tener la funcion de retornar el estado del carrito a sus valores iniciale en todas sus funciones, por ello
// el setCartCount se setea a 0 al igual que el setCartPrice y el setCartInfo se resetea a su array vacio.

    const clearCart =() => {
        setCartCount(0);
        setCartPrice (0);
        setCartInfo([]);
    }

    let totalPrice = cartInfo.map((item) => totalPrice += item.price);


   const data = {addItem, remove, cartCount, clearCart, cartInfo, cartPrice};

    return (<shopCartContext.Provider value={data}>{children}</shopCartContext.Provider>)
}

export {ShopCartProvider}
export default shopCartContext;