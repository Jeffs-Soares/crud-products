import './Data.css';

import { useQuery } from 'react-query';
import axios from "axios";

const Data = () => {

  const { data, isLoading, error } = useQuery('products', () => {
    return axios.get('http://localhost:4000/products')
      .then(res => res.data);

  }, {
    retry: 3,
    refetchOnWindowFocus: true,
    refetchInterval: 5000, /* Deseja refazer de quanto em quanto tempo a requisição? */
  })

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div> Something wrong happened! </div>
  }

  const deleteProduct = (id) => {
    axios.delete(`http://localhost:4000/products/${id}`);
    return alert(`Product ${id} deleted!`)


  }


  return (
    <div>
      <table>
        <thead>
          <tr>
            <th scope='col'> ID </th>
            <th scope='col'> Title </th>
            {/*  <th scope='col'> Category </th>
            <th scope='col'> Price</th>
            <th scope='col'> Description </th> */}
            <th scope='col'> Action </th>
          </tr>
        </thead>

        <tbody>
          {data.map((product) => {
            return (

              <tr>
                <td> {product.id} </td>
                <td> {product.title} </td>
                {/*       <td> {product.category} </td>
              <td> {product.price} </td>
              <td> {product.description} </td> */}
                <td> <button onClick={() => deleteProduct(product.id)}> Delete </button> </td>
              </tr>

            )


          })}



        </tbody>

      </table>



    </div>
  )
}

export default Data;