import React, { useEffect, useState } from 'react'
import card from "../assets/card.jpeg"
import { deleteCartAPI, getAllCartAPI } from '../services/allAPI'

const Cart = () => {

  const [allCartProduct, setAllCartProduct] = useState([])

  useEffect(()=>{
    getAllCartProduct()
  },[])

  const getAllCartProduct = async () => {
    try {
      const result = await getAllCartAPI()
      if (result.status >= 200 && result.status < 300) {
        setAllCartProduct(result.data)
      }
    } catch (err) {
      console.log(err);
    }
  }

  const removeCart=async (id)=>{
    try{
      await deleteCartAPI(id)
      getAllCartProduct()

    }catch(err){
      console.log(err);
      
    }
  }


  return (
    <div style={{ paddingTop: '10px' }}>
      {/* <div className='d-flex justify-content-between container '>
        <h3>View Cart</h3>
      </div> */}
      <div style={{ paddingTop: '100px' }}>
        <div className='d-flex justify-content-between container '>
          <h3>Product Details</h3>
        </div>
        <table className='container my-5 table'>
          <thead>
            <tr>
              <th>#</th>
              <th>Caption</th>
              <th>Image</th>
              <th>Price</th>
              <th>...</th>
            </tr>
          </thead>
          <tbody>
            {
              allCartProduct?.length>0?
              allCartProduct?.map((productDetails,index)=>(
                <tr key={productDetails?.id}>
                <td>{index+1}</td>
                <td>{productDetails?.caption}</td>
                <td><img style={{ width: '100px', height: '80px' }} className='rounded shadow' src={productDetails?.imgUrl} alt="" /></td>
                <td><i class="fa-solid fa-indian-rupee-sign"></i> {productDetails?.price}</td>
                <td><button onClick={()=>removeCart(productDetails?.id)} className='btn'><i class="fa-solid fa-trash text-danger"></i></button></td>
              </tr>
              ))
              :
            <div className='fw-bolder text-danger'> Cart is Empty!!</div> 
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Cart