import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { adminContext } from '../../contexts/AdminContext';

const AddProduct = () => {
    const { createProducts } = useContext(adminContext)
    const [newProduct, setNewProduct] = useState({
        title: "",
        image: "",
        description: "",
        price: ""
    })

    const handleInput = (e) => {
        if (e.target.name === 'price') {
            let obj = {
                ...newProduct,
                [e.target.name]: e.target.value
            }
            setNewProduct(obj)
        } else {
            let obj = {
                ...newProduct,
                [e.target.name]: e.target.value
            }
            setNewProduct(obj)

        }
    }

    function handleClick() {
        createProducts(newProduct)
        setNewProduct({
            title: "",
            image: "",
            description: "",
            price: ""
        })
    }

    return (
        <>
            <div className="container">
                <div className="add-form">
                    <input value={newProduct.title} onChange={handleInput} name="title" type="text" />
                    <input value={newProduct.image} onChange={handleInput} name="image" type="img" />
                    <input value={newProduct.description} onChange={handleInput} name="description" type="text" />
                    <input value={newProduct.price} onChange={handleInput} name="price" type="number" />
                </div>
                <div>
                    <button onClick={handleClick}>ADD</button>
                </div>
            </div>
        </>
    );
};

export default AddProduct;