import {DiJava} from 'react-icons/di';
import {DiJavascript1} from 'react-icons/di';
import {DiHtml5} from 'react-icons/di';
import {DiCss3} from 'react-icons/di';
import {DiMysql} from 'react-icons/di';
import {DiGit} from 'react-icons/di';
import {DiReact} from 'react-icons/di';
import {DiPython} from 'react-icons/di';

const getSkills = () => {

    return [
        {
            language: "Javascript",
            icon: <DiJavascript1 />,
            frameworks: "Node, JSON",
            level: 75
        },
        {
            language: "ReactJS",
            icon: <DiReact />,
            frameworks: "Redux, MathJax",
            level: 70
        },
                {
            language: "Java",
            icon: <DiJava />,
            frameworks: "Spring, Maven, JPA/Hibernate, REST",
            level: 70
        },
        {
            language: "HTML",
            icon: <DiHtml5 /> ,
            frameworks: "HTML5",
            level: 80
        },
        {
            language: "CSS",
            icon: <DiCss3 /> ,
            frameworks: "CSS3",
            level: 70
        },
        {
            language: "SQL",
            icon: <DiMysql />,
            frameworks : "MySQL, SQL Server, PostgreSQL, Oracle",
            level: 80
        },
        {
            language: "Git",
            icon: <DiGit />,
            frameworks : "GitHub, GitLab, Git Bash, Git Fork",
            level: 65
        },
        {
            language: "Python",
            icon: <DiPython />,
            frameworks : "NumPy, Pandas, Matplotlib",
            level: 40
        }

    ]
}

export default getSkills;