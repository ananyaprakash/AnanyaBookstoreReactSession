import {ShoppingCartItem, BookItem} from "../types";
import {Dispatch, ReducerAction} from "react";


export const CartTypes = {
    ADD: 'ADD',
    REMOVE: 'REMOVE',
    CLEAR:'CLEAR'
};

export type AppActions = {
    id:number;
    type: 'ADD' | 'REMOVE'  | 'CLEAR';
    item: BookItem;
}
export const cartReducer = (state:ShoppingCartItem[], action:AppActions) => {
    switch (action.type) {
        case CartTypes.ADD:
            const itemInCart= state.find((cartItem)=> cartItem.id === action.id);

            if(itemInCart) {
                return state.map((cartItem) => cartItem.id === action.id ? {
                        ...cartItem, quantity: cartItem.quantity + 1
                    } : cartItem
                );
            }
            else{
                return [...state, {id: action.id, items: action.item, quantity: 1}];

                }

            /*
                The following only added the item in the cart for the first time with quantity 1.
                You have to handle the increment of the quantity if the item
                is already in the cart
              */

        case CartTypes.REMOVE:
            /*
               will be defiend in Project 7
             */
            return ;
        case CartTypes.CLEAR:
            return ;    // will be defined in Project 7
        default:
            throw new Error(`Invalid action type ${action.type}`);
    }
};