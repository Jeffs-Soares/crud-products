import React from 'react'

const Input = ({labelName, placeholder}) => {

  return (
    <div>
        <label htmlFor="name">{labelName}</label>
        <input placeholder={`${placeholder}`} />

    </div>
  )
}

export default Input;