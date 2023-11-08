import {createContext, Dispatch, ReactNode, useEffect, useReducer, useState} from "react";
import {AppActions, cartReducer,} from "../reducers/CartReducer";
import { ShoppingCartItem} from "../types";

const initialCartState:ShoppingCartItem[] =  []
export const CartStore = createContext<{
    cart: ShoppingCartItem[];
    dispatch: Dispatch<any>;
}>({
    cart: initialCartState,
    dispatch: () => null
});

interface CartContextProps {
    children: ReactNode;
}
export function CartContext ({ children }: CartContextProps)  {
    // cut/paste the categories code here from the App component
    const [cart, dispatch] = useReducer(
        cartReducer as (state: ShoppingCartItem[], action: AppActions) => ShoppingCartItem[],
        initialCartState
    );

    return (
        <CartStore.Provider value ={{cart, dispatch}}>
            {children}
        </CartStore.Provider>
    );
}
export default CartContext;