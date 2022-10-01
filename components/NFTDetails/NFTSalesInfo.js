import {BsCreditCard2FrontFill, BsFillTagFill} from 'react-icons/bs'
import { AiOutlineQuestionCircle, AiOutlineClockCircle } from 'react-icons/ai'
import Image from 'next/image'

const style = {
    wrapper: `flex flex-col divide-black border-black rounded-lg`,
    header: `flex items-center justify-between rounded-t-lg px-6 py-4 bg-[#262a30]`,
    headerContent: `flex items-center space-x-2`,
    headerIcon: `h-6 w-6 text-white`,
    greyText: `text-gray-400`,
    mainContainer: `space-y-4 rounded-b-lg px-6 py-4 bg-[#313339]`,
    priceInfoContainer: `space-y-1`,
    mediumFont: `font-medium`,
    priceContainer: `flex items-center space-x-2`,
    price: `text-3xl font-bold text-gray-200`,
    buttonsContainer: `flex space-x-4`,
    button: `flex w-[14rem] items-center cursor-pointer justify-center space-x-4 rounded-lg py-2 text-white`,
    purchaseButton: `bg-yellow-500 hover:bg-yellow-400`,
    offerButton: `border border-gray-800 bg-[#363840] hover:bg-gray-700`,
    buttonIcon: `h-6 w-6`
}

import { all_elections } from '../service';
import { useEffect, useState } from 'react';

const NFTSalesInfo = ({price, buyNFT}) => {

    // const [b , setb ] = useState(0);
    var b =0
  
    // useEffect(() => {
    //   }, [b]);

    function test2(){
        // setb(1);
        all_elections().then((res)=>{console.log(res);});

        console.log(b , "buy now");
    }

    console.log(price)
    return(
        <div className={style.wrapper}> 
            <div className={style.header}>
                <div className={style.headerContent}>
                    <AiOutlineClockCircle className={`${style.greyText} ${style.headerIcon}`} />
                    <div className={style.greyText}>Sale Ends December 31st, 2022 at 11:50pm IST</div>
                </div>
                    <AiOutlineQuestionCircle className={style.headerIcon} />
                </div>
                
                <div className = {style.mainContainer}>
                    <div className= {style.priceInfoContainer}>
                        <div className= {`${style.greyText} ${style.mediumFont}`}>Buy At</div>
                        <div className= {style.priceContainer}>
                            <Image src= '/weth-logo.svg'
                                    width = {24}
                                    height = {24}
                                    alt = 'weth'
                            />
                            <span className={style.price}>{price}</span>
                        </div>
                    </div>
                    <div className={style.buttonsContainer}>
                        <div className = {`${style.button} ${style.purchaseButton}`}
                             onClick = {buyNFT}
                        >
                            <BsCreditCard2FrontFill className={style.buttonIcon}/>
                            <span className="text-lg font-semibold" onClick={test2()} >Buy Now</span>
                        </div>
                        <div className={`${style.button} ${style.offerButton}`}>
                            <BsFillTagFill className={style.buttonIcon} />
                            <span className='text-lg font-semibold'>Make Offer</span>
                        </div>
                    </div>  
                </div>
            </div>
        //</div>
    )
}

export default NFTSalesInfo
