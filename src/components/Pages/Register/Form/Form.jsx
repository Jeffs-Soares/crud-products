import './Form.css';
import { useEffect, useState } from "react";
import Input from "../Input/Input";

const Form = ({labels, button}) => {

  const labelCode = labels[0];
  const labelName = labels[3];

  const [code, setCode] = useState(null);
  const [productName, setProductName] = useState(null);

  const [dataProduct, setDataProduct] = useState([{productName: null, code: null}]);
  

  function handleClick(e){
    e.preventDefault();
    setDataProduct([...dataProduct, {productName: productName, code: code}])

    console.log(dataProduct);


  }

  function getCodeValue(inputValue){
    return setCode(inputValue);
  }

  function getProduct(inputValue){
    return setProductName(inputValue);
  }
  

  return (
    <div>
      <form>
        <h1> Form Product </h1>
        <Input getInput={getProduct} labelName={labelName} placeholder={'Type the product name'}/>
        <Input labelName={labelCode} placeholder={'Type the code'} getInput={getCodeValue} />
        <button onClick={handleClick}>{button}</button>
      </form>

    </div>
  )
}

export default Form;