import EnumDomain from "../../helpers/EnumDomain";

const getEducation = () => {
    return  {
                french: [
                    {
                        domains: [EnumDomain.MATHS, EnumDomain.DEV],
                        period: "novembre 2015 - février 2016",
                        title: "Concepteur-développeur Java EE",
                        desc: "- Concepts de base de Java, \n - Principaux frameworks de Java (Spring, JPA/Hibernate notamment), \n - Gestion des bases de données avec MySQL, \n - Projets en condition professionnelle.",
                        school: "Objis",
                        schoolLink: "https://objis.com/"
                    
                    },
                    {
                        domains: [EnumDomain.MATHS, EnumDomain.DEV],
                        period: "pause",
                        desc: "Reconversion vers la programmation informatique"
                    },
                    {    
                        domains: [EnumDomain.MATHS, EnumDomain.DEV, EnumDomain.GENERIC],
                        period: "septembre 2009 - juin 2014",
                        title: "Master en sciences et génie de l'environnement",
                        titleLink: "https://www.ipgp.fr/fr/master/genie-de-lenvironnement-industrie-gei",
                        school: "Université Paris 7 Diderot",
                        schoolLink: "https://u-paris.fr/en/",
                        desc: "- Génie des procédés, \n - Thermique du bâtiment, \n - Droit de l'environnement, \n - Analyses de laboratoire, \n- Programmation informatique."
                    },
                    {
                        domains: [EnumDomain.MATHS, EnumDomain.DEV, EnumDomain.GENERIC],
                        period: "pause",
                        desc: "Reprise d'études dans les sciences de l'environnement"
                    },
                    {    
                        period: "novembre 2008 - février 2009",
                        title: "Diplôme de croupier de poker",
                        school: "Institut de formation des croupiers de poker",
                        desc: "- Texas Hold'em et variantes Dealer's choice (Omaha, Seven stud..etc), \n - Gestion de la table et des valeurs."
                    },
                    {
                        period: "pause",
                        desc: "Diplôme de croupier de poker"
                    },
                    {   
                        domains: [EnumDomain.MATHS],
                        period: "septembre 2003 - juin 2006",
                        title: "Baccalauréat scientifique (option Maths)",
                        titleLink: "https://www.apmep.fr/Annee-2006-15-sujets-15-corriges",
                        school: "Lycée Eugène Delacroix",
                        schoolLink: "https://lycee-delacroix-maisons-alfort.fr/",
                        desc: "- Polynômes de second degré, \n - Suites numériques, \n - Analyse, \n - Dérivées, \n - Intégrales, \n - Divisibilité dans Z, \n - Nombres complexes, \n - Dénombrement, \n - Similitudes, \n - Continuités/limites, \n - Probabilités, \n - Trigonométrie,  \n - Géométrie dans l'espace, \n - Arithmétique, \n - Congruences."
                    },
                    {
                        domains: [EnumDomain.MATHS],
                        period: "pause",
                        desc: "Lycée"
                    }
                ],
                english: [
                    {
                        domains: [EnumDomain.MATHS, EnumDomain.DEV],
                        period: "november 2015 - february 2016",
                        title: "Java EE designer-developer",
                        desc: " - Learning Java core concepts, \n - Java main frameworks (Spring, JPA/Hibernate notably), \n - Databases management with MySQL, many applications projects.",
                        school: "Objis",
                        schoolLink: "https://objis.com/"
                    },
                    {
                        domains: [EnumDomain.MATHS, EnumDomain.DEV],
                        period: "pause",
                        desc: "Career change to IT development"
                    },
                    {    
                        domains: [EnumDomain.MATHS, EnumDomain.DEV, EnumDomain.GENERIC],
                        period: "september 2009 - juin 2014",
                        title: "Master's degree in environmental engineering",
                        titleLink: "https://www.ipgp.fr/fr/master/genie-de-lenvironnement-industrie-gei",
                        school: "Université Paris 7 Diderot",
                        schoolLink: "https://u-paris.fr/en/",
                        desc: "- Engineering process, \n - Heat science applied to buildings, \n - Environmental law, \n - Laboratory analysis, \n - Computer programming."
                    },
                    {
                        domains: [EnumDomain.MATHS, EnumDomain.DEV, EnumDomain.GENERIC],
                        period: "pause",
                        desc: "Studies resumption in environment sciences"
                    },
                    {    
                        period: "november 2008 - february 2009",
                        title: "Poker dealer diploma",
                        school: "Institut de formation des croupiers de poker",
                        desc: "- Texas Hold'em and Dealer's choice variants (Omaha, Seven stud..etc), \n - Table and chips managing."
                    },
                    {
                        period: "pause",
                        desc: "Diplôme de croupier de poker"
                    },
                    {   
                        domains: [EnumDomain.MATHS],
                        period: "september 2003 - juin 2006",
                        title: "High school diploma (science course, maths option)",
                        titleLink: "https://www.apmep.fr/Annee-2006-15-sujets-15-corriges",
                        school: "Lycée Eugène Delacroix",
                        schoolLink: "https://lycee-delacroix-maisons-alfort.fr/",
                        desc: "- Second degree polynomials, \n - Numéric sequences, \n - Analysis, \n - Derivatives, \n - Integrals, \n - Divisibility in Z, \n - Complex numbers, \n - Enumeration, \n - Similarities, \n - Continuity/limits, \n - Probabilities, \n - Trigonometry,  \n - Géométry in space, \n - Arithmetic, \n - Congruences."
                    },
                    {
                        domains: [EnumDomain.MATHS],
                        period: "pause",
                        desc: "High school"
                    }
                ]
            }
}

export default getEducation;