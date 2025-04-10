import React from 'react'
import { IoMdClose } from 'react-icons/io'

const ImageModel = ({url, close}) => {
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 bg-neutral-900/70 w-full flex justify-center items-center ">
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 48281d2a96db3e1806e058228bf00ac89c2990c6
        <div className="bg-white max-w-md flex relative w-full justify-center items-center max-h-[75vh]  z-40 rounded h-full ">
            <button onClick={close} className=' w-fit top-5 absolute right-5 border p-1 rounded hover:bg-orange-500 hover:text-white hover:shadow-md cursor-pointer block '> 
                <IoMdClose/>
             </button>
            <img src={url} alt="full screen" className='w-full  h-full object-scale-down  max-h-[70vh] ' />
<<<<<<< HEAD
=======
        <div className="bg-white max-w-md  w-full justify-center items-center max-h-[75vh] z-40 rounded h-full ">
            <button onClick={close} className=' w-fit ml-auto m-5 border p-1 rounded hover:bg-gray-100 hover:shadow-md cursor-pointer block '> 
                <IoMdClose/>
             </button>
            <img src={url} alt="full screen" className='w-full h-full object-scale-down' />
>>>>>>> 47ed607a7eace895734d1871ced19da3b4feec70
=======
>>>>>>> 48281d2a96db3e1806e058228bf00ac89c2990c6
        </div>
    </div>
  )
}

export default ImageModel