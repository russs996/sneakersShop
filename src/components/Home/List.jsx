import { Grid } from '@material-ui/core';
import { clientContex } from '../../contexts/ClientContext';
import Card from '../../components/Home/Card/Card'
import React, { useContext } from 'react';

const List = () => {
    const { getProducts, products } = useContext(clientContex)

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <Grid container justify="space-evenly" margin="10px 0" className="list" style={{ position: 'relative' }}>
            {
                products ? (
                    products.length ? (
                        products.map(product => (
                            <Card key={product.id} product={product} />
                        ))
                    ) : (
                        <h1>Нету Товара</h1>
                    )
                ) : (
                    <h1>Loading...</h1>
                )
            }
        </Grid>
    );
};

export default List;