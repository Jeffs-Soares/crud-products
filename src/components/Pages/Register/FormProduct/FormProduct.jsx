import Input from "../Input/Input";



const FormProduct = ({labels}) => {

    const labelProduct = labels[1];
    const labelCode = labels[0]
    const labelPrice = labels[2]
    
    const placeholder = `Type the ${labels[2].toLowerCase()}`;
  
  
  
    return (
      <div>
          <h1> Form Product </h1>
          <Input labelName={labelCode} placeholder={placeholder}/>
          <Input labelName={labelProduct} placeholder={placeholder}/>
          <Input labelName={labelPrice} placeholder={placeholder}/>
          
      </div>
    )

}

export default FormProduct;