import './Modal.css';
import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { DataApiContext } from '../../../../context/DataApi';

const Modal = ({ product, closeModal }) => {


  const labels = ['Product Name', 'Price', 'Category', 'Description'];
  const tags = ['Books', 'Eletronics', 'Other'];

  const { render, setRender } = useContext(DataApiContext);




  useEffect(() => {
    setTitle(product.title);
    setPrice(product.price);
    setDescription(product.description);
    setCategory(product.category);
  }, [product])


  const [title, setTitle] = useState(product.title);
  const [price, setPrice] = useState(product.price);
  const [description, setDescription] = useState(product.description);
  const [category, setCategory] = useState(product.category);



  const updateProduct = (e) => {
    e.preventDefault();

    axios.put(`http://localhost:4000/products/${product.id}`, {
      id: product.id,
      title: title,
      price: price,
      description: description,
      category: category
    })

    closeModal()
    setRender(render + 1)

  }

  return (
    <div className='modal'>

      <form>

        <h1> Edit the product</h1>

        <label> ID </label>
        <input value={product.id} disabled={true} />

        <label htmlFor="name"> Title </label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder={'Type the product name'} />

        <label htmlFor="name"> Price </label>
        <input value={price} onChange={(e) => setPrice(e.target.value)} placeholder={'Type the price'} />

        <label htmlFor="name"> Description </label>
        <input value={description} onChange={(e) => setDescription(e.target.value)} placeholder={'Type the new description'} />

        <label htmlFor="name"> Category </label>
        <select onChange={(e) => setCategory(e.target.value)}>

          <option> {category} </option>

          {tags.map((category) => {
            return category === product.category ? null : <option> {category} </option>
          })}


        </select>

        <button onClick={updateProduct}>Update</button>
        <button onClick={closeModal}> Close </button>


      </form>

    </div>

  )
}

export default Modal;