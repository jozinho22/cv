import EnumDomain from "../../helpers/EnumDomain";

const getEducation = () => {
    return  {
                french: [
                    {
                        domain: EnumDomain.MATHS,
                        period: "nov 2015 - fév 2016",
                        title: "Concepteur-développeur Java EE",
                        desc: "- Concepts de base de Java, \n - Principaux frameworks de Java (Spring, JPA/Hibernate notamment), \n - Gestion des bases de données avec MySQL, \n - Projets en condition professionnelle.",
                        school: "Objis",
                        schoolLink: "https://objis.com/"
                    
                    },
                    {    
                        domain: EnumDomain.MATHS,
                        period: "septembre 2009 - septembre 2014",
                        title: "Master en sciences et génie de l'environnement",
                        titleLink: "https://www.ipgp.fr/fr/master/genie-de-lenvironnement-industrie-gei",
                        school: "Université Paris 7 Diderot",
                        schoolLink: "https://u-paris.fr/en/",
                        desc: "- Génie des procédés, \n - Thermique du bâtiment, \n - Droit de l'environnement, \n - Analyses de laboratoire, \n- Programmation informatique."
                    },
                    {   
                        domain: EnumDomain.MATHS,
                        period: "septembre 2003 - septembre 2006",
                        title: "Baccalauréat scientique option Maths",
                        titleLink: "https://www.apmep.fr/Annee-2006-15-sujets-15-corriges",
                        school: "Lycée Eugène Delacroix",
                        schoolLink: "https://lycee-delacroix-maisons-alfort.fr/",
                        desc: "- Polynômes de second degré, \n - Suites numériques, \n - Analyse, \n - Dérivées, \n - Intégrales, \n - Divisibilité dans Z, \n - Nombres complexes, \n - Dénombrement, \n - Continuités/limites, \n - Probabilités, \n - Trigonométrie,  \n - Géométrie dans l'espace, \n - Arithmétique, \n - Congruences."
                    }
                ],
                english: [
                    {
                        domain: EnumDomain.MATHS,
                        period: "nov 2015 - fév 2016",
                        title: "Java EE designer-developer",
                        desc: " - Learning Java core concepts, \n - Java main frameworks (Spring, JPA/Hibernate notably), \n - Databases management with MySQL, many applications projects.",
                        school: "Objis",
                        schoolLink: "https://objis.com/"
                    },
                    {    
                        domain: EnumDomain.MATHS,
                        period: "september 2009 - september 2014",
                        title: "Master's degree in environmental engeeniering",
                        titleLink: "https://www.ipgp.fr/fr/master/genie-de-lenvironnement-industrie-gei",
                        school: "Université Paris 7 Diderot",
                        schoolLink: "https://u-paris.fr/en/",
                        desc: "- Engineering process, \n - Heat science applied to buildings, \n - Environmental law, \n - Laboratory analysis, \n - Computer programming."
                    },
                    {   
                        domain: EnumDomain.MATHS,
                        period: "september 2003 - september 2006",
                        title: "High school diploma (science course, maths option)",
                        titleLink: "https://www.apmep.fr/Annee-2006-15-sujets-15-corriges",
                        school: "Lycée Eugène Delacroix",
                        schoolLink: "https://lycee-delacroix-maisons-alfort.fr/",
                        desc: "- Second degree polynomials, \n - Numéric sequences, \n - Analysis, \n - Derivatives, \n - Integrals, \n - Divisibility in Z, \n - Complex numbers, \n - Enumeration, \n - Continuity/limits, \n - Probabilities, \n - Trigonometry,  \n - Géométry in space, \n - Arithmetic, \n - Congruences."
                    }
                ]
            }
}

export default getEducation;