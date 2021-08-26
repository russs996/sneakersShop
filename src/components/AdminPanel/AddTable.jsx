import React from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { adminContext } from '../../contexts/AdminContext';
import { Edit } from '@material-ui/icons';

const AddTable = () => {

    const { getProducts, products, deleteProduct, getProductToEdit } = useContext(adminContext)
    useEffect(() => {
        getProducts()
    }, [])

    const [changeId, setChangeId] = useState(null)

    const handleEditChange = (id) => {
        getProductToEdit(id)
        setChangeId(id)
    }

    return (
        <TableContainer component={Paper} style={{ backgroundColor: 'darkgray', marginBottom: '70px' }}>
            <Table size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell>#</TableCell>
                        <TableCell>#</TableCell>
                        <TableCell>Название</TableCell>
                        <TableCell align="left">Модель</TableCell>
                        <TableCell align="left">Фото</TableCell>
                        <TableCell align="left">Описание</TableCell>
                        <TableCell align="left">Цена</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        products ? (

                            <>
                                {
                                    products.length ? (
                                        products.map(product => (
                                            <React.Fragment key={product.id} >
                                                {
                                                    changeId === product.id ? (
                                                        <Edit setChangeId={setChangeId} />
                                                    ) : (
                                                        <TableRow id="admin-1" >
                                                            <TableCell align="left"> <button onClick={() => deleteProduct(product.id)}>DEL</button> </TableCell>
                                                            <TableCell align="left"> <button onClick={() => handleEditChange(product.id)}>EDIT</button> </TableCell>
                                                            <TableCell component="th" scope="row">{product.title}</TableCell>
                                                            <TableCell component="th" scope="row">{product.model}</TableCell>
                                                            <TableCell align="left"> <img width="100" src={product.image} /> </TableCell>
                                                            <TableCell align="left">{product.description}</TableCell>
                                                            <TableCell align="left">{product.price}</TableCell>
                                                        </TableRow>
                                                    )
                                                }

                                            </React.Fragment>
                                        ))
                                    ) : (
                                        <h2>Товара в данный момент нету</h2>
                                    )
                                }
                            </>
                        ) : (
                            <h1>Loading...</h1>
                        )

                    }
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default AddTable;