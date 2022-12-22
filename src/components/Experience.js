import React from 'react'

function Experience() {
    return (
        <div className='mt-[22%] pb-20 bg-[#190061] justify-center text-center text-white'>
            <div>
                <h1 className='text-4xl font-bold pb-6 uppercase ' >Experience</h1>
                {/* <div class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"> */}
                {/* <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                    <p class="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p> */}
                {/* </div> */}

                <div class="container">
                    <div class="flex flex-col md:grid grid-cols-12 text-gray-50">

                        <div class="flex md:contents">
                            <div class="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                                <div class="h-full w-6 flex items-center justify-center">
                                    <div class="h-full w-1 bg-[#4a15e8] pointer-events-none"></div>
                                </div>
                                <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-[#4a15e8] shadow text-center">
                                    <i class="fas fa-check-circle text-white"></i>
                                </div>
                            </div>
                            <div class="bg-[#4a15e8] col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
                                <h2 class="text-lg mb-1">Android Developer Intern</h2>
                                <h3 class="font-semibold text-lg mb-1">TechqKonnect</h3>
                                <h3 class="font-semibold text-lg mb-1 inline-flex"><img className='mr-4 ml-4' src={"./icons/calendar.png"} height={15} width={25} />October 2021 - November 2021</h3>

                            </div>
                        </div>

                        {/* <div class="flex md:contents">
                            <div class="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                                <div class="h-full w-6 flex items-center justify-center">
                                    <div class="h-full w-1 bg-green-500 pointer-events-none"></div>
                                </div>
                                <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-green-500 shadow text-center">
                                    <i class="fas fa-check-circle text-white"></i>
                                </div>
                            </div>
                            <div class="bg-green-500 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
                                <h3 class="font-semibold text-lg mb-1">comp2</h3>
                                <p class="leading-tight text-justify">
                                </p>
                            </div>
                        </div> */}

                        {/* <div class="flex md:contents">
                            <div class="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                                <div class="h-full w-6 flex items-center justify-center">
                                    <div class="h-full w-1 bg-red-500 pointer-events-none"></div>
                                </div>
                                <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-red-500 shadow text-center">
                                    <i class="fas fa-times-circle text-white"></i>
                                </div>
                            </div>
                            <div class="bg-red-500 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
                                <h3 class="font-semibold text-lg mb-1 text-gray-50">comp3</h3>
                                <p class="leading-tight text-justify">
                                </p>
                            </div>
                        </div> */}

                        {/* <div class="flex md:contents">
                            <div class="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                                <div class="h-full w-6 flex items-center justify-center">
                                    <div class="h-full w-1 bg-gray-300 pointer-events-none"></div>
                                </div>
                                <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-gray-300 shadow text-center">
                                    <i class="fas fa-exclamation-circle text-gray-400"></i>
                                </div>
                            </div>
                            <div class="bg-gray-300 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
                                <h3 class="font-semibold text-lg mb-1 text-gray-400">comp4</h3>
                                <p class="leading-tight text-justify">

                                </p>
                            </div>
                        </div> */}

                    </div>
                </div>
            </div>


        </div>
    )
}

export default Experience