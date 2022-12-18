import React from 'react'
import NavBar from "./NavBar";
import Spline from '@splinetool/react-spline';
import Typed from 'react-typed';

function Hero() {
    return (
        <>
            <NavBar />
            <div className="xl:flex items-center justify-center content-center ">
                <div className="xl:w-[45%] h-screen sm:w-full w-screen sm:pl-4">
                    <Spline scene="https://prod.spline.design/X1b0t00wccvPRmmm/scene.splinecode" />
                </div>
                <div className="xl:w-[40%] text-left sm:w-full">
                    <div className='pl-4 text-3xl font-bold flex'>
                        <Typed 
                        className='xl:text-6xl sm:text-1xl font-bold text-center pl-[17%] pb-9 text-white' strings={["I'm Amey Pandit", "I'm a Student", "I'm an App Developer"]} typeSpeed={120} backSpeed={140} loop smartBackspace/>
                        
                    </div>
                    <div className='text-center'>

                    <button className='bg-[#4a15e8] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white'>Resume</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero;