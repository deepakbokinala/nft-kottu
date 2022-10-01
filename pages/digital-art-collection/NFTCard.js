import Image from "next/image"
import { BiHeart } from 'react-icons/bi'

const style = {
    wrapper: `relative flex cursor-pointer my-10 mx-15 overflow-hidden
    flex-col rounded-2xl bg-[#303339] shadow-lg transition-all duration-300 
    hover:shadow-2xl`,
    nftImage: ` w-full rounded-t-lg object-cover`,
    imageContainer: `h-3/4 w-full overflow-hidden flex justify-center items-center`,
    nftLowerContainer: `flex h-1/4 flex-col justify-between p-4`,
    nftInfoContainer: `flex justify-between`,
    collectionTitle: `text-sm text-gray-400`,
    nftTitle: `text-sm font-bold text-gray-200`,
    priceContainer: `flex flex-col items-end justify-center space-y-1`,
    priceTitle: `text-xs font-light text-gray-200`,
    priceValue: `text-pink-300`,
    wethImageContainer: `flex items-center justify-end space-x-2`,
    likesContainer: `flex items-center justidy-end space-x-2`,
    heartIcon: `h-3.5 w-3.5 text-red-500 text-xl mr-2`,
    likeCounter: `text-xs text-[#8a939b]`,
}

const NFTCard = ({ listing }) => {

    return (
        <div className={style.wrapper}>
            <div className={style.imageContainer}>
                <Image
                    className={style.nftImage}
                    src={listing.asset.image}
                    height={400}
                    width={300}
                    alt='nft'
                />

            </div>

            <div className={style.nftLowerContainer}>
                <div className={style.nftInfoContainer}>
                    <div>
                        {listing.asset.collection && (
                            <div className={style.collectionTitle}>
                                {listing.asset?.collection?.name}
                            </div>
                        )}

                        {
                            listing.asset && <div className={style.nftTitle}>
                                {listing.asset.name}
                            </div>
                        }


                    </div>
                    <div className={style.priceContainer}>
                        <div className={style.priceTitle}>Buy At</div>
                        <div className={style.wethImageContainer}>
                            <Image
                                height={16}
                                width={16}
                                src='/weth-logo.svg'
                                alt='weth'
                            />
                            <div className={style.priceValue}>
                                {listing.buyoutCurrencyValuePerToken?.displayValue}
                            </div>
                        </div>
                    </div>

                </div>
                <div className={style.likesContainer}>
                    <BiHeart className={style.heartIcon} />
                    {
                        listing.asset && <div className={style.likeCounter}>
                            {listing.asset?.stats?.favorites ?? 0}
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default NFTCard
