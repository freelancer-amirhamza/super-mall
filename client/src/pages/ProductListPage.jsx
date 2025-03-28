import React from 'react'

const ProductListPage = () => {
  return (
    <section className='sticky top-24 lg:top-20'>
      <div className="container sticky top-24 w-full  mx-auto flex  ">
        {/* sidebar */}
        <div className="bg-green-500 min-h-[79vh] max-w-40  sm:max-w-52 md:max-w-80 w-full ">
          sub category
        </div>

        {/* product list */}
        <div className="bg-amber-500 w-full ">
          Product
        </div>
      </div>
    </section>
  )
}

export default ProductListPage