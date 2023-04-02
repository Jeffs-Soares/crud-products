import './Form.css';
import { useEffect, useState } from "react";
import Input from "../Input/Input";
import Select from '../Select/Select';
import TextArea from '../TextArea/TextArea';

import axios from 'axios';
import React from 'react';

const Form = ({labels, button, categoryValues}) => {



  
  const labelTitle = labels[0];
  const labelPrice = labels[1];
  const labelCategory = labels[2];
  const labelDescription = labels[3];


  const [productTitle, setProductTitle] = useState(null);
  const [productPrice, setProductPrice] = useState(null);
  const [productCategory, setProductCategory] = useState(null);
  const [productDescription, setProductDescription] = useState(null);

  

  function saveData(e){
    e.preventDefault();
  
    axios.post('http://localhost:4000/products', {
      title: productTitle,
      price: productPrice,
      description: productDescription,
      category: productCategory
    })
    
  }



  function getProduct(inputValue){
    return setProductTitle(inputValue);
  }

  function getPrice(inputValue){
    return setProductPrice(inputValue);
  }

  function getDescription(selectValue){
    return setProductDescription(selectValue)
  }


  function getCategory(selectValue){
    return setProductCategory(selectValue)
  }
 

  return (
    <div>
      <form onSubmit={saveData}>
        <h1> Form Product </h1>

        <div className='flex gap-5'>
        <Input labelName={labelTitle}  getInput={getProduct}  placeholder={'Type the product name'}/>
        <Input labelName={labelPrice}  getInput={getPrice} placeholder={'Type the price'}  />

        </div>
        
        <TextArea labelName={labelDescription} getInput={getDescription} placeholder = {'Type the description'}/>
        <Select labelName={labelCategory}  getInput={getCategory} categoryList={categoryValues}/>
        
        <button>{button}</button>
      </form>

    </div>
  )
}

export default Form;