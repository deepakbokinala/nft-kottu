import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo  from '../assets/bunny.png'
import { AiOutlineSearch } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { MdOutlineAccountBalanceWallet } from 'react-icons/md'
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useAddress, useDisconnect } from '@thirdweb-dev/react'


const style = {
    wrapper: `bg-[#04111d] w-screen px-[1.2rem] py-[0.8rem] flex `,
    logoContainer: `flex items-center cursor-pointer`,
    logoText: ` ml-[0.8rem] text-yellow-500 font-semibold text-2xl`,
    searchBar: `flex flex-1 mx-[0.8rem] w-max-[520px] items-center bg-[#363840] rounded-full hover:bg-[#4c505c]`,
    searchIcon: `text-[#8a939b] mx-3 font-bold text-lg`,
    searchInput: `h-[2.6rem] w-full border-0 bg-transparent outline-0 ring-0 px-2 pl-0 text-[#e6e8eb] placeholder:text-[#8a939b]`,
    headerItems: ` flex items-center justify-end`,
    headerItem: `text-white px-4 font-semibold text-[1.1rem] text-[#c8cacd] hover:text-white cursor-pointer`,
    headerIcon: `text-[#8a939b] text-3xl font-black px-4 hover:text-white cursor-pointer`,
}


const Header = () =>{
    const address = useAddress()
    const disconnect = useDisconnect()
    const router = useRouter();

    
    return (
        <div className={style.wrapper}>
            <Link href="/">
                <div className={style.logoContainer}>
                    <Image src={logo} className="rounded-full" height={50} width={50}/>
                    <div className={style.logoText}>NFT Kottu</div>
                </div>
            </Link>

            <div className={style.searchBar}>
                <div className={style.searchIcon}>
                    <AiOutlineSearch />
                </div>
                <input
                    className={style.searchInput}
                    placeholder="Search for items and collections"
                />
            </div>
            
            <div className={style.headerItems}>
                <Link href="/collections">
                    <div className={style.headerItem}>Collections </div>
                </Link>
                <Link href="/live-auctions">
                <div className={style.headerItem}>Live Auctions</div>
                </Link>
                <div className={style.headerItem}>Create</div>
                <Link href="/about">
                <div className={style.headerItem}>About Us</div>
                </Link>
                <div className={style.headerIcon}>
                    <CgProfile />
                </div>
                <div className={style.headerIcon}>
                    <MdOutlineAccountBalanceWallet />
                </div>
                <div>
                    <button
                        onClick={disconnect}
                        className="text-[#4111d] px-5 py-2 text-[1rem] font-semibold rounded-full bg-yellow-500 hover:bg-yellow-400 "
                        type='button'
                        
                    >
                    Logout 
                    </button>
                </div>            
            </div>
            
        </div>
    )
}

export default Header