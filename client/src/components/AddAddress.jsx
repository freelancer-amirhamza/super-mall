import React from 'react'
import { useForm } from "react-hook-form";
const AddAddress = () => {
    const { register, handleSubmit,formState: { errors }} = useForm();
    const onSubmit = data => console.log(data, "data");
    return (
        <section className="bg-neutral-900/90 top-0 bottom-0 left-0 right-0 fixed h-screen overflow-y-scroll ">
            <div className="w-full max-w-md rounded bg-white p-4 mx-auto mt-2 ">
                <h2 className="font-semibold ">Add Address</h2>
                <form className="grid " onSubmit={handleSubmit(onSubmit)} >
                    <div className="grid py-2">
                        <label htmlFor="addressLine">Address Line:</label>
                        <input type="text"
                            className='border p-2 rounded outline-amber-400'
                            name="addressLine"
                            placeholder='Enter Your Address... '
                            {...register("addressLine", { required: true })}
                            id="addressLine" />
                        {errors?.addressLine && <span className="text-orange-600">This field is required</span>}
                    </div>
                    <div className="grid py-2">
                        <label htmlFor="city">City:</label>
                        <input type="text"
                            className='border p-2 rounded outline-amber-400'
                            name="city"
                            placeholder='Enter Your City Name... '
                            {...register("city", { required: true })}
                            id="city" />
                        {errors?.city && <span className="text-orange-600">This field is required</span>}
                    </div>
                    <div className="grid py-2">
                        <label htmlFor="state">State:</label>
                        <input type="text"
                            className='border p-2 rounded outline-amber-400'
                            name="state"
                            placeholder='Enter Your State Name... '
                            {...register("state", { required: true })}
                            id="state" />
                        {errors?.state && <span className="text-orange-600">This field is required</span>}
                    </div>
                    <div className="grid py-2">
                        <label htmlFor="pinCode">Pincode:</label>
                        <input type="text"
                            className='border p-2 rounded outline-amber-400'
                            name="pinCode"
                            placeholder='Enter Your Pincode... '
                            {...register("pinCode", { required: true })}
                            id="pinCode" />
                        {errors?.pinCode && <span className="text-orange-600">This field is required</span>}
                    </div>
                    <div className="grid py-2">
                        <label htmlFor="country">Country:</label>
                        <input type="text"
                            className='border p-2 rounded outline-amber-400'
                            name="country"
                            placeholder='Enter Your Country Name... '
                            {...register("country", { required: true })}
                            id="country" />
                        {errors?.country && <span className="text-orange-600">This field is required</span>}
                    </div>
                    <div className="grid py-2">
                        <label htmlFor="phone">Phone No:</label>
                        <input type="text"
                            className='border p-2 rounded outline-amber-400'
                            name="phone"
                            placeholder='Enter Your Phone Number... '
                            {...register("phone", { required: true })}
                            id="phone" />
                        {errors?.phone && <span className="text-orange-600">This field is required</span>}
                    </div>
                    <input type="submit" className='border p-2 cursor-pointer  rounded bg-green-600 text-white font-semibold hover:bg-green-700 lg:text-xl'/>

                </form>
            </div>
        </section>
    )
}

export default AddAddress
