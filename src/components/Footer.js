import React from 'react'

function Footer() {
    return (
        <>
            <div className='justify-center text-center contact'>
                <a href="mailto:amey.pandit01@gmail.com" target="_blank" rel="noreferrer">
                    <button type="button" class="text-white font-bold bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Message Me Here @</button>
                </a>
            </div>
    <span class="block text-md text-white font-bold sm:text-center p-8"><a href="https://www.linkedin.com/in/ameypandit/">Site By Amey Pandit. </a>
    </span>

        </>
    )
}

export default Footer