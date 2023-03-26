import { Link } from "react-router-dom";

const Register = () => {

  const labels = ['Code', 'Description', 'Price', 'Name'];

  return (
    <div>
    <ul>
        <li> <Link to='/register/client'> Client </Link>  </li>
        <li> <Link to='/register/product'> Product </Link>  </li>
      </ul>
    
    </div>
    
  )
}

export default Register;