import './Form.css';
import { useEffect, useState } from "react";
import Input from "../Input/Input";
import Select from '../Select/Select';

const Form = ({labels, button, tagsValues}) => {

  const labelCode = labels[0];
  const labelName = labels[1];
  const labelPrice = labels[2];
  const labelTag = labels[3];


  const [codeProduct, setProductCode] = useState(null);
  const [productName, setProductName] = useState(null);
  const [productPrice, setProductPrice] = useState(null);
  const [productTag, setProductTag] = useState(null);

  


  const [dataProduct, setDataProduct] = useState([]);
  

  function saveData(e){
    e.preventDefault();
    setDataProduct([...dataProduct, {
      productName: productName,
      codeProduct: codeProduct,
      price: productPrice,
      tag: productTag
    }])

   

  }

  useEffect(() =>{
    console.log(dataProduct);

  }, [dataProduct])


  function getCode(inputValue){
    return setProductCode(inputValue);
  }

  function getProduct(inputValue){
    return setProductName(inputValue);
  }

  function getPrice(inputValue){
    return setProductPrice(inputValue);
  }

  function getTag(selectValue){
    return setProductTag(selectValue)
  }
 

  return (
    <div>
      <form onSubmit={saveData}>
        <h1> Form Product </h1>
        
        <Input labelName={labelName}  getInput={getProduct}   placeholder={'Type the product name'}/>
        <Input labelName={labelCode}  getInput={getCode} placeholder={'Type the code'}  />
        <Input labelName={labelPrice}  getInput={getPrice} placeholder={'Type the price'}  />
        <Select labelName={labelTag}  getInput={getTag} tagsList={tagsValues}/>
        
        <button>{button}</button>
      </form>

    </div>
  )
}

export default Form;