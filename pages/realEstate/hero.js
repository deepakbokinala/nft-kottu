import React from 'react'
import Slider from '../../components/ImageSlider'
import Link from 'next/link'
import Image from 'next/image'

const style = {
    wrapper: `relative`,
    container: `before:content-[''] before:bg-red-500 before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-aa-1 before:bg-cover before:bg-center before:opacity-30 before:blur`,
    contentWrapper: `flex h-screen relative justify-center flex-wrap items-center`,
    copyContainer: `w-1/2`,
    title: `relative text-white text-[46px] font-semibold`,
    description: `text-[#8a939b] container-[400px] text-2xl mt-[0.8rem] mb-[2.5rem]`,
    ctaContainer: `flex`,
    accentedButton: ` relative text-lg font-semibold px-12 py-4 bg-yellow-500 rounded-lg mr-5 text-[#363840] hover:bg-yellow-400 cursor-pointer`,
    button: ` relative text-lg font-semibold px-12 py-4 bg-[#363840] rounded-lg mr-5 text-[#e4e8ea] hover:bg-[#4c505c] cursor-pointer`,
    cardContainer: `rounded-[3rem]`,
    infoContainer: `h-20 bg-[#313338] p-4 rounded-b-lg flex items-center text-white`,
    author: `flex flex-col justify-center ml-4`,
    name: ``,
    infoIcon: `flex justify-end items-center flex-1 text-[#8a939b] text-3xl font-bold`,
}

const Hero = () => {
    return (
        // <div className={style.wrapper}>
        //     <div className={style.container}>
        //         <div className={style.contentWrapper}>
        //             <div className={style.copyContainer}>
        //                 <div className={style.title}>
        //                     Own Your Allu Arjun NFT Today!
        //                 </div>
        //                 <div className={style.description}>
        //                     Why buy an NFT from the Allu Arjun Collections?
        //                 </div>
        //                 <div className={style.ctaContainer}>
        //                     <Link href = '/benefits'>
        //                         <button className={style.accentedButton}>See Benefits</button>
        //                     </Link>
        //                 </div>
        //             </div>
        //             <div className={style.cardContainer}>
        //                 <Slider />
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div>
            <div className='content-center v-screen place-items-center'>
                <h1 className='text-3xl text-yellow-400 font-semibold place-items-center'>
                    RealEstate page
                </h1>
            </div>
            <div class="space-y-24">
                <div class="grid grid-cols-4 gap-4  grid place-items-center space-y-10 ">
                    <div>
                        <Image height={200} width={200} src='/weth-logo.svg' alt='weth' />
                    </div>

                    <div><Image height={200} width={200} src='/weth-logo.svg' alt='weth' /></div>
                    <div>
                        <Image height={200} width={200} src='/weth-logo.svg' alt='weth' />
                    </div>

                    <div><Image height={200} width={200} src='/weth-logo.svg' alt='weth' /></div>


                </div>
                <div class="grid grid-cols-1 gap-4  grid place-items-center space-y-10 ">
                    <div>
                        <Image height={200} width={200} src='/weth-logo.svg' alt='weth' />
                    </div>

                </div>
                <div class="grid grid-cols-4 gap-4  grid place-items-center space-y-10 ">
                    <div>
                        <Image height={200} width={200} src='/weth-logo.svg' alt='weth' />
                    </div>

                    <div><Image height={200} width={200} src='/weth-logo.svg' alt='weth' /></div>
                    <div>
                        <Image height={200} width={200} src='/weth-logo.svg' alt='weth' />
                    </div>

                    <div><Image height={200} width={200} src='/weth-logo.svg' alt='weth' /></div>


                </div>
                <div class="grid grid-cols-3 gap-4  grid place-items-center space-y-10 ">
                    <div>
                        <Image height={200} width={200} src='/weth-logo.svg' alt='weth' />
                    </div>

                    <div><Image height={200} width={200} src='/weth-logo.svg' alt='weth' /></div>
                    <div>
                        <Image height={200} width={200} src='/weth-logo.svg' alt='weth' />
                    </div>

                </div>
                <div></div>
            </div>

        </div>
    )
}

export default Hero