import axios from 'axios';
import React from 'react';
import { useReducer } from 'react';
import { calcSubPrice, calcTotalPrice } from '../helpers/CalcPrice';
import { JSON_API } from '../helpers/constants';


export const clientContex = React.createContext()

const INIT_STATE = {
    products: null,
    paginatedPages: 1,
    wish: [],

}

const reducer = (state = INIT_STATE.payload, action) => {
    switch (action.type) {
        case "GET_PRODUCTS":
            return {
                ...state, products: action.payload.data,
                paginatedPages: Math.ceil(action.payload.headers["x-total-count"] / 8)
            }
        case "CHANGE_WISH_COUNT":
            return { ...state, wishLength: action.payload }
        case "GET_WISH":
            return { ...state, wish: action.payload }
        default:
            return state
    }
}


const ClientContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, INIT_STATE)

    const getProducts = async (history) => {
        const search = new URLSearchParams(window.location.search)
        search.set('_limit', 8)
        history ? history.push(`${history.location.pathname}?${search.toString()}`) : console.log(null);
        const data = await axios(`${JSON_API}?_limit=8&${window.location.search}`)
        console.log(data);
        dispatch({
            type: "GET_PRODUCTS",
            payload: data
        })
    }

    const addProductInWish = (product) => {
        let wish = JSON.parse(localStorage.getItem("wish"))
        if (!wish) {
            wish = {
                products: [],
                totalPrice: 0
            }
        }

        let newProduct = {
            item: product,
            count: 1,
            subPrice: 0,
        }

        let filteredWish = wish.products.filter(elem => elem.item.id === product.id)
        if (filteredWish.length === 0) {
            wish.products.push(newProduct)
        } else {
            wish.products = wish.products.filter(elem => elem.item.id !== product.id)
        }
        newProduct.subPrice = calcSubPrice(newProduct)
        wish.totalPrice = calcTotalPrice(wish.products)
        localStorage.setItem('wish', JSON.stringify(wish))
        dispatch({
            type: "CHANGE_WISH_COUNT",
            payload: wish.products.length
        })



    }
    const getWishLength = () => {
        let wish = JSON.parse(localStorage.getItem('wish'))
        if (!wish) {
            wish = {
                products: [],
                totalPrice: 0
            }
        }
        dispatch({
            type: "CHANGE_WISH_COUNT",
            payload: wish.products.length
        })
    }

    const getWish = () => {
        let wish = JSON.parse(localStorage.getItem('wish'))
        if (!wish) {
            localStorage.setItem('wish', JSON.stringify({
                products: []
            }))
            wish = {
                products: [],
                totalPrice: 0
            }
        }
        dispatch({
            type: "GET_WISH",
            payload: wish
        })
    }

    const changeProductCount = (count, id) => {
        let wish = JSON.parse(localStorage.getItem('wish'))
        wish.products = wish.products.map(elem => {
            if (elem.item.id === id) {
                elem.count = count
                elem.subPrice = calcSubPrice(elem)
            }
            return elem
        })
        wish.totalPrice = calcTotalPrice(wish.products)
        localStorage.setItem('cart', JSON.stringify(wish))
        getWish()
    }

    const checkProductInWish = (id) => {
        let wish = JSON.parse(localStorage.getItem('wish'))
        if (!wish) {
            wish = {
                products: [],
                totalPrice: 0
            }
        }
        let newWish = wish.products.filter(elem => elem.item.id === id)
        return newWish.length > 0 ? true : false
    }


    return (
        <>
            <clientContex.Provider value={{
                products: state.products,
                paginatedPages: state.paginatedPages,
                wish: state.wish,
                wishLength: state.wishLength,
                getProducts,
                addProductInWish,
                getWishLength,
                getWish,
                changeProductCount,
                checkProductInWish
            }}>
                {children}
            </clientContex.Provider>
        </>
    );
};

export default ClientContextProvider;