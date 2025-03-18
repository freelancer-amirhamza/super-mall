import React, { useEffect, useState } from 'react';
import AxiosToastError from '../utils/AxiosToastError';
import Axios from '../utils/Axios';
import SummeryApi from '../common/SummeryApi';
import NoData from '../components/NoData';
<<<<<<< HEAD
import EditCategoryModel from '../components/EditCategoryModel';
=======
<<<<<<< HEAD
=======
import EditCategoryModel from '../components/EditCategoryModel';
>>>>>>> master
>>>>>>> main
import ConfirmBox from '../components/ConfirmBox';
import toast from 'react-hot-toast';
import UploadSubCategoryModel from '../components/UploadSubCategoryModel';
import { useSelector } from 'react-redux';
<<<<<<< HEAD
=======
<<<<<<< HEAD
import Table from '../components/Table';
import {createColumnHelper } from "@tanstack/react-table";
import ImageModel from '../components/ImageModel';
import { ImPencil } from "react-icons/im";
import { MdDelete } from "react-icons/md";
import EditSubCategoryModel from '../components/EditSubCategoryModel';
=======
>>>>>>> master
>>>>>>> main

const SubCategoryPage = () => {
  const [showUploadSubCategoryModel, setShowUploadSubCategoryModel] = useState(false);
  const [loading, setLoading] = useState(false);
  const [subCategoryData, setSubCategoryData] = useState([])
  const [openEditData, setOpenEditData]= useState(false)
  const [openConfirmBox, setOpenConfirmBox] = useState(false);
<<<<<<< HEAD
  const allCategory = useSelector(state => state?.product?.allCategory)
=======
<<<<<<< HEAD
  const allCategory = useSelector(state => state?.product?.allCategory);
  const columnHelper = createColumnHelper();
  const [imageUrl, setImageUrl]= useState("")
=======
  const allCategory = useSelector(state => state?.product?.allCategory)
>>>>>>> master
>>>>>>> main
  const [editData, setEditData] = useState({
    name:"",
    image: "",
  });
<<<<<<< HEAD
  const [deleteCategoryData, setDeleteCategoryData] = useState({
=======
<<<<<<< HEAD
  const [deleteSubCategoryData, setDeleteSubCategoryData] = useState({
=======
  const [deleteCategoryData, setDeleteCategoryData] = useState({
>>>>>>> master
>>>>>>> main
    _id: "",
    name: "",
  })

  const fetchSubCategory = async()=>{
    try {
      setLoading(true)
      const response = await Axios({
<<<<<<< HEAD
        ...SummeryApi.getCategory,
        data: deleteCategoryData
=======
<<<<<<< HEAD
        ...SummeryApi.getSubCategory,
        data: subCategoryData
=======
        ...SummeryApi.getCategory,
        data: deleteCategoryData
>>>>>>> master
>>>>>>> main
      })
      if(response?.data?.success){
        setSubCategoryData(response?.data?.data)
      }

    } catch (error) {
      AxiosToastError(error)
    }finally{
      setLoading(false);
    }
  }

<<<<<<< HEAD
=======
<<<<<<< HEAD
  const handleSubCategoryDelete=async ()=>{
    try {
      setLoading(true)
      const response = await Axios({
        ...SummeryApi.deleteSubCategory,
        data: deleteSubCategoryData
      })
      if(response?.data?.success){
        toast.success(response?.data?.message)
        fetchSubCategory()
=======
>>>>>>> main
  const handleCategoryDelete=async ()=>{
    try {
      setLoading(true)
      const response = await Axios({
        ...SummeryApi.deleteCategory,
        data: deleteCategoryData
      })
      if(response?.data?.success){
        toast.success(response?.data?.message)
        fetchCategory()
<<<<<<< HEAD
=======
>>>>>>> master
>>>>>>> main
        setOpenConfirmBox(false)
      }
    } catch (error) {
      AxiosToastError(error)
    }finally{
      setLoading(false)
    }
  }

  useEffect(()=>{
    fetchSubCategory()
  },[])

<<<<<<< HEAD
=======
<<<<<<< HEAD
  const column = [
    columnHelper.accessor("name", { header : "Name"}),
    columnHelper.accessor("image", { header: "Image",
      cell : ({row})=>{
        return <div className="flex justify-center   items-center">
          <img src={row.original?.image} alt={row.original?.name}
          onClick={()=>setImageUrl(row.original?.image)}
          className='w-10 h-10 cursor-pointer'/>
        </div>
      }
    }),
    columnHelper.accessor("category", {header: "Category",
      cell: ({row})=>{
        return(
          <>
          {row.original?.category?.map((categoryItem, index)=>{
            return <p key={categoryItem._id + "table"} className="flex flex-wrap">{categoryItem.name} </p>
          }) }
          </>
        )
      }
    }),
    columnHelper.accessor("_id", {header: "Action",
      cell: ({row})=>{
        return(
          <div className="flex items-center justify-center gap-2 ">
            <button className='text-green-600 hover:text-green-800 bg-green-100 p-0.5 rounded cursor-pointer border '
            onClick={()=>{
              setOpenEditData(true)
              setEditData(row?.original)
            }}
            >
              <ImPencil size={18}/>
            </button>
            <button
            onClick={()=>{
              setOpenConfirmBox(true)
              setDeleteSubCategoryData(row?.original)
            }}
            className='text-red-500 hover:text-red-600 bg-red-100 p-0.5 rounded cursor-pointer border '>
              <MdDelete size={20}/>
            </button>
          </div>
        )
      }
    })

  ]

=======
>>>>>>> master
>>>>>>> main
  return (
    <section className=''>
      <div className="flex justify-between items-center shadow-md p-2 bg-white">
        <h1 className="text-xl font-semibold text-neutral-700">Sub Category</h1>
        <button onClick={()=> setShowUploadSubCategoryModel(true) }
         className="border  border-amber-600 transition-colors duration-300 px-2 py-1 rounded-sm hover:bg-amber-500 cursor-pointer hover:text-white font-medium ">Add Sub Category</button>
      </div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
      <div className="">
        
      </div>

      {imageUrl && <ImageModel url={imageUrl} close={()=> setImageUrl("")} />}
      {!subCategoryData[0] && !loading ? <NoData/> : <div className=" overflow-auto  w-full max-w-[92vw] ">
        <Table data={subCategoryData} column={column} />
      </div> 
      }
      {showUploadSubCategoryModel &&  <UploadSubCategoryModel fetchData={fetchSubCategory} close={()=> setShowUploadSubCategoryModel(false)}/>}
      {openEditData && <EditSubCategoryModel data={editData} close={()=>setOpenEditData(false)} fetchData={fetchSubCategory} />}
      {openConfirmBox && <ConfirmBox close={()=> setOpenConfirmBox(false)} confirm={handleSubCategoryDelete} data={deleteSubCategoryData} />}
=======
>>>>>>> main
      {!subCategoryData[0] && !loading ? <NoData/> : 
      <div className="flex flex-wrap gap-2 md:gap-4 p-4 justify-center items-center">
        {subCategoryData && subCategoryData.map((category, index)=>{
          
          return(
            <div className="  w-full rounded max-w-34 border h-58 p-1 flex flex-col items-center justify-center border-dotted border-amber-600 hover:shadow-lg overflow-hidden  " key={index} >
              <div className="w-full  max-h-46 flex items-center  ">
              <img src={category.image} alt="" className=" object-scale-down h-full w-full rounded-t-sm " />
              </div>
              <div className="flex items-center justify-between   gap-1 px-1">
                <button onClick={()=>{
                  setOpenEditData(true)
                  setEditData(category)
                }} className="border  border-green-600 transition-colors duration-300 px-2 py-1 rounded-sm hover:bg-green-500 hover:text-white font-medium">Edit</button>
                <button onClick={()=> {
                  setOpenConfirmBox(true)
                  setDeleteCategoryData(category)
                }} className="border  border-red-600 transition-colors duration-300 px-2 py-1 rounded-sm hover:bg-red-500 hover:text-white font-medium">Delete</button>
              </div>
            </div>
          )
        })}
      </div>
      }
      {showUploadSubCategoryModel &&  <UploadSubCategoryModel fetchData={fetchSubCategory} close={()=> setShowUploadSubCategoryModel(false)}/>}
      {openEditData && <EditCategoryModel data={editData} close={()=>setOpenEditData(false)} fetchData={fetchSubCategory} />}
      {openConfirmBox && <ConfirmBox close={()=> setOpenConfirmBox(false)} confirm={handleCategoryDelete} data={deleteCategoryData} />}
<<<<<<< HEAD
=======
>>>>>>> master
>>>>>>> main
    </section>
  )
}

export default SubCategoryPage
