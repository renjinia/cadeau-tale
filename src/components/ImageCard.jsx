import React, { useState } from 'react'
import {  Card, CardText } from 'react-bootstrap'
import bottle from '../assets/bottle.jpeg'
import { removeProductAPI, saveCartAPI } from '../services/allAPI'


const ImageCard = ({displayData,setDeleteProductFromImageCard,insideCategory}) => {

  const handleCart=async ()=>{
    const {caption,imgUrl,price}=displayData
    const cartDetails={caption,imgUrl,price}
    try{
       await saveCartAPI(cartDetails)
    }catch (err){
      console.log(err);
      
    }
  }

  const deleteProduct=async(id)=>{
    try{

      const result = await  removeProductAPI(id)
      setDeleteProductFromImageCard(result)
    }catch(err){
      console.log(err);
      
    }
  }

  const imageCardDragStarted=(e,dragImageDetails)=>{
    console.log("Inside imageCardDragStarted with productId:" + dragImageDetails?.id);
    // share data using event drag start
    e.dataTransfer.setData("productDetails",JSON.stringify(dragImageDetails))
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
        <Card draggable={true} onDragStart={e=>imageCardDragStarted(e,displayData)} style={{ width: '13rem' }} className='my-3'>
          <Card.Img  height={'150px'} variant="top" src={displayData?.imgUrl} />
          <Card.Body>
            <Card.Text className='d-flex justify-content-between'>
              <p className='mb-1 mt-2'>{displayData?.caption}</p>
              <p className='mb-1 mt-2'><i class="fa-solid fa-indian-rupee-sign"></i> {displayData?.price}</p>
            </Card.Text>
            <CardText className='d-flex justify-content-between'>
              {!insideCategory && <button onClick={()=>deleteProduct(displayData?.id)} className='btn'><i class="fa-solid fa-trash text-danger"></i></button>}
              <button onClick={handleCart} className='btn '><i class="fa-solid fa-cart-shopping text-success"></i></button>
            </CardText>
          </Card.Body>
        </Card>
      </>
    
  )
}

export default ImageCard