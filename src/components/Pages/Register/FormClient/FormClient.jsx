import Button from "../Button/Button";
import Input from "../Input/Input";


const FormClient = ({labels, button}) => {


/*   const labels = ['Code', 'Description', 'Price', 'Name']; */

  const labelCode = labels[0];
  const labelName = labels[3];
  


  return (
    <div>
        <h1 className="text-center"> Form Client </h1>
      <form>
        <Input labelName={labelCode} placeholder={'Type the client code'}/>
        <Input labelName={labelName} placeholder={'Type the client name'}/>
        <button>{button}</button>
      </form>




    </div>
  )
}

export default FormClient;