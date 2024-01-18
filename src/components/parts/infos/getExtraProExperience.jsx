import EnumDomain from "../../helpers/EnumDomain";

const getExtraProExperience = () => {
    return {
        french: [
            {
                domains: [EnumDomain.DEV],
                period: "2020 - maintenant",
                company: "En autodidacte",
                as: "Développeur Fullstack",
                tools: "- JavaScript (ReactJS, NodeJS, AngularJS, Express, Sequelize, MathJax, Helmet, JWT),\n - Java (Spring, JPA/Hibernate, Maven, JWT),\n - HTML5, CSS3, Bootstrap,\n - SQL (PostgreSQL, MySQL, SQL Server, Oracle), \n - Git (Git Bash, GitHub, GitLab, Git Fork)",                     
                desc: "Développement d'applications en ReactJS",
                more: "Le développement de ces applications s’est réalisée dans le cadre de l’apprentissage de ReactJs, et notamment à partir de la sortie de Hooks. \n\n Voici alors une liste de quelques projets sur lesquels j'ai travaillé ces dernières années. \n Le projet principal sur lequel je travaille est le premier, la base documentaire mathématique, à destination des jeunes et qui est complément de mon activité de professeur de mathématiques à domicile.",
                references: [
                    {
                        url: "https://jozinho22.github.io/chess-timer",
                        webSiteName : "Chess Timer",
                        desc: "(Pendule pour les joueurs d'échecs)"
                    },
                    {
                        url: "https://jozinho22.github.io/test-your-skills",
                        webSiteName : "Test your skills",
                        desc: "(Un test pour les devs Java)"
                    }
                ],
                gitDesc : "D'autres projets, cette fois sans IHM sont disponibles sur mon GitHub. \n Ces projets ont été réalisés dans le but de continuer à pratiquer et de suivre l'évolution des technologies, notamment sur Java, Spring et JavaScript.",
                gitReferences: [
                    {
                        url: "https://github.com/jozinho22/spring-boot-3-tuto",
                        projectName : "API Rest sécurisée avec Spring"
                    },
                    {
                        url: "https://github.com/jozinho22/node-selecao",
                        projectName : "Api Rest sécurisée avec Express/Sequelize"
                    },
                    {
                        url: "https://github.com/jozinho22/java8",
                        projectName : "Nouveautés Java8 (streams / lambdas)"
                    },
                    {
                        url: "https://github.com/jozinho22/quizz-java-generator",
                        projectName : "Générateur d'indentation et de formattage"
                    }
                ]
            },
            {
                domains: [EnumDomain.MATHS, EnumDomain.DEV],
                period: "2012 - maintenant",
                as: "Professeur de mathématiques à domicile",
                desc: "- Soutien scolaire et renforcement \n - Création d'un site dédié",
                references: [
                    {
                        url: "https://jozinho22.github.io/demonstrations-mathematiques",
                        webSiteName : "Démonstrations mathématiques",
                        desc: "(Site consacré aux démonstrations mathématiques)"
                    }
                ],
            }
        ],
        english: [
            {
                domains: [EnumDomain.DEV],
                period: "2020 - up to now",
                company: "Self-taught",
                as: "Fullstack developer",
                tools: "- JavaScript (ReactJS, NodeJS, AngularJS, Express, Sequelize, MathJax, Helmet, JWT),\n - Java (Spring, JPA/Hibernate, Maven, JWT),\n - HTML5, CSS3, Bootstrap,\n - SQL (PostgreSQL, MySQL, SQL Server, Oracle), \n - Git (Git Bash, GitHub, GitLab, Git Fork)",                     
                desc: "ReactJS apps development",
                more: "Those apps were builded while learning ReactJs, and precisely after Hooks features releases. \n Others projects without GUI, are available on my GitHub (securised REST API notably). \n\n Here is list of the main projets that I worked on. \n The main project is the first one, the mathematical libray, according to my mathematics teacher activity.",
                references: [
                    {
                        url: "https://jozinho22.github.io/chess-timer",
                        webSiteName : "Chess Timer",
                        desc: "(Timer for chess players)"
                    },
                    {
                        url: "https://jozinho22.github.io/test-your-skills",
                        webSiteName : "Test your skills",
                        desc: "(A test for Java coders)"
                    }
                ],
                gitDesc : "Other projects without GUI are on my GitHub. \n Those projects were builded to continue practicing, and notably concerning Java, Spring et JavaScript.",
                    gitReferences: [
                        {
                            url: "https://github.com/jozinho22/spring-boot-3-tuto",
                            projectName : "Securized REST API with Spring"
                        },
                        {
                            url: "https://github.com/jozinho22/node-selecao",
                            projectName : "Securized REST API with Express/Sequelize"
                        },
                        {
                            url: "https://github.com/jozinho22/java8",
                            projectName : "Java8 new features (streams / lambdas)"
                        },
                        {
                            url: "https://github.com/jozinho22/quizz-java-generator",
                            projectName : "Java formatting generator",                       
                        }
                    ]
            },
            {
                domains: [EnumDomain.MATHS, EnumDomain.DEV],
                period: "2012 - up to now",
                as: "Maths teacher (private lessons)",
                desc: "- Tutoring et reinforcement \n - Creation of a dedicated site",
                references: [
                    {
                        url: "https://jozinho22.github.io/demonstrations-mathematiques",
                        webSiteName : "Maths demonstrations",
                        desc: "(Maths demonstrations website)"
                    }
                ]
            }
        ]

    }
}

export default getExtraProExperience;