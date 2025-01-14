import React, { useState } from 'react'
import Add from '../components/Add'
import Wishlist from '../components/Wishlist'
import View from '../components/View'


const Home = () => {
  const [deleteResponseFromWishlist,setDeleteResponseFromWishlist]=useState("")
  const [deleteResponseFromView, setDeleteResponseFromView] = useState("")
  const [addResponseFromHome, setAddResponseFromHome] = useState("")
  return (
    <div style={{ paddingTop: '50px' }}>
      <div className='d-flex justify-content-between container mb-5'>
        <Add setAddResponseFromHome={setAddResponseFromHome} />
      </div>
      <div className="container-fluid my-5 row">
        <div className="col-lg-6">
          <h3>All Product</h3>
          <View deleteResponseFromWishlist={deleteResponseFromWishlist} setDeleteResponseFromView={setDeleteResponseFromView}  addResponseFromHome={addResponseFromHome} />
        </div>
        <div className="col-lg-6">
          {/* <h3>Wishlist</h3> */}
          <Wishlist setDeleteResponseFromWishlist={setDeleteResponseFromWishlist} deleteResponseFromView={deleteResponseFromView}  />
        </div>
      </div>
    </div>

  )
}

export default Home