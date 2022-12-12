import {BiDirections} from 'react-icons/bi';
import {BsFillTelephoneFill} from 'react-icons/bs';
import {BsMailbox} from 'react-icons/bs';

const getContactInfos = () => {
    return [
        {
            info: "Rennes, Brittany",
            icon : <BiDirections />
        },
        {
            info: "06 25 45 01 76",
            icon : <BsFillTelephoneFill />
        },
        {
            info: "josselin.douineau@gmail.com",
            icon : <BsMailbox />
        }
    ]
}

export default getContactInfos;