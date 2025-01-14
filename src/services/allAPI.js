
import commonAPI from "./commomAPI"
import SERVERURL from "./serverURL"

// saveProductAPI - POST http request ,add component
export const saveProductAPI= async(productDetails)=>{
   return await commonAPI('POST',`${SERVERURL}/uploadProducts`,productDetails)
}

// getllProductAPI - GET  method , called by view component, when  component displayed in  browser  inside its useeffect hook
export const getAllProductAPI= async()=>{
   return await commonAPI('GET',`${SERVERURL}/uploadProducts`,"")
}

// saveCartAPI - POST  http method to http://localhost:3000/cart called by   imagecard when we click on video
export const saveCartAPI= async(cartDetails)=>{
   return await commonAPI('POST',`${SERVERURL}/cart`,cartDetails)
}

// getAllCartAPI - get http request to  http://localhost:3000/cart called by cart component when it open in browser
export const getAllCartAPI= async()=>{
   return await commonAPI('GET',`${SERVERURL}/cart`,"")
}

// deleteCartAPI -DELETE method to http://localhost:3000/cart/id called by cart component when clicked on delete button
export const deleteCartAPI=async(id)=>{
   return await commonAPI('DELETE',`${SERVERURL}/cart/${id}`,{})
}

// removeProductAPI -DELETE method to http://localhost:3000/uploadProducts/id called by imageCard component when clicked on delete button
export const removeProductAPI=async(id)=>{
   return await commonAPI('DELETE',`${SERVERURL}/uploadProducts/${id}`,{})
}

// saveCategoryAPI -post request http://localhost:3000/wishlist called by wishlist component when user click on add button
// categoryDetails={categoryName,allVideos}
export const saveCategoryAPI=async(categoryDetails)=>{
   return await commonAPI(`POST`,`${SERVERURL}/wishlist`,categoryDetails)
}

// getAllcategoryAPI -get method to http://localhost:3000/wishlist called by wishlist component when component loaded in in browser
export const getAllCategoryAPI=async()=>{
   return await commonAPI(`GET`,`${SERVERURL}/wishlist`,{})
}

// deleteCategoryAPI -delete method to http://localhost:3000/wishlist/id called by wishlist component  when clicked on delete button
export const deleteCategoryAPI=async(id)=>{
   return await commonAPI(`DELETE`,`${SERVERURL}/wishlist/${id}`,{})
}

// updateCategoryAPI -put method to http://localhost:3000/wishlist/id called by wishlist component  when video drop over the category
export const updateCategoryAPI=async(categoryDetails)=>{
   return await commonAPI(`PUT`,`${SERVERURL}/wishlist/${categoryDetails.id}`,categoryDetails)
}


