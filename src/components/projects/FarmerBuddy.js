import React from 'react'
import Spline from '@splinetool/react-spline';


function FarmerBuddy() {
    return (
        <div className="xl:flex items-center justify-center content-center ">
            <div className="xl:w-[40%]  text-left sm:w-full">
                <h2 className='text-3xl font-bold pb-6 uppercase pl-[20%] text-white' >Farmer Buddy</h2>
                <p className='font-light text-gray-500 dark:text-gray-400 pl-[20%] text-left'>
                    Built an app for Farmers Where they can buy, sell, ask for
                    donations, Chat with Other Farmers and NGOs, Watch
                    New Farming Techniques with Crop Disease Detection
                    Feature.
                </p>
                <a href="https://drive.google.com/file/d/1JGnn1MBA2eR7kQdj4kNjgm2qT5v951f_/view?usp=sharing" target="_blank" rel="noreferrer">
                    <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 mt-6 ml-[20%] hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Check Out Here !</button>
                </a>

            </div>

            <div className="xl:w-[45%] pt-0 h-screen sm:w-full w-screen sm:pl-4">
                <Spline scene="https://prod.spline.design/B2m5vbnDoAxZzr6X/scene.splinecode" />
            </div>
        </div>
    )
}

export default FarmerBuddy