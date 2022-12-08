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
            frameworks: "Spring, Maven, JPA/Hibernate",
            level: 80
        },
        {
            language: "Javascript",
            icon: <TbBrandJavascript />,
            frameworks: "Node, React, MathJax",
            level: 70
        },
        {
            language: "HTML",
            icon: <ImHtmlFive /> ,
            level: 70
        },
                {
            language: "CSS",
            icon: <IoLogoCss3 /> ,
            level: 60
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
            level: 60
        }
    ]
}

export default getSkills;