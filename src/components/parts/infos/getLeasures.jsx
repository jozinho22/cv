import {FaBasketballBall} from 'react-icons/fa';
import {FaChess} from 'react-icons/fa';
import {TbKarate} from 'react-icons/tb';
import {BsBookHalf} from 'react-icons/bs';
import {FaGuitar} from 'react-icons/fa';
import {FaCode} from  'react-icons/fa';
import {MdPets} from  'react-icons/md';

const getLeasures = () => {

    return {
                french : [
                    {
                        activity: "Basket",
                        icon: <FaBasketballBall />
                    },
                    {
                        activity: "Échecs",
                        icon: <FaChess />
                    },
                    {
                        activity: "Arts martiaux",
                        icon: <TbKarate />
                    },
                    {
                        activity: "Lecture",
                        icon: <BsBookHalf />
                    },
                    {
                        activity: "Guitare",
                        icon: <FaGuitar />
                    },
                    {
                        activity: "Codage",
                        icon: <FaCode />
                    },
                    {
                        activity: "Bénévolat",
                        icon: <MdPets />
                    }
                ],
                english: [
                    {
                        activity: "Basketball",
                        icon: <FaBasketballBall />
                    },
                    {
                        activity: "Chess",
                        icon: <FaChess />
                    },
                    {
                        activity: "Martial arts",
                        icon: <TbKarate />
                    },
                    {
                        activity: "Reading",
                        icon: <BsBookHalf />
                    },
                    {
                        activity: "Guitar",
                        icon: <FaGuitar />
                    },
                    {
                        activity: "Coding",
                        icon: <FaCode />
                    },
                    {
                        activity: "Volunteering",
                        icon: <MdPets />
                    }
                ]
    }
}

export default getLeasures;