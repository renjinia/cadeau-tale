import React, { useEffect, useState } from 'react'
import card from "../assets/card.jpeg"
import { deleteCartAPI, getAllCartAPI } from '../services/allAPI'

const Cart = () => {

  const [allCartProduct, setAllCartProduct] = useState([])

  useEffect(() => {
    getAllCartProduct()
  }, [])

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

  const removeCart = async (id) => {
    try {
      await deleteCartAPI(id)
      getAllCartProduct()

    } catch (err) {
      console.log(err);

    }
  }


  return (
    <div style={{ paddingTop: '10px' }}>
      <div style={{ paddingTop: '100px' }}>
        <div className='container d-flex justify-content-between align-items-center mb-4'>
          <h3 className='mb-0'>Product Details</h3>
        </div>
        <div className='container my-5'>
          {allCartProduct?.length > 0 ? (
            <div className='table-responsive'>
              <table className='table table-striped table-bordered'>
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
                  {allCartProduct.map((productDetails, index) => (
                    <tr key={productDetails?.id}>
                      <td>{index + 1}</td>
                      <td>{productDetails?.caption}</td>
                      <td>
                        <img
                          style={{ width: '100px', height: '80px' }}
                          className='rounded shadow'
                          src={productDetails?.imgUrl}
                          alt={productDetails?.caption}
                        />
                      </td>
                      <td>
                        <i className="fa-solid fa-indian-rupee-sign"></i> {productDetails?.price}
                      </td>
                      <td>
                        <button
                          onClick={() => removeCart(productDetails?.id)}
                          className='btn p-0'
                        >
                          <i className="fa-solid fa-trash text-danger"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className='fw-bolder text-danger text-center'>Cart is Empty!!</div>
          )}
        </div>
      </div>
    </div>

  )
}

export default Cart