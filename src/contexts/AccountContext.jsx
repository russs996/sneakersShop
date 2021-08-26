import axios from "axios"
import React, { useContext, useReducer } from "react"
import { AUTH_API } from "../helpers/constants"
// import { Auth } from "../components/Auth/Firebase"


export const accountContext = React.createContext()

const INIT_STATE = {}

export function useAuth() {
    return useContext(accountContext)
}

const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        default: return state
    }
}

const AccountContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE)

    async function registerUser(e, history) {
        e.preventDefault();
        const newUser = {
            email: e.target[4].value,
            password: e.target[6].value
        }
        try {
            const res = await axios.post(`${AUTH_API}/registration`, newUser)
            // console.log(res);
            if (res.data && res.data.token) {
                storeToken(res.data.token)
            }
            alert(res.status)
            history.push('/login')
        } catch (e) {
            // console.log(e.response);
            alert(e.response.statusText)
        }
    }

    async function loginUser(e, history) {
        e.preventDefault()
        const loginUser = {
            email: e.target[0].value,
            password: e.target[2].value
        }
        try {
            const res = await axios.post(`${AUTH_API}/login`, loginUser)
            localStorage.setItem('user', loginUser.email)
            console.log(res);
            alert(res.status)
            history.push('/')
        } catch (e) {
            console.log(e.response);
            alert(e.response.data.message)
        }
    }

    const storeToken = (token) => {
        localStorage.setItem('jwt-token', token)
    }

    return (
        <accountContext.Provider value={{
            registerUser,
            loginUser
        }}>
            {children}
        </accountContext.Provider>
    )
}

export default AccountContextProvider