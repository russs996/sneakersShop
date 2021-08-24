import { makeStyles } from '@material-ui/core';
import React, { useContext, useEffect } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button, Typography } from '@material-ui/core';
import { calcTotalPrice } from '../../helpers/CalcPrice';
import { clientContext } from '../../contexts/ClientContext';
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
    paper: {
        maxWidth: 1000,
        margin: '40px auto'
    }
});

const Cart = () => {
    const classes = useStyles()
    const { cart, getCart, changeProductCount } = useContext(clientContext)

    useEffect(() => {
        getCart()
    }, [])
    return (
        <TableContainer component={Paper} className={classes.paper} style={{ heigth: '100vh', marginTop: '100px' }}>
            <Table className={classes.table} aria-label="spanning table">
                <TableHead>
                    <TableRow>
                        <TableCell>Image</TableCell>
                        <TableCell align="right">Title</TableCell>
                        <TableCell align="right">Price</TableCell>
                        <TableCell align="right">Count</TableCell>
                        <TableCell align="right">SubPrice</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {cart.products ? (
                        <>
                            {cart.products.map((elem) => (
                                <TableRow key={elem.item.id}>
                                    <TableCell><img style={{ width: "50px" }} src={elem.item.image} alt={elem.item.title} /></TableCell>
                                    <TableCell align="right">{elem.item.title}</TableCell>
                                    <TableCell align="right">{elem.item.price}</TableCell>
                                    <TableCell align="right">
                                        <input
                                            type="number"
                                            value={elem.count}
                                            onChange={(e) => changeProductCount(e.target.value, elem.item.id)}
                                        />
                                    </TableCell>
                                    <TableCell align="right">{elem.subPrice}</TableCell>
                                </TableRow>
                            ))}
                        </>
                    ) : (<h1>Loading...</h1>)}

                    <TableRow>
                        <TableCell rowSpan={3} />
                        <TableCell colSpan={2}><Typography variant="h5">Total:</Typography></TableCell>
                        {
                            cart.products ? (
                                <TableCell align="right"><Typography variant="h5">{calcTotalPrice(cart.products)}</Typography></TableCell>
                            ) : (null)
                        }
                    </TableRow>
                    <TableRow >
                        <Link to="pay-card">
                            <TableCell colSpan={3} align="right">
                                <Button variant="contained" color="primary">BUY</Button>
                            </TableCell>
                        </Link>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer >
    );
};

export default Cart;