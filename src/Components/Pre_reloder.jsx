import React from 'react'
import reloder_img from '../assets/png/reloder_img.png'

const Pre_reloder = () => {
    return (
        <div>
            <div className='min-vh-100  d-flex justify-content-center align-items-center bg-color position-fixed w-100 top-0 z-3 start-0' id='preloader'>
                <div><img className='w-200px loader' src={reloder_img} alt="logo" /></div>
            </div>
        </div>
    )
}

export default Pre_reloder