import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
const Footer = () => {
    return (
        <footer>
            <div className="border-t w-full lg:flex-row lg:justify-between flex flex-col items-center gap-3 pt-2 container mx-auto">
                <p className="font-semibold   ">&copy; All Copyright reserved {new Date().getFullYear()}</p>
                <ul className='flex  items-center justify-center gap-5 text-2xl'>
                    <Link to={'/'} className='hover:text-primary '>
                    <FaFacebookSquare />
                    </Link>
                    <Link to={'/'} className='hover:text-primary '>
                    <FaInstagramSquare />
                    </Link>
                    <Link to={'/'} className='hover:text-primary '>
                    <FaLinkedin />
                    </Link>
                </ul>
            </div>
        </footer>
    )
}

export default Footer

