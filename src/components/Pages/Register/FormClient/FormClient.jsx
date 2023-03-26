import Input from "../Input/Input";


const FormClient = ({labels}) => {


 
 
 
  const labelName = labels[2];
  const labelCode = labels[0]
  
  const placeholder = `Type the ${labels[2].toLowerCase()}`;
  



  return (
    <div>
        <h1> Form Client </h1>
        <Input labelName={labelCode} placeholder={placeholder}/>
        <Input labelName={labelName} placeholder={placeholder}/>
        
    </div>
  )
}

export default FormClient;