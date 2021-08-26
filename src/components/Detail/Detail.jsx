import { Paper, Typography } from '@material-ui/core';
import { Comment } from '@material-ui/icons';
import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { clientContex } from '../../contexts/ClientContext';
import Comments from '../Comments/Comments';

const Detail = () => {
    const { productDetail, getProductDetail } = useContext(clientContex)
    const { id } = useParams()
    useEffect(() => {
        getProductDetail(id)
        productDetail ? console.log(productDetail.movie) : console.log('12112')
    }, [id])
    useEffect(() => {
        console.log(productDetail)
    }, [productDetail])
    return (
        <div>
            <>
                <Paper style={{ backgroundColor: 'darkgray' }}>
                    {
                        productDetail ? (
                            <div >
                                <div style={{
                                    display: 'flex',
                                    flexWrap: 'wrap'

                                }}>
                                    <img style={{ marginTop: '100px', marginLeft: '20px', width: '250px', position: 'absolute' }} src={productDetail.image} alt="" />
                                    <div style={{ marginTop: '100px', marginLeft: '300px' }}>
                                        <Typography variant='h3' gutterBottom>{productDetail.title}</Typography>
                                        <Typography variant='body1' gutterBottom>Описание:<br />{productDetail.description}</Typography>
                                    </div>
                                </div>
                            </div>
                        ) : (<h1>Loading...</h1>)
                    }
                    <Comments item={Detail} />
                </Paper>
            </>
        </div >
    );
};

export default Detail;