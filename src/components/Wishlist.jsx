import { useEffect, useState } from 'react'
import { Button, FloatingLabel, Form,Modal } from 'react-bootstrap'
import { deleteCategoryAPI,  getAllCategoryAPI,  removeProductAPI,  saveCategoryAPI, updateCategoryAPI } from '../services/allAPI';
import ImageCard from './ImageCard';

const Wishlist = ({deleteResponseFromView,setDeleteResponseFromWishlist}) => {
  const [allCategories,setAllCategories]=useState([])
  const [categoryName,setCategoryName] = useState("")
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(()=>{
    getAllCategories()
  },[deleteResponseFromView])

  const handleSaveCategory=async()=>{
    if(categoryName){
      const categoryDetails={categoryName,allVideos:[]}
      try{
        const result =await saveCategoryAPI(categoryDetails)
        alert("category created")
        getAllCategories()
        handleClose()

      }catch(err){
        console.log(err);
        
      }
    }else{
      alert("please provide a category name !!!")
    }
  }

  const getAllCategories=async()=>{
    try{
      const result = await getAllCategoryAPI()
      if(result.status>=200 && result.status<300){
        setAllCategories(result.data)
      }

    }catch(err){
      console.log(err);
      
    }
  }

  console.log(allCategories);

  const removeCategory=async(id)=>{
    try{
      await deleteCategoryAPI(id)
      getAllCategories()
    }catch(err){
      console.log(err);
      
    }
  }
  
  const dragovercategory=(e)=>{
    e.preventDefault()
  }

  const imageCardDropOverCategory=async (e,categoryDetails)=>{
    console.log("inside mageCardDropOverCategory");
    // console.log(categoryDetails);
    const productDetails=JSON.parse(e.dataTransfer.getData("productDetails"))
    console.log(productDetails);

    // update category by add images to its allVideos
    categoryDetails.allVideos.push(productDetails)
    console.log(categoryDetails);

    // API call to update the wishlist
    await updateCategoryAPI(categoryDetails)
    getAllCategories()
   const result= await removeProductAPI(productDetails?.id)
   setDeleteResponseFromWishlist(result)
  }
  
  const wishlistProductDragStarted =(e,dragProductDetails,categoryDetails)=>{
    console.log("inside wishlistProductDragStarted");
    let dragData={product:dragProductDetails,categoryDetails}
    e.dataTransfer.setData("dragData",JSON.stringify(dragData))
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
    <span className='me-2'>Wishlist</span>

  </button>
</div>



      {/* displaying all categories */}
      <div className='container-fluid mb-3'>
        {/* single category view */}
        
        {
          allCategories?.length>0?
          allCategories?.map(categoryDetails=>(
            <div droppable="true" onDragOver={dragovercategory} onDrop={e=>imageCardDropOverCategory(e,categoryDetails)} key={categoryDetails?.id} className='border rounded p-3 mb-3'>
            <div className='d-flex justify-content-between'>
              <h5> {categoryDetails?.categoryName}</h5>
              <button onClick={()=>removeCategory(categoryDetails?.id)} className='btn'><i class="fa-solid fa-trash text-danger"></i></button>
            </div>
            {/* display category videos */}
            <div className='row mt-2'>
                 {
                  categoryDetails?.allVideos?.length>0 &&
                  categoryDetails?.allVideos?.map(product=>(
                    <div key={product?.id}  className='col-lg-4' draggable={true} onDragStart={e=>wishlistProductDragStarted(e,product,categoryDetails)} >
                    {/* image cards */}
                    <ImageCard insideCategory={true} displayData={product} />
                  </div>
                  ))
                 }
            </div>
          </div>
          ))
        :
         <div className='fw-bolder text-danger fs-5'>No categories are added yet</div> 

        }
          

      </div>
      {/* modal */}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title> Add Category Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel controlId="floatingCategoryName" label="Category Name">
            <Form.Control onChange={e=>setCategoryName(e.target.value)} type="text" placeholder="Category Name" />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleSaveCategory}  variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>

    </>
  )
}

export default Wishlist