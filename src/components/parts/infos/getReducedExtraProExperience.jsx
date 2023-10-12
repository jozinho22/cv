import EnumDomain from "../../helpers/EnumDomain";

const getReducedExtraProExperience = ( domain ) => {
    return {
        french: [
            {
                domains: [EnumDomain.MATHS],
                period: "2012 - maintenant",
                as: "Professeur de mathématiques à domicile",
                desc: "- Soutien scolaire et renforcement \n - Création d'un site dédié :",
                references: [
                    {
                        url: "https://jozinho22.github.io/maths",
                        webSiteName : "Ma Thématique",
                        desc: "(Base documentaire mathématique)"
                    }
                ],
            }
        ],
        english: [
            {
                domains: [EnumDomain.MATHS],
                period: "2012 - up to now",
                as: "Maths teacher (private lessons)",
                desc: "- Tutoring et reinforcement \n - Creation of a dedicated site :",
                references: [
                    {
                        url: "https://jozinho22.github.io/maths",
                        webSiteName : "Ma Thématique",
                        desc: "(Maths database)"
                    }
                ]
            }
        ]

    }
}

export default getReducedExtraProExperience;