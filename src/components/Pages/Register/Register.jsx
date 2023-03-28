import { BrowserRouter, Link, Router } from "react-router-dom";
import FormClient from "./FormClient/FormClient";
import FormProduct from "./FormProduct/FormProduct";

const Register = () => {

  const labels = ['Code', 'Description', 'Price', 'Name'];

  const button = 'Send';

  return (
    <div className="pt-12">

      <h1 className="text-center text-2xl"> Register  </h1> 

    <div className="flex gap-6 justify-center items-center pt-12">
      <FormClient button={button} labels={labels} />
      <FormProduct button={button} labels={labels} />   

    </div>
     
     

    </div>

  )
}

export default Register;