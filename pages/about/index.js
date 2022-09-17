import React from 'react'
import Header from "../../components/Header"
import Head from 'next/head'
import Example from '../../components/Modal'
const About = () => {
    
    return (
        <div className='overflow-hidden'>
            <Head>
                    <title>About Us</title>
                    <link rel="icon" href="/bunny.png" />

            </Head>
            <Header />
            <div className='flex flex-col items-center justify-center h-screen w-screen'>
            <div className='text-3xl text-yellow-300 font-semibold'>
                About Page Coming Soon
            </div>
            </div>
            
        </div>
    )
}

export default About