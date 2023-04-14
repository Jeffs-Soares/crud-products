import './Data.css';

import { useQuery } from 'react-query';
import { useState } from 'react';
import axios from "axios";
import Modal from './Modal/Modal';

const Data = () => {


  const { data, isLoading, error } = useQuery('products', () => {
    return axios.get('http://localhost:4000/products')
      .then(res => res.data);

  }, {
    retry: 3,
    refetchOnWindowFocus: true,
    refetchInterval: 10000, /* Deseja refazer de quanto em quanto tempo a requisição? */
  })

  
  const [product, setProduct] = useState({});

  const [modal, setModal] = useState(false)

  const getDatas = async (id) =>{

    let dataEspecific = await axios.get(`http://localhost:4000/products/${id}`).then(res => res.data)

    await setProduct({
      id: dataEspecific.id,
      title: dataEspecific.title,
      price: dataEspecific.price,
      description: dataEspecific.description,
      category: dataEspecific.category
    })

  }

  

  const [id, setID] = useState(null);
  const [title, setTitle] = useState(null);

  
  
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



  const openModal = () => {
      setModal(true);
  }

  const closeModal = () => {
    setModal(false);
  }




  return (

    <div>
  
      
     {modal ?  <Modal product={product} closeModal={closeModal}/> : ''} 
      <table>
        <thead>
          <tr>
            <th scope='col'> ID </th>
            <th scope='col'> Title </th>
            <th scope='col'> Price</th>
            <th scope='col'> Description </th>
             <th scope='col'> Category </th>
            <th scope='col'> Action </th>
          </tr>
        </thead>

        <tbody>
          {data.map((product) => {

            
            return (

              <tr>
                <td> {product.id} </td>
                <td> {product.title} </td>
              <td> {product.price} </td>
              <td> {product.description} </td>
                      <td> {product.category} </td>
                <td className='flex gap-2'>
                  <button onClick={() => deleteProduct(product.id)}> Delete </button>

                  <button onClick={() => {
                    setID(product.id)
                    setTitle(product.title)
                    getDatas(product.id)
                    openModal()


                  }} > Update </button>
                 
                  
                  </td>
              </tr>

            )

          })}

        </tbody>
      </table>


      
    </div>
  )
}

export default Data;