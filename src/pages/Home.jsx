import React, { useState } from 'react'
import Add from '../components/Add'
import Wishlist from '../components/Wishlist'
import View from '../components/View'


const Home = () => {
  const [deleteResponseFromWishlist, setDeleteResponseFromWishlist] = useState("")
  const [deleteResponseFromView, setDeleteResponseFromView] = useState("")
  const [addResponseFromHome, setAddResponseFromHome] = useState("")
  return (
    <div style={{ paddingTop: '50px' }}>
      <div className='container mb-5'>
        <div className='d-flex flex-column flex-md-row justify-content-between'>
          <Add setAddResponseFromHome={setAddResponseFromHome} />
        </div>
      </div>
      <div className='container my-5'>
        <div className='row'>
          <div className='col-12 col-lg-6 mb-4 mb-lg-0'>
            <h3>All Products</h3>
            <View
              deleteResponseFromWishlist={deleteResponseFromWishlist}
              setDeleteResponseFromView={setDeleteResponseFromView}
              addResponseFromHome={addResponseFromHome}
            />
          </div>
          <div className='col-12 col-lg-6'>
            {/* <h3>Wishlist</h3> */}
            <Wishlist
              setDeleteResponseFromWishlist={setDeleteResponseFromWishlist}
              deleteResponseFromView={deleteResponseFromView}
            />
          </div>
        </div>
      </div>
    </div>



  )
}

export default Home