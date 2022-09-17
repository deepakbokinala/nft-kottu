import {GrTextAlignLeft} from 'react-icons/gr'
import { BsFillBookFill } from 'react-icons/bs'
import Dropdown from './Dropdown'

const style = {
    wrapper: `flex flex-col divide-black rounded-lg overflow-hidden border border-gray-500`,
    icon: `h-5 w-5 text-gray-500`,
}

const NFTDetails = () => {
    const dropdownData = [
        {
            title: 'Description',
            icon: <GrTextAlignLeft className={style.icon}/>,
        },
        {
            title: 'Properties',
            icon: <BsFillBookFill className={style.icon} />
        }
    ]

    return (
        <div className={style.wrapper}>
            {dropdownData.map((item, index) => (
                <Dropdown key={index} title={item.title} icon={item.icon}/>
            ))}
        </div>
    )
}

export default NFTDetails