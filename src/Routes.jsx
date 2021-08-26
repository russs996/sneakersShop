import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home';
import AdminContextProvider from './contexts/AdminContext';
import AdminPanel from './components/AdminPanel/AdminPanel';
import ClientContextProvider from './contexts/ClientContext';
import Footer from './components/Footer/Footer'
import Login from './components/Account/Login';
import AccountContextProvider from './contexts/AccountContext';
import Register from './components/Account/Register'
import Wish from './components/Wish/Wish';
import Detail from './components/Detail/Detail';

const Routes = () => {
    return (
        <AccountContextProvider>
            <BrowserRouter>
                <ClientContextProvider>
                    <Navbar />
                    <AdminContextProvider>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/admin" component={AdminPanel} />
                            <Route exact path="/login" component={Login} />
                            <Route exact path="/signup" component={Register} />
                            <Route exact path="/wish" component={Wish} />
                            <Route exact path="/detail/:id" component={Detail} />
                        </Switch>
                    </AdminContextProvider>
                </ClientContextProvider>
                <Footer />
            </BrowserRouter>
        </AccountContextProvider>
    );
};

export default Routes;