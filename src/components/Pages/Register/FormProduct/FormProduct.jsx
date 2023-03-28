import Input from "../Input/Input";



const FormProduct = ({labels, button}) => {

    const labelProduct = labels[1];
    const labelCode = labels[0]
    const labelPrice = labels[2]
    
    const placeholder = `Type the ${labels[2].toLowerCase()}`;
  
  
  
    return (
      <div>

        <form>

          <h1 className="text-center"> Form Product </h1>
          <Input labelName={labelCode} placeholder={placeholder}/>
          <Input labelName={labelProduct} placeholder={placeholder}/>
          <Input labelName={labelPrice} placeholder={placeholder}/>
          <button>{button}</button>

        </form>

          
          
      </div>
    )

}

export default FormProduct;