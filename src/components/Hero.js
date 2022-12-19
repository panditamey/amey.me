import React from 'react'
import Spline from '@splinetool/react-spline';
import Typed from 'react-typed';


function Hero() {

    return (
        <>
            <div className="xl:flex items-center justify-center content-center ">
                <div className="xl:w-[45%] pt-0	 h-screen sm:w-full w-screen sm:pl-4">
                    <Spline scene="https://prod.spline.design/X1b0t00wccvPRmmm/scene.splinecode" />
                </div>
                <div className="xl:w-[40%] text-left sm:w-full">
                    <div className='pl-4 text-3xl font-bold flex'>
                        <Typed
                            className='xl:text-6xl sm:text-1xl font-bold text-center pl-[17%] pb-9 text-white' strings={["I'm Amey Pandit", "I'm a Student", "I'm an App Developer"]} typeSpeed={120} backSpeed={140} loop smartBackspace />

                    </div>
                    <div className='text-center'>
                        <a href="https://resume.amey.me/" target="_blank" rel="noreferrer">
                            <button className='text-1xl text-white w-[145px] rounded-md my-6 mx-auto py-3 bg-[#4a15e8] border-[#4a15e8] hover:ring-2 focus:outline-none hover:ring-gray-100 font-medium px-5 text-center inline-flex items-center  mr-2 mb-2'>
                                <img src="\icons\cv.png" style={{ width: "33px", height: "24px", paddingRight: "12px" }} />
                                Resume</button>
                        </a>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Hero;