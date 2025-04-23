import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Success = () => {
    const location = useLocation();
    console.log(location.state.text, "location")

    return (
        <section className="mt-2 bg-white">
            <div className="container mx-auto w-full flex justify-center">
                <div className="w-full flex-col gap-4 rounded max-w-lg flex p-4 items-center justify-center bg-green-200">
                    <p className="font-semibold text-green-800 text-xl text-center">
                        {Boolean(location.state?.text) ? location.state?.text : "Payment"} has been prossed successfully!
                    </p>
                    <Link to={"/"} className='border py-1 px-2 rounded text-green-900 hover:text-white hover:bg-green-900 transition-colors duration-200 font-medium'>Go to Home</Link>
                </div>
            </div>
        </section>
    )
}

export default Success
