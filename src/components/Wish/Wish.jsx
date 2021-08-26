import { makeStyles } from '@material-ui/core';
import React, { useContext, useEffect } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';
import { calcTotalPrice } from '../../helpers/CalcPrice';
import { clientContex } from '../../contexts/ClientContext';

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
    paper: {
        maxWidth: 1000,
        margin: '40px auto'
    }
});

const Wish = () => {
    const classes = useStyles()
    const { wish, getWish, changeProductCount } = useContext(clientContex)

    useEffect(() => {
        getWish()
    }, [])

    return (
        <TableContainer component={Paper} className={classes.paper} style={{ heigth: '100vh', marginTop: '100px' }}>
            <Table className={classes.table} aria-label="spanning table">
                <TableHead>
                    <TableRow>
                        <TableCell>Image</TableCell>
                        <TableCell align="right">Title</TableCell>
                        <TableCell align="right">Price</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {wish.products ? (
                        <>
                            {wish.products.map((elem) => (
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
                            wish.products ? (
                                <TableCell align="right"><Typography variant="h5">{calcTotalPrice(wish.products)}</Typography></TableCell>
                            ) : (null)
                        }
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer >
    );
};

export default Wish;