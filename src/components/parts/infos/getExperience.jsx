const getExperience = () => {
    return {
            french: [
                {
                    period: "mar 2020 - maintenant",
                    company: "Domicile",
                    as: "Développeur Fullstack",
                    tools: "Spring, JPA/Hibernate, Maven, ReactJS, MathJax, MySQL, HTML5, CSS3, Git Bash, GitHub", 
                    desc: "Je développe mes propres projets et je continue à me former",
                    references: [
                        {
                            url: "https://ma-thematique.netlify.app/",
                            webSiteName : "Ma Thematique"
                        },
                        {
                            url: "https://josselin-douineau-developer.netlify.app/",
                            webSiteName : "Mon CV"
                        },
                        {
                            url: "https://chess-timer-app.netlify.app/",
                            webSiteName : "Chess Timer"
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
                    period: "mar 2016 - sept 2018",
                    company: "La SACEM",
                    as: "Développeur Java/SQL",
                    tools: "JDBC, Restlet, XStream, JUnit/Cucumber, Maven, PL/SQL, Git Bash, GitLab", 
                    desc: "J'ai travaillé sur de nombreux projets, principalement en appliquant des modifications dans le code Java et PL/SQL"
                },
                {
                    period: "autres périodes",
                    desc: "J'ai travaillé divers domaines (cartographie SIG, fruits/légumes, cours à domicile)"
                }
        ],
        english: [
            {
                period: "mar 2020 - now",
                company: "Home",
                as: "Fullstack developer",
                tools: "Spring, JPA/Hibernate, Maven, ReactJS, MathJax, MySQL, HTML5, CSS3, Git Bash, GitHub".split(","), 
                desc: "I develop personal projects and continue training",
                references: [
                    {
                        url: "https://ma-thematique.netlify.app/",
                        webSiteName : "Ma Thematique"
                    },
                    {
                        url: "https://josselin-douineau-developer.netlify.app/",
                        webSiteName : "My CV"
                    },
                    {
                        url: "https://chess-timer-app.netlify.app/",
                        webSiteName : "Chess Timer"
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
                period: "mar 2016 - sept 2018",
                company: "La SACEM",
                as: "Java/SQL developer",
                tools: "JDBC, Restlet, XStream, JUnit/Cucumber, Maven, PL/SQL, Git Bash, GitLab".split(","), 
                desc: "I worked on many applications, mainly do some corrections in the Java and PL/SQL code"
            },
            {
                period: "other periods",
                desc: "I did differents jobs (GIS cartography, fruits & vegetables, home courses for pupils)"
            }
        ]

    }
}

export default getExperience;