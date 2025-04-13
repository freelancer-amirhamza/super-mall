<<<<<<< HEAD
import React, { useState } from 'react';
import { FaCloudUploadAlt } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { IoMdClose } from 'react-icons/io';
import uploadImage from '../components/UploadImage';
import ImageModel from '../components/ImageModel';
import AddMoreField from '../components/AddMoreField';
import { useSelector } from 'react-redux';
import AxiosToastError from '../utils/AxiosToastError';
import Axios from '../utils/Axios';
import SummeryApi from '../common/SummeryApi';
import successAlert from '../utils/SuccessAlert';

const initialFormData = {
  name: '',
  image: [],
  category: [],
  subCategory: [],
  unit: '',
  stock: '',
  price: '',
  discount: '',
  description: '',
  more_details: {},
};

const UploadProduct = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [loading, setLoading] = useState(false);
  const [viewImageURL, setViewImageURL] = useState('');
  const [selectCategory, setSelectCategory] = useState('');
  const [selectSubCategory, setSelectSubCategory] = useState('');
  const [openAddField, setOpenAddField] = useState(false);
  const [fieldName, setFieldName] = useState('');
  const allCategory = useSelector((state) => state.product.allCategory);
  const allSubCategory = useSelector((state) => state.product.allSubCategory);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUploadImage = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setLoading(true);
    try {
      const response = await uploadImage(file);
      const imageUrl = response?.data?.data?.url;
      setFormData((prev) => ({
        ...prev,
        image: [...prev.image, imageUrl],
      }));
    } catch (error) {
      AxiosToastError(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteImage = (index) => {
    const updatedImages = [...formData.image];
    updatedImages.splice(index, 1);
    setFormData((prev) => ({
      ...prev,
      image: updatedImages,
    }));
  };

  const handleRemoveCategory = (index) => {
    const updatedCategories = [...formData.category];
    updatedCategories.splice(index, 1);
    setFormData((prev) => ({
      ...prev,
      category: updatedCategories,
    }));
  };

  const handleRemoveSubCategory = (index) => {
    const updatedSubCategories = [...formData.subCategory];
    updatedSubCategories.splice(index, 1);
    setFormData((prev) => ({
      ...prev,
      subCategory: updatedSubCategories,
    }));
  };

  const handleFieldSubmit = () => {
    setFormData((prev) => ({
      ...prev,
      more_details: {
        ...prev.more_details,
        [fieldName]: '',
      },
    }));
    setFieldName('');
    setOpenAddField(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await Axios({
        ...SummeryApi.addProduct,
        data: formData,
      });
      if (response?.data?.success) {
        successAlert(response?.data?.message);
        setFormData(initialFormData);
      }
    } catch (error) {
      AxiosToastError(error);
    }
  };

=======
import React, { useState } from 'react'
import { FaCloudUploadAlt } from 'react-icons/fa'
import { IoMdCloseCircleOutline } from 'react-icons/io'

const UploadProduct = () => {
  const [formData, setFormData] = useState({
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
  })
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

  const handleUploadImage = (e)=>{
    const image = e.target.files[0]
    
  }
>>>>>>> 243ced43ca22adea7b7b8447d17f8411a1f22396
  return (
    <section>
      <div className="flex justify-between items-center shadow-md p-2 bg-white">
        <h1 className="text-xl font-semibold text-neutral-700">Upload Products</h1>
<<<<<<< HEAD
      </div>
      <form onSubmit={handleSubmit}>
        <div className="grid gap-3 p-3">
          <div className="grid gap-2">
            <label htmlFor="name" className="text-xl font-medium text-neutral-700">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleOnChange}
              className="outline-none border border-neutral-500 rounded p-2 focus-within:border-amber-300"
              placeholder="Enter Product Name"
              required
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="description" className="text-xl font-medium text-neutral-700">
              Description:
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleOnChange}
              rows={3}
              className="outline-none border border-neutral-500 rounded p-2 focus-within:border-amber-300 resize-none"
              placeholder="Enter Product Description"
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="imageUpload" className="text-xl font-medium text-neutral-700">
              Image:
            </label>
            <div className="flex h-28 items-center justify-center border border-neutral-400 mt-1 bg-blue-50 rounded">
              <input
                type="file"
                accept="image/*"
                onChange={handleUploadImage}
                id="uploadImage"
                name="image"
                className="hidden"
              />
              <label
                htmlFor="uploadImage"
                className={`${
                  !formData.name ? 'cursor-not-allowed text-neutral-400' : 'text-amber-700 border-dotted border cursor-pointer'
                } p-7 rounded text-lg w-full items-center flex font-semibold`}
              >
                <FaCloudUploadAlt size={30} />
                <span className="ml-2">{loading ? 'Uploading...' : 'Upload Image'}</span>
              </label>
            </div>
            <div className="flex items-start justify-center gap-2 flex-wrap">
              {formData.image.map((img, index) => (
                <div key={index} className="h-20 w-20 bg-blue-50 rounded border border-neutral-400 relative group">
                  <img
                    src={img}
                    alt="Product"
                    className="w-full h-full object-scale-down cursor-pointer"
                    onClick={() => setViewImageURL(img)}
                  />
                  <div
                    onClick={() => handleDeleteImage(index)}
                    className="absolute top-0 right-0 p-0.5 bg-orange-600 hover:bg-orange-700 rounded-sm text-white hidden group-hover:block cursor-pointer"
                  >
                    <MdDelete />
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Additional fields for category, subcategory, and more */}
        </div>
        <button
          type="submit"
          className="w-full border px-2 py-1 rounded cursor-pointer font-medium text-white bg-green-600 hover:bg-green-700 border-green-600 hover:shadow-2xl"
        >
          Upload Product
        </button>
      </form>
      {viewImageURL && <ImageModel url={viewImageURL} close={() => setViewImageURL('')} />}
      {openAddField && (
        <AddMoreField
          value={fieldName}
          onChange={(e) => setFieldName(e.target.value)}
          submit={handleFieldSubmit}
          close={() => setOpenAddField(false)}
        />
      )}
    </section>
  );
};
=======
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
           <div className="">
            <label htmlFor="image" className="text-xl font-medium text-neutral-700">Image</label>
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
        </div>
      </form>
      </section>
  )
}
>>>>>>> 243ced43ca22adea7b7b8447d17f8411a1f22396

export default UploadProduct;