import React, { useState } from 'react'
import { FaCloudUploadAlt } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md';
import uploadImage from '../components/UploadImage';
import ImageModel from '../components/ImageModel';
import { useSelector } from "react-redux";
import { IoMdClose } from 'react-icons/io';


const initialsFormData = {
  name: "",
  image: [],
  category: [],
  subCategory: [],
  unit: [],
  stock: "",
  price: "",
  discount: "",
  description: "",
  more_details: {},
}

const UploadProduct = () => {

  const [formData, setFormData] = useState(initialsFormData)
  const [loading, setLoading] = useState(false);
  const [viewImageURL, setViewImageURL] = useState("")
  const allCategory = useSelector((state) => state.product.allCategory);
  const allSubCategory = useSelector(state=> state.product.allSubCategory)
  const [selectCategory, setSelectCategory] = useState("");
  const [selectSubCategory, setSelectSubCategory] = useState("");


  console.log("formData", formData)
  const handleOnChange = (e) => {
    e.preventDefault()
    const { name, value } = e.target;
    setFormData(() => {
      return {
        ...formData,
        [name]: value,
      }
    })
  }

  const handleUploadImage = async (e) => {
    const file = e.target.files[0]
    if (!file) return;
    setLoading(true);
    const response = await uploadImage(file);
    const imageUrl = response?.data?.data?.url
    setFormData((formData) => {
      return {
        ...formData,
        image: [...formData.image, imageUrl]
      }
    })
    setLoading(false)

  }
  const handleDeleteImage = (index) => {
    formData.image.splice(index, 1)
    setFormData((formData) => ({
      ...formData
    }));
  }
  const handleRemoveCategory = (index) => {
    formData.category.splice(index, 1)
    setFormData((formData) => ({
      ...formData
    }))
  }

  const handleRemoveSubCategory = (index)=>{
    formData.subCategory.splice(index, 1)
    setFormData((formData)=>({
      ...formData,
    }))
  }
  return (
    <section className=''>
      <div className="flex justify-between items-center shadow-md p-2 bg-white">
        <h1 className="text-xl font-semibold text-neutral-700">Upload Products</h1>
        <button onClick={() => setShowUploadSubCategoryModel(true)}
          className="border  border-amber-600 transition-colors duration-300 px-2 py-1 rounded-sm hover:bg-amber-500 cursor-pointer hover:text-white font-medium ">Add Sub Category</button>
      </div>
      <form className=''>
        <div className="grid gap-3 p-3 ">
          <div className="grid gap-2">
            <label className='text-xl font-medium text-neutral-700' htmlFor="name">Name:</label>
            <input onChange={handleOnChange} value={formData?.name}
              className='outline-none border border-neutral-500 rounded p-2 focus-within:border-amber-300 '
              type="text" id='name' name='name' placeholder='Enter Product name' />
          </div>
          <div className="grid gap-2">
            <label className='text-xl font-medium text-neutral-700' htmlFor="description">Description:</label>
            <textarea rows={3} onChange={handleOnChange} value={formData?.description} multiline
              className='outline-none border border-neutral-500 rounded p-2 focus-within:border-amber-300 resize-none '
              type="text" id='description' name='description' placeholder='Enter Product description' />
          </div>
          <div className="grid gap-2">
            <label className='text-xl font-medium text-neutral-700' htmlFor="imageUpload">Image:</label>
            <div className="flex h-28 items-center justify-center  border border-neutral-400 mt-1 bg-blue-50 rounded">
              {

                <div>
                  <input type="file" accept='image/*' onChange={handleUploadImage} id="uploadImage" name="image" className="hidden" />
                  <div className={` `}>
                    <label htmlFor="uploadImage" disabled={!formData.name} className={` ${!formData.name ? "cursor-not-allowed text-neutral-400" : "text-amber-700 border-dotted border  cursor-pointer"} p-7 rounded text-lg w-full items-center flex font-semibold`} >
                      <FaCloudUploadAlt size={30} />
                      <span className="ml-2">
                        {loading ? "Uploading..." : "Upload Image"}
                      </span>
                    </label>
                  </div>
                </div>
              }
            </div>
            {/* display images */}
            <div className="flex items-start justify-center gap-2 flex-wrap">
              {formData?.image?.map((img, index) => {
                return (
                  <div key={img + index} className='h-20 mt-1 w-20 min-w-20 bg-blue-50 rounded border border-neutral-400 relative group'>
                    <img
                      src={img}
                      alt={img}
                      className='w-full h-full object-scale-down cursor-pointer'
                      onClick={() => setViewImageURL(img)}
                    />
                    <div onClick={() => handleDeleteImage(index)} className='absolute top-0 right-0 p-0.5  bg-orange-600 hover:bg-orange-600 rounded-sm text-white hidden group-hover:block cursor-pointer'>
                      <MdDelete />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
           {/* Select sub category  */}
          <div className="grid gap-2">
            <label htmlFor="category" className='text-neutral-800 font-medium text-xl'>Select Category:</label>
            <div className=" w-full ">
              <select
                value={selectCategory}
                onChange={(e) => {
                  const value = e.target.value;
                  const category = allCategory.find(el => el._id === value)
                  setFormData((formData) => {
                    return {
                      ...formData,
                      category: [...formData.category, category]
                    }
                  })
                  setSelectCategory("")
                }}
                className='w-full border outline-none p-2 rounded focus-within:border-amber-500' name="" id="">
                <option value="">Select Category</option>
                {allCategory.map((category, index) => {
                  return (
                    <option value={category._id} key={index + "selectCategory"} >{category.name} </option>
                  )
                })}
              </select>
            </div>
            <div className="flex flex-wrap gap-2">
              {formData?.category?.map((categoryItem, index) => {
                return (
                  <div key={categoryItem._id + index} className="flex items-center px-0.5 justify-start gap-1 border w-fit rounded shadow-md">
                    <p className="">{categoryItem.name}</p>
                    <div onClick={() => handleRemoveCategory(index)} className="cursor-pointer hover:text-orange-800 ">
                      <IoMdClose />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          {/* Select sub category  */}
          <div className="grid gap-2">
            <label htmlFor="subCategory" className='text-neutral-800 font-medium text-xl'>Select Sub Category:</label>
            
            <div className="grid gap-2">
              {/* category select */}
              <select className='w-full border outline-none p-2 rounded focus-within:border-amber-500'
              value={selectSubCategory}
              onChange={(e)=>{
                const value = e.target.value;
                const subCategory = allSubCategory.find(el=> el._id === value)
                setFormData((formData)=>({
                  ...formData,
                  subCategory : [...formData.subCategory, subCategory] 
                }))
                setSelectSubCategory("")
              }}
              name="subCategory" id="subCategory">
                <option value="" className="">Select Sub Category</option>
                {allSubCategory && allSubCategory.map((subCategory, index)=>{
                  return(
                    <option value={subCategory._id} key={index + "subCategory"} >{subCategory?.name} </option>
                  )
                })}
              </select>
              {/* category display */}
              <div className="flex flex-wrap gap-2">
                {formData.subCategory.map((subCategory,index)=>{
                  return(
                    <div className="flex items-center justify-start gap-1 px-0.5 border w-fit rounded shadow-md">
                      <p className="">{subCategory?.name} </p>
                      <div onClick={() => handleRemoveSubCategory(index)} className="cursor-pointer hover:text-orange-800 ">
                      <IoMdClose />
                    </div>
                    </div>
                  )
                })}
                
              </div>
            </div>
          </div>
        </div>
      </form>
      {viewImageURL && <ImageModel url={viewImageURL} close={() => setViewImageURL("")} />}
    </section>
  )
}

export default UploadProduct