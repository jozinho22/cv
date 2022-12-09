import {FaJava} from 'react-icons/fa';
import {TbBrandJavascript} from 'react-icons/tb';
import {ImHtmlFive} from 'react-icons/im';
import {IoLogoCss3} from 'react-icons/io';
import {AiOutlineConsoleSql} from 'react-icons/ai';
import {BiGitBranch} from 'react-icons/bi';

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
            frameworks: "Node, React, JSON, MathJax",
            level: 70
        },
        {
            language: "HTML",
            icon: <ImHtmlFive /> ,
            frameworks: "HTML5",
            level: 75
        },
                {
            language: "CSS",
            icon: <IoLogoCss3 /> ,
            frameworks: "CSS3",
            level: 65
        },
                {
            language: "SQL",
            icon: <AiOutlineConsoleSql />,
            frameworks : "MySQL, SQL Server, PostgreSQL, Oracle",
            level: 75
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