import EnumDomain from "../../helpers/EnumDomain";

const getVolunteerWork = () => {
    return {
        french: [
            {
                domains: [EnumDomain.MATHS],
                period: "jan 2022 - mai 2022",
                company: "École démocratique de Brocéliande - Muël",
                companyLink: "https://www.bretagne-grainedesens.bzh/",
                as: "Professeur de mathématiques",
                desc: "Dispense de cours (deux heures par semaine) et création de contenus pédagogiques"
            },
            {
                period: "oct 2020 - sept 2021",
                company: "La SPA - Rennes",
                companyLink: "https://www.la-spa.fr/etablissement/refuge-spa-de-rennes/",
                as: "Agent animalier en chatterie",
                desc: "Nettoyage des espaces communs des chats, nettoyage des litières/gamelles, nettoyage des locaux (à raison de trois matinées par semaine + 2ème confinement à temps plein)"
            }
        ],
        english: [
            {
                domains: [EnumDomain.MATHS],
                period: "jan 2022 - may 2022",
                company: "École démocratique de Brocéliande - Muël",
                companyLink: "https://www.bretagne-grainedesens.bzh/",
                as: "Maths teacher",
                desc: "Two hours a week courses and content creation"
            },
            {
                period: "oct 2020 - sept 2021",
                company: "La SPA - Rennes",
                companyLink: "https://www.la-spa.fr/etablissement/refuge-spa-de-rennes/",
                as: "Cattery agent",
                desc: "Cats common spaces cleaning, litter boxes cleaning, cleaning of premises (three times a week)"
            }
        ]
                
    }

}

export default getVolunteerWork;