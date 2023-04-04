import React from 'react';
import './Input.css';

const Input = ({labelName, placeholder, getInput, title, price}) => {

  const getValue = (e) =>{
    getInput(e.target.value);
  }

  
  return (
    <div>
        <label htmlFor="name">{labelName}</label>
        <input value={title} placeholder={`${placeholder}`} onChange={getValue}/>

    </div>
  )
}

export default Input;