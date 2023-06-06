const getDevExperience = () => {
    return {
            french: [
                {
                    period: "mar 2020 - maintenant",
                    company: "En autodidacte",
                    as: "Développeur Fullstack",
                    tools: "ReactJS, Bootstrap, MathJax, MySQL, HTML5, Spring, JPA/Hibernate, Maven, CSS3, Helmet, Git Bash, GitHub",                     desc: "Auto-formation sur de nouvelles technologies et développement de projets personnels",
                    references: [
                        {
                            url: "https://jozinho22.github.io/maths",
                            webSiteName : "Ma Thematique",
                            desc: "(Base documentaire mathématique)"
                        },
                        {
                            url: "https://jozinho22.github.io/chess-timer",
                            webSiteName : "Chess Timer",
                            desc: "(Pendule pour les joueurs d'échecs)"
                        }
                    ]
                },
                /* {
                    period: "jan 2021 - avr 2021",
                    company: "Open",
                    as: "Développeur Java/ReactJS",
                    tools: "Spring, Maven, ReactJS, PostgreSQL, Git Fork, GitLab".split(","), 
                    desc: "J'ai travaillé sur un générateur d'applications mobiles"
                },
                {
                    period: "fév 2020 - avr 2020",
                    company: "Yoni",
                    as: "Développeur Java",
                    tools: "Spring, JHipster, Maven, GitLab".split(","), 
                    desc: "J'ai aidé au développement de spécifications dans le domaine de la bijouterie"
                }, */
                {
                    period: "sept 2016 - sept 2018",
                    company: "La SACEM - Paris",
                    companyLink: "https://www.sacem.fr/",
                    as: "Développeur Java/SQL",
                    tools: "JDBC, Restlet, XStream, JUnit/Cucumber, Maven, PL/SQL, Git Bash, GitLab", 
                    desc: "Maintenance en condition opérationnelle et développement de nouvelles fonctionnalités sur trois applications (application de gestion de clients, application de tarification de contrats et environnement back-end d'une application mobile)"
                }/* ,
                {
                    period: "autres périodes",
                    desc: "J'ai travaillé divers domaines (cartographie SIG, fruits/légumes, cours à domicile)"
                } */
        ],
        english: [
            {
                period: "mar 2020 - now",
                company: "Self-taught",
                as: "Fullstack developer",
                tools: "ReactJS, Bootstrap, MathJax, MySQL, HTML5, Spring, JPA/Hibernate, Maven, CSS3, Helmet, Git Bash, GitHub", 
                desc: "Self-teaching about new technologies and working on personal projects",
                references: [
                    {
                        url: "https://jozinho22.github.io/maths",
                        webSiteName : "Ma Thematique",
                        desc: "(Documentary library about mathematics)"
                    },
                    {
                        url: "https://jozinho22.github.io/chess-timer",
                        webSiteName : "Chess Timer",
                        desc: "(Timer for chess players)"
                    }
                ]
            },
            /* {
                period: "jan 2021 - apr 2021",
                company: "Open",
                as: "Java/ReactJS developer",
                tools: "Spring, Maven, ReactJS, PostgreSQL, Git Fork, GitLab".split(","), 
                desc: "I worked on a mobile app generator"
            },
            {
                period: "feb 2020 - apr 2020",
                company: "Yoni",
                as: "Java developer",
                tools: "Spring, JHipster, Maven, GitLab".split(","), 
                desc: "I helped to develop specifications for a jewelry store"
            }, */
            {
                period: "sept 2016 - sept 2018",
                company: "La SACEM - Paris",
                companyLink: "https://www.sacem.fr/",
                as: "Java/SQL developer",
                tools: "JDBC, Restlet, XStream, JUnit/Cucumber, Maven, PL/SQL, Git Bash, GitLab".split(","), 
                desc: "Maintenance and development of three applications (clients management application, pricing application and back-end environment of a mobile app)"
            }/* ,
            {
                period: "other periods",
                desc: "I did differents jobs (GIS cartography, fruits & vegetables, home courses for pupils)"
            } */
        ]

    }
}

export default getDevExperience;