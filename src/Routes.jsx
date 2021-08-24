import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home';
import AdminContextProvider from './contexts/AdminContext';
import AdminPanel from './components/AdminPanel/AdminPanel';
import ClientContextProvider from './contexts/ClientContext';

const Routes = () => {
    return (
        <BrowserRouter>
            <ClientContextProvider>
                <AdminContextProvider>
                    <Navbar />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/admin" component={AdminPanel} />
                    </Switch>
                </AdminContextProvider>
            </ClientContextProvider>
        </BrowserRouter>
    );
};

export default Routes;