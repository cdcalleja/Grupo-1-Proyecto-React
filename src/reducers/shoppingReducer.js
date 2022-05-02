import {
    TYPES
} from "../actions/shoppingActions";



export const shoppingInitialState = {
    products: [{
            id: 1,
            name: "Campera Polar",
            Promoprice: 8636
        },
        {
            id: 2,
            name: "Chaleco",
            Promoprice: 14604
        },
        {
            id: 3,
            name: "Camiseta Termica",
            Promoprice: 4275
        },
        {
            id: 4,
            name: "Camisa",
            Promoprice: 11421
        },
        {
            id: 5,
            name: "Chomba",
            Promoprice: 5348
        },
        {
            id: 6,
            name: "Remera",
            Promoprice: 4517
        },
        {
            id: 7,
            name: "Rompe Vientos",
            Promoprice: 25871
        },
        {
            id: 8,
            name: "Pantalon",
            Promoprice: 15100
        },
        {
            id: 9,
            name: "Zapatilla Running",
            Promoprice: 18198
        },
    ],
    cart: []
}



export function shoppingReducer(state, action) {
    switch (action.type) {
        case TYPES.ADD_TO_CART: {
        let newItem = state.products.find((product) => product.id === action.payload);
        console.log(newItem);

        return {
            ...state,
            cart:[...state.cart, newItem],
        };
        }
       

        case TYPES.REMOVE_ONE_FROM_CART: {

        }

        case TYPES.REMOVE_ALL_FROM_CART: {

        }

        case TYPES.CLEAR_CART: {

        }

        default:
            return state;
    }
}