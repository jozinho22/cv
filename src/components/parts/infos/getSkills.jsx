import {FaJava} from 'react-icons/fa';
import {TbBrandJavascript} from 'react-icons/tb';
import {ImHtmlFive} from 'react-icons/im';
import {IoLogoCss3} from 'react-icons/io';
import {AiOutlineConsoleSql} from 'react-icons/ai';
import {BiGitBranch} from 'react-icons/bi';
import {FaReact} from 'react-icons/fa';
import {SiPython} from 'react-icons/si';

const getSkills = () => {

    return [
        {
            language: "Java",
            icon: <FaJava />,
            frameworks: "Spring, Maven, JPA/Hibernate, REST",
            level: 80
        },
        {
            language: "Javascript",
            icon: <TbBrandJavascript />,
            frameworks: "Node, JSON",
            level: 75
        },
        {
            language: "ReactJS",
            icon: <FaReact />,
            frameworks: "Redux, MathJax",
            level: 70
        },
        {
            language: "HTML",
            icon: <ImHtmlFive /> ,
            frameworks: "HTML5",
            level: 80
        },
        {
            language: "CSS",
            icon: <IoLogoCss3 /> ,
            frameworks: "CSS3",
            level: 70
        },
        {
            language: "SQL",
            icon: <AiOutlineConsoleSql />,
            frameworks : "MySQL, SQL Server, PostgreSQL, Oracle",
            level: 80
        },
        {
            language: "Python",
            icon: <SiPython />,
            frameworks : "NumPy, Pandas, Matplotlib",
            level: 60
        },
        {
            language: "Git",
            icon: <BiGitBranch />,
            frameworks : "GitHub, GitLab, Git Bash, Git Fork",
            level: 65
        }
    ]
}

export default getSkills;