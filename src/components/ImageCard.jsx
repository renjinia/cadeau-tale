import React, { useState } from 'react'
import { Card, CardText } from 'react-bootstrap'
import bottle from '../assets/bottle.jpeg'
import { Button, FloatingLabel, Form, Modal} from 'react-bootstrap';
import { removeProductAPI, saveCartAPI } from '../services/allAPI'


const ImageCard = ({ displayData, setDeleteProductFromImageCard, insideCategory }) => {

      const [show, setShow] = useState(false);
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);

  const handleCart = async () => {
    const { caption, imgUrl, price } = displayData
    const cartDetails = { caption, imgUrl, price }
    try {
      await saveCartAPI(cartDetails)
    } catch (err) {
      console.log(err);

    }
  }

  const deleteProduct = async (id) => {
    try {

      const result = await removeProductAPI(id)
      setDeleteProductFromImageCard(result)
    } catch (err) {
      console.log(err);

    }
  }

  const imageCardDragStarted = (e, dragImageDetails) => {
    console.log("Inside imageCardDragStarted with productId:" + dragImageDetails?.id);
    // share data using event drag start
    e.dataTransfer.setData("productDetails", JSON.stringify(dragImageDetails))
  }

  // const addCart=async()=>{
  //   // store data to cart
  //   const {caption,imgUrl,price}=displayData
  //   const cartDetails={caption,imgUrl,price}
  //   if(cartDetails?.caption){
  //     alert("product already in cart")
  //   }else{
  //     try{
  //       await saveCartAPI(cartDetails)
  //       alert("product added to cart!!")

  //     }catch(err){
  //       console.log(err);

  //     }
  //   }
  // }


  return (
    <>
      <Card
        draggable={true}
        onDragStart={e => imageCardDragStarted(e, displayData)}
        style={{ width: '100%', maxWidth: '13rem' }}
        className='my-3 mx-auto'
      >
        <Card.Img onClick={handleShow} 
          height="150px"
          variant="top"
          src={displayData?.imgUrl}
          alt={displayData?.caption}
        />
        <Card.Body>
          <Card.Text className='d-flex justify-content-between align-items-center'>
            <p className='mb-1 mt-2 text-truncate' title={displayData?.caption}>
              {displayData?.caption}
            </p>
            <p className='mb-1 mt-2'>
              <i className="fa-solid fa-indian-rupee-sign"></i> {displayData?.price}
            </p>
          </Card.Text>
          <div className='d-flex justify-content-between'>
            {!insideCategory && (
              <button
                onClick={() => deleteProduct(displayData?.id)}
                className='btn p-0'
              >
                <i className="fa-solid fa-trash text-danger"></i>
              </button>
            )}
            <button onClick={handleCart} className='btn p-0'>
              <i className="fa-solid fa-cart-shopping text-success"></i>
            </button>
          </div>
        </Card.Body>
      </Card>

      {/* modal */}
      <Modal size='lg' centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Product Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='row align-items-center'> 
            <div className='col-lg-6'>
              <img  height={'350px'}  width={'300px'} src={displayData?.imgUrl} alt="" />
            </div>
            <div className='col-lg-6'>
              <h3 className='fw-bolder' title={displayData?.caption}>{displayData?.caption}</h3>
              <p title={displayData?.description}>{displayData?.description}</p>
              <p ><i className="fa-solid fa-indian-rupee-sign"></i> {displayData?.price}</p>
            </div>
          </div>
          
        </Modal.Body>
      </Modal>

    </>

  )
}

export default ImageCard