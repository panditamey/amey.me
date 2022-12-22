import React from 'react';

// import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome'
// import { faHome , } from "@fortawesome/free-solid-svg-icons";
// import { } from "@fortawesome/free-brands-svg-icons	";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faJava } from '@fortawesome/free-brands-svg-icons';

function Skills() {
    return (
        <>
            <div className='md:p-20 md:h-5 sm:p-20   justify-center text-center text-white'>
                <div>
                    <h1 className='text-4xl font-bold pb-6 uppercase ' >My Skills</h1>
                </div>
                <div className='xl:px-[35%] lg:px-[35%] sm:px-4 md:px-6 pb-10'>
                    <div className='inline-flex flex-wrap items-center justify-center content-center'>
                        <h1><img className='mr-4 ml-4' src={"./icons/java.png"} height={25} width={45} />Java</h1>
                        <h1><img className='mr-4 ml-4' src={"./icons/python.png"} height={25} width={45} />Python</h1>
                        <h1><img className='mr-4 ml-4' src={"./icons/javascript.png"} height={25} width={45} />JavaScript</h1>
                    </div>
                    <div className='inline-flex flex-wrap items-center justify-center content-center pt-10'>
                        <h1><img className='mr-4 ml-4' src={"./icons/flutter.png"} height={25} width={45} />Flutter</h1>
                        <h1><img className='mr-4 ml-4' src={"./icons/android.png"} height={25} width={45} />Android</h1>
                        <h1><img className='mr-4 ml-4' src={"./icons/firebase.png"} height={25} width={45} />Firebase</h1>
                        <h1><img className='mr-4 ml-4' src={"./icons/node.png"} height={25} width={45} />Node</h1>
                        <h1><img className='mr-4 ml-4' src={"./icons/react.png"} height={25} width={45} />React</h1>
                    </div>
                    <div className='inline-flex flex-wrap items-center justify-center content-center pt-10'>
                        <h1><img className='mr-4 ml-4' src={"./icons/git.png"} height={25} width={45} />Git</h1>
                        <h1><img className='mr-4 ml-4' src={"./icons/sql.png"} height={25} width={45} />SQL</h1>
                        <h1><img className='mr-4 ml-4' src={"./icons/mongodb.png"} height={25} width={45} />MongoDB</h1>
                        <h1><img className='mr-4 ml-4' src={"./icons/aws.png"} height={25} width={45} />AWS</h1>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Skills