import React from 'react'
import Spline from '@splinetool/react-spline';

function Mhtcet() {
    return (
        <div className="xl:flex items-center justify-center content-center ">
            <div className="xl:w-[45%] pt-0 h-screen sm:w-full w-screen sm:pl-4">
                <Spline scene="https://prod.spline.design/RfuF5v0bnAskcZOi/scene.splinecode" />
            </div>
            <div className="xl:w-[40%]  text-left sm:w-full">
                <h2 className='text-3xl font-bold pb-6 uppercase pl-[20%] text-white' >MHTCET JEE NEET APP</h2>
                <p className='font-light text-gray-500 dark:text-gray-400 pl-[20%] text-left'>
                    Built an educational app for MHTCET, JEE, NEET Aspirants where they can find past year question papers with
                    solution and PDf’s of many other Books.

                </p>
                <a href="https://play.google.com/store/apps/details?id=com.ameypandit.mhtcetneetapp" target="_blank" rel="noreferrer">
                    <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 mt-6 ml-[20%] hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Check Out Here !</button>
                </a>

            </div>
        </div>
    )
}

export default Mhtcet