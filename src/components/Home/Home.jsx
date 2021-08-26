import { Grid } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
// import Card from './Card/Card';
import Carousel from './Carousel/Carousel';
import { useHistory } from 'react-router-dom';
import { clientContex } from '../../contexts/ClientContext';
import { Pagination } from '@material-ui/lab';
import List from './List';
import Sidebar from './Sidebar';

const Home = () => {
    const history = useHistory()
    const [page, setPage] = useState(10, getPage())
    const { getProducts, paginatedPages } = useContext(clientContex)
    function getPage() {
        const search = new URLSearchParams(history.location.pathname)
        return search.get("_page")
    }
    useEffect(() => {
        getProducts(history)
    }, [])

    const handlePage = (e, page) => {
        const search = new URLSearchParams(history.location.search)
        search.set('_page', page)
        history.push(`${history.location.pathname}?_page=10&${search.toString()}`)
        setPage(page)
        getProducts(history)

    }

    return (
        <div >
            <Grid>
                <Carousel />
                <Sidebar />
                <List />
            </Grid>
            <Pagination count={paginatedPages} page={+page} onChange={handlePage} shape="rounded" style={{ marginBottom: '80px', display: 'flex', justifyContent: 'center' }} />
        </div>
    );
};

export default Home;