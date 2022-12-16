const getExperience = () => {
    return {
            french: [
                {
                    period: "mar 2020 - maintenant",
                    company: "Domicile",
                    as: "Développeur Fullstack",
                    desc: "Je développe mes propres projets et je continue à me former",
                    references: [
                        {
                            url: "https://ma-thematique.netlify.app/",
                            webSiteName : "Ma Thematique"
                        },
                        {
                            url: "https://josselin-douineau-developer.netlify.app/",
                            webSiteName : "Mon CV"
                        }
                    ]
                },
                {
                    period: "jan 2021 - avr 2021",
                    company: "Open",
                    as: "Développeur Java/ReactJS",
                    desc: "J'ai travaillé sur un générateur d'applications mobiles"
                },
                {
                    period: "mar 2016 - sept 2018",
                    company: "La SACEM",
                    as: "Développeur Java/SQL",
                    desc: "J'ai travaillé sur de nombreux projets, principalement en appliquant des modifications dans le code Java et PL/SQL"
                }
        ],
        english: [
            {
                period: "mar 2020 - now",
                company: "Home",
                as: "Fullstack developer",
                desc: "I develop personal projects and continue training",
                references: [
                    {
                        url: "https://ma-thematique.netlify.app/",
                        webSiteName : "Ma Thematique"
                    },
                    {
                        url: "https://josselin-douineau-developer.netlify.app/",
                        webSiteName : "My CV"
                    }
                ]
            },
            {
                period: "jan 2021 - apr 2021",
                company: "Open",
                as: "Java/ReactJS developer",
                desc: "I worked on a mobile app generator"
            },
            {
                period: "mar 2016 - sept 2018",
                company: "La SACEM",
                as: "Java/SQL developer",
                desc: "I worked on many applications, mainly do some corrections in the Java and PL/SQL code"
            }
        ]

    }
}

export default getExperience;