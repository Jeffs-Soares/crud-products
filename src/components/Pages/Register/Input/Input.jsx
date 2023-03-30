import React from 'react';
import './Input.css';

const Input = ({labelName, placeholder, getInput}) => {

  const getValue = (e) =>{
    getInput(e.target.value);
  }

  return (
    <div>
        <label htmlFor="name" className='block text-gray-700 text-sm font-bold mb-2'>{labelName}</label>
        <input placeholder={`${placeholder}`} onChange={getValue}  className='shadow appearance-none border rounded-sm w-full py-1 pl-2'/>

    </div>
  )
}

export default Input;