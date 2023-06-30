import {DiJava} from 'react-icons/di';
import {DiJavascript1} from 'react-icons/di';
import {DiHtml5} from 'react-icons/di';
import {DiCss3} from 'react-icons/di';
import {DiMysql} from 'react-icons/di';
import {DiGit} from 'react-icons/di';
import {DiReact} from 'react-icons/di';
import {DiAngularSimple} from 'react-icons/di';

/* import {DiPython} from 'react-icons/di';
 */
import {RiFileExcel2Line} from 'react-icons/ri';
import {DiNodejsSmall} from 'react-icons/di';

const getDevSkills = () => {

    return [
        {
            language: "Javascript",
            icon: <DiJavascript1 />,
            frameworks: "NodeJS, ReactJS, AngularJS, Express, Sequelize, MathJax, Helmet",
            level: 75
        },
        /* {
            language: "ReactJS",
            icon: <DiReact />,
            frameworks: "Redux, MathJax",
            level: 70
        },
        {
            language: "NodeJS",
            icon: <DiNodejsSmall />,
            level: 60
        },
        {
            language: "AngularJS",
            icon: <DiAngularSimple />,
            level: 50
        }, */
        {
            language: "Java",
            icon: <DiJava />,
            frameworks: "Spring, JPA/Hibernate, REST API, Maven",
            level: 70
        },
        {
            language: "HTML",
            icon: <DiHtml5 /> ,
            level: 80
        },
        {
            language: "CSS",
            icon: <DiCss3 /> ,
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
            language: "Excel/BVA",
            icon: <RiFileExcel2Line />,
            level: 65
        }/* ,
        {
            language: "Bootstrap",
            icon: <RiFileExcel2Line />,
            level: 65
        }  */
    ]
}

export default getDevSkills;