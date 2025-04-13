import React, { useEffect, useState } from 'react'
import AxiosToastError from '../utils/AxiosToastError';
import Axios from '../utils/Axios';
import SummeryApi from '../common/SummeryApi';
import { useParams } from 'react-router-dom';
import Loader from '../components/Loading';
import ProductCard from '../components/ProductCard';

const ProductListPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const params = useParams()
  const allSubCategory = useSelector((state) => state?.product?.allSubCategory);
  const [displaySubCategory, setDisplaySubCategory] = useState()


  const subCategory = params?.subCategory?.split("-");
  const subCategoryName = subCategory?.slice(0, subCategory?.length - 1)?.join(" ")



  const fetchProductList = async () => {
    const categoryId = params.category.split("-").slice(-1)[0]
    const subCategoryId = params.subCategory.split("-").slice(-1)[0]
    try {
      setLoading(true)
      const response = await Axios({
        ...SummeryApi.getProductByCategoryAndSubCategory,
        data: {
          categoryId,
          subCategoryId,
          page,
          limit: 10
        }
      })
      if (response.data?.success) {
        if (response?.data?.page == 1) {
          setData(response.data?.data);
        } else {
          setData([...data, response.data?.data])
        }
      }
    } catch (error) {
      AxiosToastError(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProductList()
  }, [])

  useEffect(() => {
    const sub = allSubCategory.filter(s => {
      const filterData = s.category.some(el => {
        return el._id === categoryId
      })
      return filterData ? filterData : false
    })
    setDisplaySubCategory(sub);
  }, [params, allSubCategory]);
  return (
    <section className='sticky top-24 lg:top-20'>
      <div className="container sticky top-24 w-full  mx-auto flex  ">
        {/* sidebar */}
        <div className=" h-[79vh] overflow-y-scroll max-w-40 grid gap-4 p-1  sm:max-w-52 md:max-w-80 w-full customScrollbar">
          {
            displaySubCategory.map((s, index) => {
              return (
                <div key={index} className="w-full p-2 bg-white lg:flex lg:w-full lg:h-16 box-border ">
                  <div className="w-fit mx-auto max-w-28 lg:mx-0 bg-white rounded box-border ">
                    <img src={s.image} alt={s.name} 
                    className='w-14 h-full object-scale-down lg:w-12  ' />
                  </div>
                  <p className="-mt-6 text-xs text-center">{s.name} </p>
                </div>
              )
            })
          }
        </div>




        {/* product list */}
        <div className=" ">
          <div className="bg-white shadow-md p-2 w-full ">
            <h2>{subCategoryName}</h2>
          </div>
          <div className="">
            <div className="">
              {loading && (<Loader />)}
            </div>
            <div className="">
              {
                data.map((product, index) => {
                  return (
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 ">
                      <ProductCard data={product}
                        key={product?._id + "productSubCategory" + index}
                      />
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductListPage