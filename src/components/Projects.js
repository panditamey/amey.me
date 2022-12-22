import React from 'react'
import Spline from '@splinetool/react-spline';
import FarmerBuddy from './projects/FarmerBuddy';
import Docify from './projects/Docify';
import ExplorAr from './projects/ExplorAr';
import ItConnect from './projects/ItConnect';
import Mhtcet from './projects/Mhtcet';

function Projects() {
    return (
        <>
            <h1 className='text-4xl font-bold pb-6 uppercase justify-center text-center text-white projects' >My Projects</h1>
            <ItConnect/>
            <FarmerBuddy/>
            <Docify/>
            <ExplorAr/>
            <Mhtcet/>

        </>
    )
}

export default Projects