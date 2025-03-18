import React, { useState } from 'react'
import { FaCloudUploadAlt } from 'react-icons/fa'
import { IoMdCloseCircleOutline } from 'react-icons/io';
import uploadImage from '../components/UploadImage';


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
  more_details : {},
}

const UploadProduct = () => {

  const [formData, setFormData] = useState(initialsFormData)
  const [loading, setLoading] = useState(false)
console.log("formData", formData)
  const handleOnChange = (e)=>{
    e.preventDefault()
    const {name, value} = e.target;
    setFormData(()=>{
      return {
        ...formData,
        [name] : value,
      }
    })
  }

  const handleUploadImage = async(e)=>{
    const file = e.target.files[0]
    if(!file) return;
    setLoading(true);
    const response = await uploadImage(file);
    setFormData((formData)=>{
      return{
        ...formData,
        image: response?.data?.data?.url
      }
    })
    setLoading(false)
    
  }
  const handleClearImage = () => {
    setFormData((formData) => ({
        ...formData,
        image: ''
    }));
}
  return (
    <section className=''>
      <div className="flex justify-between items-center shadow-md p-2 bg-white">
        <h1 className="text-xl font-semibold text-neutral-700">Upload Products</h1>
        <button onClick={()=> setShowUploadSubCategoryModel(true) }
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
            <textarea rows={3}  onChange={handleOnChange} value={formData?.description} multiline
            className='outline-none border border-neutral-500 rounded p-2 focus-within:border-amber-300 resize-none '
            type="text" id='description' name='description' placeholder='Enter Product description' />
          </div>
          <div className="grid gap-2">
            <label className='text-xl font-medium text-neutral-700' htmlFor="imageUpload">Image:</label>
            <div className="flex h-36 items-center justify-center  border border-neutral-400 mt-1 bg-blue-50 rounded">
                {
                    formData.image ? <div className="flex items-start justify-center w-full h-full">
                        <img src={formData.image} alt="category"
                            className="h-36 p-1  object-cover rounded" />
                        <button onClick={handleClearImage} className="text-lg rounded-full m-4 text-red-600 cursor-pointer hover:bg-red-600 hover:text-white transition-colors duration-300" >
                            <IoMdCloseCircleOutline size={23} />
                        </button>
                    </div> :
                        <div>
                            <input type="file" onChange={handleUploadImage} id="uploadImage" name="image" className="hidden" />
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
          </div>
        </div>
      </form>
      </section>
  )
}

export default UploadProduct