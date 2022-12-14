import {BsGithub} from 'react-icons/bs';
import {BsStackOverflow} from 'react-icons/bs';
import {FaChess} from 'react-icons/fa';
import {SiSololearn} from 'react-icons/si';

const getSocials = () => {

    return [
        {
            platform: "GitHub",
            profileLink: "https://github.com/jozinho22",
            icon: <BsGithub />
        },
        {
            platform: "Stack Overflow",
            profileLink: "https://stackoverflow.com/users/6741310/jozinho22",
            icon: <BsStackOverflow />
        },
        {
            platform: "Chess",
            profileLink: "https://www.chess.com/member/jozinho22",
            icon: <FaChess />
        },
        {
            platform: "Sololearn",
            profileLink: "https://www.sololearn.com/profile/27697996",
            icon: <SiSololearn />
        }
    ]
}

export default getSocials;