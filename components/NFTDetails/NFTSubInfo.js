import { AiFillEye, AiFillHeart } from 'react-icons/ai'

const style = {
 wrapper:`flex space-x-6 py-6`,
 textInfoContainer:`text-lg font-medium text-gray-400`,
 owner: `tetx-blue-500`,
 iconTextInfoContainer: `flex items-center space-x-2`,
 icon: `h-7 w-7 text-gray-400`,
 hearticon: `h-7 w-7 text-red-500`
}

const NFTSubInfo = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.textInfoContainer}>
                Owned By
                <span className={style.owner}> GoogleImages</span>
            </div>
            <div className={style.iconTextInfoContainer}>
                <AiFillEye className={style.icon} />
                <div className={style.textInfoContainer}>4.4K Views</div>
            </div>
            <div className={style.iconTextInfoContainer}>
                <AiFillHeart className={style.hearticon} />
                <div className={style.textInfoContainer}> 500 Favorites </div>
            </div>
        </div>

    )
}

export default NFTSubInfo