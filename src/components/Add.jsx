import React, { useState } from 'react'
import { Button, FloatingLabel, Form, Modal} from 'react-bootstrap';
import {saveProductAPI} from '../services/allAPI'

const Add = ({setAddResponseFromHome}) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [productDetails,setProductDetails]=useState({
        caption:"",imgUrl:"",price:"",description:""
    })
    console.log(productDetails);
      
    

    const handleUploadImage=async ()=>{
        // object destructuring
        const {caption,imgUrl,price}=productDetails
        if(caption && imgUrl && price){
          // alert("proceed to storing data")
          try{
            const result =await saveProductAPI(productDetails)
            console.log(result);
            if(result.status>=200 && result.status<300){
              alert("image uploaded successfully")
              handleClose()
              // pass the  result to view component
              setAddResponseFromHome(result)
            }else{
              console.log(result);
            }
          }catch(err){
            console.log(err);
          }
        }else{
          alert("please fill the form")
        }
      }
    return (
        <>
<div className='d-flex justify-content-between align-items-center mb-4'>
  <button 
    onClick={handleShow} 
    className='btn btn-dark d-flex align-items-center fw-bolder fs-5 ms-3 px-3' 
    style={{ borderRadius: '8px', height: '40px' }}
  >
    <i className="fa-solid fa-plus text-white me-2"></i>
    <span className='me-2'>Upload New Product</span>

  </button>
</div>


            {/* modal */}
            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Product details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='border rounded p-3'>
                        <FloatingLabel controlId="floatingCaption" label="Product Name">
                            <Form.Control onChange={e=>setProductDetails({...productDetails,caption:e.target.value})} type="text" placeholder="Product Name" />
                        </FloatingLabel>
                        <FloatingLabel className='mt-2' controlId="floatingUrl" label=" Image URL">
                            <Form.Control onChange={e=>setProductDetails({...productDetails,imgUrl:e.target.value})} type="text" placeholder="Image URL" />
                        </FloatingLabel>
                        <FloatingLabel className='mt-2' controlId="floatingLink" label=" Description">
                            <Form.Control onChange={e=>setProductDetails({...productDetails,description:e.target.value})} type="text"  placeholder=" Product description " />
                        </FloatingLabel>
                        <FloatingLabel className='mt-2' controlId="floatingLink" label=" ₹ Price">
                            <Form.Control onChange={e=>setProductDetails({...productDetails,price:e.target.value})} type="number"  placeholder=" ₹ Price" />
                        </FloatingLabel>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button onClick={handleUploadImage} variant="primary">Add</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Add