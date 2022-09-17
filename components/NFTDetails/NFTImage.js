import Image from 'next/image'
import { AiOutlineHeart } from 'react-icons/ai'

const style = {
    wrapper: `rounded-lg border-transparent bg-[#313339] `,
    nftHeader: `flex items-center justify-between p-4`,
    likesContainer: `flex items-center justify-end space-x-2`,
    heartIcon: `h-5 w-5 text-red-500`,
    likesCount: `text-sm font-semibold text-gray-400`,
    nftImage: `rounded-b-lg object-cover`
}

const NFTImage = ({image}) => {
    return (
        <div className={style.wrapper}>
            <div className={style.nftHeader}>
                <Image height = {20} width = {20} src='/weth-logo.svg' alt='weth' />
            <div className={style.likesContainer}>
                <AiOutlineHeart className = {style.heartIcon} />
                <div className = {style.likesCount}>200</div>
            </div>
            </div>
            <div>
                {image&&<Image className= "rounded-b-lg object-cover" src= {image} alt= "nft" height = {400} width = {320} />}
            </div>
        </div>
    )
}

export default NFTImage