import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { adminContext } from '../../contexts/AdminContext';

const AddProduct = () => {
    const { createProducts } = useContext(adminContext)
    const [newProduct, setNewProduct] = useState({
        title: "",
        model: "",
        image: "",
        description: "",
        price: "",
        comments: []
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
            model: "",
            image: "",
            description: "",
            price: "",

        })
    }

    return (
        <>
            <div className="container" style={{ marginTop: '20px' }}>
                <div className="add-form">
                    <input value={newProduct.title} onChange={handleInput} name="title" type="text" placeholder="Название" />
                    <input value={newProduct.model} onChange={handleInput} name="model" type="text" placeholder="Модель" />
                    <input value={newProduct.image} onChange={handleInput} name="image" type="img" placeholder="Фото" />
                    <input value={newProduct.description} onChange={handleInput} name="description" type="text" placeholder="Описание" />
                    <input value={newProduct.price} onChange={handleInput} name="price" type="number" placeholder="Цена" />
                </div>
                <div>
                    <button onClick={handleClick}>ADD</button>
                </div>
            </div>
        </>
    );
};

export default AddProduct;