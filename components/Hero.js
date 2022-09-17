import React from 'react'
import Link from 'next/link'

const style = {
    wrapper: `relative`,
    container: `before:content-[''] before:bg-red-500 before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[url('https://www.creativehatti.com/wp-content/uploads/2021/03/Allu-Arjun-Indian-South-Actor-Portrait-Vector-Creative-Freebies-Thumbnail-Small.jpg')] before:bg-cover before:bg-center before:opacity-40 before:blur`,
    contentWrapper: `flex h-screen relative justify-center flex-wrap items-center`,
    copyContainer: `w-1/3`,
    title: `relative text-white text-[46px] font-semibold`,
    description: `text-[#8a939b] container-[400px] text-2xl mt-[0.8rem] mb-[2.5rem]`,
    ctaContainer: `flex`,
    accentedButton: ` relative text-lg font-semibold px-12 py-4 bg-yellow-500 rounded-lg mr-5 text-[#363840] hover:bg-yellow-400 cursor-pointer`,
    button: ` relative text-lg font-semibold px-12 py-4 bg-[#363840] rounded-lg mr-5 text-yellow-500 hover:bg-[#4c505c] cursor-pointer`,
    cardContainer: `rounded-[3-rem] bg-transparent p-8 rounded-b-xl  `,
    infoContainer: `h-30 bg-[#313338] p-4 rounded-b-xl flex items-center text-white`,
    author: `flex flex-col justify-center ml-4`,
    name: `text-yellow-300`,
    infoIcon: `flex justify-end items-center flex-1 text-[#8a939b] text-3xl font-bold`,
  }
  
const Hero = () => {
    return (
      <div className={style.wrapper}>
        <div className={style.container}>
          <div className={style.contentWrapper}>
            <div className={style.copyContainer}>
              <div className={style.title}>
                Discover, collect, and sell extraordinary NFTs of Telugu Movie Legends
              </div>
              <div className={style.description}>
                Tollywood&apos;s first and largest NFT marketplace
              </div>
              <div className={style.ctaContainer}>
                <Link href = '/collections'>
                    <button className={style.accentedButton}>Explore</button>
                </Link>
                <Link href = '/about'>
                    <button className={style.button}>About</button>
                </Link>
              </div>
            </div>
            <div className={style.cardContainer}>
              <img
                className="rounded-t-3xl"
                src="https://www.creativehatti.com/wp-content/uploads/2021/03/Allu-Arjun-Indian-South-Actor-Portrait-Vector-Creative-Freebies-Thumbnail-Small.jpg"
                alt=""
                height={600} width={600}
              />
              <div className={style.infoContainer}>
                <img
                  className="h-[3rem] rounded-full p-1 ring-2 ring-gray-100"
                  src="https://as2.ftcdn.net/v2/jpg/01/16/45/35/1000_F_116453577_I35yZOAvDshOTGZXVpEoTWTYdzjBDcsL.jpg"
                  alt="Bordered Avatar"
                />
                <div className={style.author}>
                  <div className={style.name}>Memu Fans Ikkada !</div>
                  <a
                    className="text-[#1868b7]"
                    href="http://localhost:3000/assets/0x87e9c2a68DbdD415D185C6017d13EED6d390e474/0"
                  >
                    Thaggedhe Le !
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    )
}

export default Hero