import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import ImageCard from './ImageCard'
import { getAllProductAPI, saveProductAPI, updateCategoryAPI } from '../services/allAPI'

const View = ({ addResponseFromHome, setDeleteResponseFromView, deleteResponseFromWishlist }) => {

  const [deleteProductFromImageCard, setDeleteProductFromImageCard] = useState("")

  const [allproducts, setAllProducts] = useState([])

  useEffect(() => {
    getAllProduct()
  }, [addResponseFromHome, deleteResponseFromWishlist, deleteProductFromImageCard])

  console.log(`allproducts ${allproducts}`);


  const getAllProduct = async () => {
    try {
      const result = await getAllProductAPI()
      console.log(result);
      if (result.status >= 200 && result.status < 300) {
        setAllProducts(result.data)

      } else {
        console.log("API call failed");

      }
    } catch (err) {
      console.log(err);
    }

  }

  const dragOverView = (e) => {
    e.preventDefault()
  }

  const wishlistProductDragOverView = async (e) => {
    console.log("inside wishlistProductDragOverView");
    const { product, categoryDetails } = JSON.parse(e.dataTransfer.getData("dragData"))
    console.log(product, categoryDetails);
    const updatedWishlist = categoryDetails?.allVideos?.filter(item => item.id != product?.id)
    const updatedCategory = { ...categoryDetails, allVideos: updatedWishlist }
    console.log(updatedCategory);

    // updating the wishlist by delete product from wishlist
    const result = await updateCategoryAPI(updatedCategory)
    // use state lifting to communicate data from view to wishlist
    setDeleteResponseFromView(result)
    // use api to upload product
    await saveProductAPI(product)
    // call getAllProduct function
    getAllProduct()


  }

  return (
    <>
      <Row
        droppable="true"
        onDragOver={dragOverView}
        onDrop={e => wishlistProductDragOverView(e)}
        className="g-4"
      >
        {allproducts?.length > 0 ? (
          allproducts.map(product => (
            <Col
              key={product?.id}
              sm={12}
              md={6}
              lg={4}
              className="d-flex justify-content-center"
            >
              <ImageCard
                setDeleteProductFromImageCard={setDeleteProductFromImageCard}
                displayData={product}
              />
            </Col>
          ))
        ) : (
          <div className="fw-bolder text-danger fs-5 text-center w-100">
            No Product Details
          </div>
        )}
      </Row>

    </>
  )
}

export default View