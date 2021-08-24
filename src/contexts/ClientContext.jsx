import axios from 'axios';
import React from 'react';
import { useReducer } from 'react';
import { JSON_API } from '../helpers/constants';


export const clientContex = React.createContext()

const INIT_STATE = {
    products: null,
    paginatedPages: 1
}

const reducer = (state = INIT_STATE.payload, action) => {
    switch (action.type) {
        case "GET_PRODUCTS":
            return {
                ...state, products: action.payload.data,
                paginatedPages: Math.ceil(action.payload.headers["x-total-count"] / 5)
            }
    }
}


const ClientContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, INIT_STATE)

    const getProducts = async (history) => {
        const search = new URLSearchParams(window.location.search)
        search.set('_limit', 5)
        history ? history.push(`${history.location.pathname}?${search.toString()}`) : console.log(null);
        const data = await axios(`${JSON_API}?_limit=5&${window.location.search}`)
        console.log(data);
        dispatch({
            type: "GET_PRODUCTS",
            payload: data
        })
    }



    return (
        <>
            <clientContex.Provider value={{
                products: state.products,
                getProducts
            }}>
                {children}
            </clientContex.Provider>
        </>
    );
};

export default ClientContextProvider;