import './FormClient.css';

import { useEffect, useState } from "react";
import Input from "../Input/Input";




const FormClient = ({labels, button}) => {


/*   const labels = ['Code', 'Description', 'Price', 'Name']; */

  const labelCode = labels[0];
  const labelName = labels[3];

  const [code, setCode] = useState(null);
  const [clientName, setClientName] = useState(null);

  const [dataClient, setDataClient] = useState([{code: null, clientName: null}]);
  

  function handleClick(e){
    e.preventDefault();
    setDataClient([...dataClient, {code: code,clientName: clientName}])

    console.log(dataClient);


  }

  function getCodeValue(inputValue){
    return setCode(inputValue);
  }

  function getClientNameValue(inputValue){
    return setClientName(inputValue);
  }
  

  return (
    <div>
      <form>
        <h1> Form Client </h1>
        <Input labelName={labelCode} placeholder={'Type the client code'} getInput={getCodeValue} />
        <Input getInput={getClientNameValue} labelName={labelName} placeholder={'Type the client name'}/>
        <button onClick={handleClick}>{button}</button>
      </form>

    </div>
  )
}

export default FormClient;