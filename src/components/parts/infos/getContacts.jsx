import {BiDirections} from 'react-icons/bi';
import {BsFillTelephoneFill} from 'react-icons/bs';
import {BsMailbox} from 'react-icons/bs';

const getContacts = () => {
    return {
            french: [
                {
                    info: "Rennes, Bretagne",
                    icon : <BiDirections />
                },
                {
                    info: "06 25 45 01 76",
                    type: "tel",
                    icon : <BsFillTelephoneFill />
                },
                {
                    info: "josselin.douineau@gmail.com",
                    type: "courriel",
                    icon : <BsMailbox />
                }
            ],
            english: [
                {
                    info: "Rennes, Brittany",
                    icon : <BiDirections />
                },
                {
                    info: "00336 25 45 01 76",
                    type: "tel",
                    icon : <BsFillTelephoneFill />
                },
                {
                    info: "josselin.douineau@gmail.com",
                    type: "mail",
                    icon : <BsMailbox />
                }
            ]
            
        }
}

export default getContacts;