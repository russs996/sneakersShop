import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { adminContext } from '../../contexts/AdminContext';

const Edit = ({ setChangeId }) => {
    const { productToEdit, saveEditedProduct } = useContext(adminContext)
    const [editProduct, setEditProduct] = useState(productToEdit)

    useEffect(() => {
        setEditProduct(productToEdit)
    }, [productToEdit])

    const handleInput = (e) => {
        let obj = {
            ...editProduct,
            [e.target.name]: e.target.value
        }
        setEditProduct(obj)
    }

    const handleClick = () => {
        saveEditedProduct(editProduct)
        setChangeId('')
    }

    return (
        <>
            {
                editProduct ? (
                    <>
                        <button disabled>Delete</button>
                        <button onClick={handleClick}>Save</button>
                        <input onChange={handleInput} value={editProduct.title} type="text" name="title" />
                        <input onChange={handleInput} value={editProduct.image} type="img" name="image" />
                        <input onChange={handleInput} value={editProduct.description} type="text" name="description" />
                        <input onChange={handleInput} value={editProduct.price} type="number" name="number" />
                    </>
                ) : (null)
            }
        </>
    );
};

export default Edit;