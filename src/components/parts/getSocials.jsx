import {BsGithub} from 'react-icons/bs';
import {BsStackOverflow} from 'react-icons/bs';


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
        }
    ]
}

export default getSocials;