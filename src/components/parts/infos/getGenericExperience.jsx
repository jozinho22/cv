import EnumDomain from "../../helpers/EnumDomain";

const getNonDevExperience = () => {
    
    return {
                french: [
                    {
                        period: "juillet 2023 - septembre 2023",
                        company: "Biocoop du Cormier - Saint-Aubin-du-Cormier",
                        companyLink: "https://www.biocoopducormier.fr/",
                        as: "Employé polyvalent",
                        tools: "CocoBio, IziBio", 
                        desc: "Réassort, réception des livraisons, service du pain et fromage, accueil/conseil clients, encaissement, nettoyage"
                    },
                    {
                        period: "août 2021 - octobre 2022",
                        company: "Biocoop Le Chat Biotté - Combourg",
                        companyLink: "https://www.biocooplechatbiotte.com/",
                        as: "Employé polyvalent",
                        tools: "CocoBio, IziBio", 
                        desc: "Réassort, réception des livraisons, accueil/conseil clients, encaissement, nettoyage"
                    },
                    {
                        period: "juillet 2021 - août 2021",
                        company: "Biocoop Scarabée - Rennes",
                        companyLink: "https://scarabee-biocoop.fr/",
                        as: "Chauffeur - livreur",
                        desc: "Vérification des commandes, livraisons et entretien du véhicule"
                    },
                    {
                        period: "juin 2021 - juillet 2021",
                        company: "La vie claire - Monfort-sur-Meu",
                        companyLink: "https://www.lavieclaire.com/",
                        as: "Employé polyvalent",
                        desc: "Réassort, réception des livraisons, accueil/conseil clients, encaissement, nettoyage"
                    },
                    {
                        period: "pause",
                        desc: "Employé polyvalent en magasins bio"
                    },
                    {
                        domains: [EnumDomain.MATHS],
                        period: "janvier 2021 - avril 2021",
                        company: "Open",
                        companyLink: "https://www.open.global/",
                        as: "Développeur Java/ReactJS",
                        tools: "Spring, Maven, ReactJS, PostgreSQL, Git Fork, GitLab", 
                        desc: "Maintenance en condition opérationnelle et développement de nouvelles fonctionnalités d'un un générateur d'applications mobiles avec ReactJs ainsi que sur le back-end de cette application développé en Java"
                    },
                    {
                        domains: [EnumDomain.MATHS],
                        period: "septembre 2016 - september 2018",
                        company: "La SACEM - Paris",
                        companyLink: "https://www.sacem.fr/",
                        as: "Développeur Java/SQL",
                        tools: "Java, JDBC, Restlet, XStream, JUnit/Cucumber, Maven, PL/SQL, Git Bash, GitLab", 
                        desc: "Maintenance en condition opérationnelle et développement de nouvelles fonctionnalités sur trois applications (application de gestion de clients, application de tarification de contrats et environnement back-end d'une application mobile)"
                    },
                    {
                        domains: [EnumDomain.MATHS],
                        period: "février 2016 - juin 2016",
                        company: "La SNCF - Paris",
                        companyLink: "https://www.sncf.com/fr",
                        as: "Développeur Java",
                        tools: "Java, Spring, JPA/Hibernate, Maven, AngularJS", 
                        desc: "Développement en binôme d'un POC sur la thématique des recharges de pass pour le TER"
                    },
                    {
                        period: "pause",
                        desc: "Développeur informatique"
                    },
                    {
                        period: "mai 2015 - septembre 2015",
                        company: "Axione - Malakoff",
                        companyLink: "https://www.axione.com/",
                        as: "Cartographe",
                        tools: "ArcGIS, Excel", 
                        desc: "Intégration de données en masse dans un schéma directeur de développement de la fibre optique"
                    },
                    {
                        period: "novembre 2014 - février 2015",
                        company: "ERDF - Paris",
                        companyLink: "https://www.enedis.fr/",
                        as: "Cartographe",
                        tools: "Mercator, Excel", 
                        desc: "Gestion de la cartographie à moyenne échelle pour les quatres agences de Paris (portage de nouvelles versions logicielles, formation et support aux utilisateurs)"
                    },
                    {
                        period: "pause",
                        desc: "Cartographe SIG"
                    },
                    {
                        domains: [EnumDomain.MATHS],
                        period: "avril 2014 - septembre 2014",
                        company: "Enertrag - Cergy",
                        companyLink: "https://france.enertrag.com/",
                        as: "Cartographe dans le domaine de l'éolien (stage de M2)",
                        tools: "ArgGIS, Excel", 
                        desc: "Prospection de nouvelles zones propices à l'implantation d'éoliennes, participation aux présentations en mairie"
                    },
                    {
                        domains: [EnumDomain.MATHS],
                        period: "avril 2013 - septembre 2013",
                        company: "Sermet - Créteil",
                        companyLink: "https://www.manergy.fr/",
                        as: "Cartographe dans le domaine de la géothermie (stage de M1)",
                        tools: "ArgGIS, Excel", 
                        desc: "Participation à un schéma directeur de développement de la géothermie : collecte de données auprès de bailleurs sociaux, création de cartes à partir des données collectées, participation au rapport final"
                    },
                    {
                        domains: [EnumDomain.MATHS],
                        period: "avril 2012 - september 2012",
                        company: "Planète verte - Paris",
                        companyLink: "http://www.planete-verte.fr/",
                        as: "Rédacteur technique (stage de L3)",
                        tools: "Word, Excel", 
                        desc: "Rédaction d'articles techniques dans le domaine de la mobilité électrique"
                    },
                    {
                        period: "pause",
                        desc: "Étudiant en sciences de l'environnement"
                    },
                    {
                        period: "janvier 2008 - september 2008",
                        company: "Casino de Pougues-les-Eaux",
                        companyLink: "https://casino-pougues-les-eaux.fr/",
                        as: "Croupier de Texas Hold'Em",
                        desc: "Croupier de poker (variante Texas Hold'em), gestion du fond de caisse et des litiges"
                    },
                    {
                        period: "pause",
                        desc: "Croupier de poker"
                    }
                ],
                english: [
                    {
                        period: "july 2023 - september 2023",
                        company: "Biocoop du Cormier - Saint-Aubin-du-Cormier",
                        companyLink: "https://www.biocoopducormier.fr/",
                        as: "Versatile employee",
                        tools: "CocoBio, IziBio", 
                        desc: "Restock, delivering reception, cheese and bread service for clients, welcoming/advices, cashiering, cleaning"
                    },
                    {
                        period: "august 2021 - october 2022",
                        company: "Biocoop Le Chat Biotté - Combourg",
                        companyLink: "https://www.biocooplechatbiotte.com/",
                        as: "Versatile employee",
                        tools: "CocoBio, IziBio", 
                        desc: "Restock, delivering reception, welcoming/advices, cashiering, cleaning"
                    },
                    {
                        period: "july 2021 - august 2021",
                        company: "Biocoop Scarabée - Rennes",
                        companyLink: "https://scarabee-biocoop.fr/",
                        as: "Driver - delivery person",
                        desc: "Commands checking, delivery and vehicle maintenance"
                    },
                    {
                        period: "june 2021 - july 2021",
                        company: "La vie claire - Monfort-sur-Meu",
                        companyLink: "https://www.lavieclaire.com/",
                        as: "Versatile employee",
                        desc: "Restock, delivering reception, welcoming/advices, cashiering, cleaning"
                    },
                    {
                        period: "pause",
                        desc: "Versatile employee in organic stores"
                    },
                    {
                        domains: [EnumDomain.MATHS],
                        period: "january 2021 - april 2021",
                        company: "Open",
                        companyLink: "https://www.open.global/",
                        as: "Java/ReactJS developer",
                        tools: "Spring, Maven, ReactJS, PostgreSQL, Git Fork, GitLab", 
                        desc: "Maintenance and development of a mobile app generator with ReactJs as well as the back-end part developed in Java"
                    },
                    {
                        domains: [EnumDomain.MATHS],
                        period: "september 2016 - september 2018",
                        company: "La SACEM - Paris",
                        companyLink: "https://www.sacem.fr/",
                        as: "Java/SQL developer",
                        tools: "JDBC, Restlet, XStream, JUnit/Cucumber, Maven, PL/SQL, Git Bash, GitLab", 
                        desc: "Maintenance and development of three applications (clients management application, pricing application and back-end environment of a mobile app)"
                    },
                    {
                        domains: [EnumDomain.MATHS],
                        period: "february 2016 - june 2016",
                        company: "La SNCF - Paris",
                        companyLink: "https://www.sncf.com/fr",
                        as: "Développeur Java",
                        tools: "Java, Spring, JPA/Hibernate, Maven, AngularJS", 
                        desc: "Development of a Proof Of Concept on the theme of self pass-charging"
                    },
                    {
                        period: "pause",
                        desc: "IT developer"
                    },
                    {
                        period: "may 2015 - september 2015",
                        company: "Axione - Malakoff",
                        companyLink: "https://www.axione.com/",
                        as: "Cartographer",
                        tools: "ArcGIS, Excel", 
                        desc: "Data integration in a developement of the optical fiber"
                    },
                    {
                        period: "november 2014 - february 2015",
                        company: "ERDF - Paris",
                        companyLink: "https://www.enedis.fr/",
                        as: "Cartographer",
                        tools: "Mercator, Excel", 
                        desc: "Electricity networks cartography managing, as well as training and support for new users"
                    },
                    {
                        period: "pause",
                        desc: "GIS Cartographer"
                    },
                    {
                        domains: [EnumDomain.MATHS],
                        period: "april 2014 - september 2014",
                        company: "Enertrag - Cergy",
                        companyLink: "https://france.enertrag.com/",
                        as: "Cartographer in wind power (M2 internship)",
                        tools: "ArgGIS, Excel", 
                        desc: "Aeolien cartography prospecter"
                    },
                    {
                        domains: [EnumDomain.MATHS],
                        period: "april 2013 - september 2013",
                        company: "Sermet - Créteil",
                        companyLink: "https://www.manergy.fr/",
                        as: "Cartographer in geothermics (M1 internship)",
                        tools: "ArgGIS, Excel", 
                        desc: "Cartography, data interpretation and support on a geothermy developement blueprint"
                    },
                    {
                        domains: [EnumDomain.MATHS],
                        period: "april 2012 - september 2012",
                        company: "Planète verte - Paris",
                        companyLink: "http://www.planete-verte.fr/",
                        as: "Technical writer (L3 internship)",
                        tools: "Word, Excel", 
                        desc: "Writing on green mobility"
                    },
                    {
                        period: "pause",
                        desc: "Environment engineering student"
                    },
                    {
                        period: "january 2008 - september 2008",
                        company: "Casino de Pougues-les-Eaux",
                        companyLink: "https://casino-pougues-les-eaux.fr/",
                        as: "Texas Hold'Em dealer",
                        desc: "Texas Hold'Em dealer, managing cashier and tables"
                    },
                    {
                        period: "pause",
                        desc: "Poker dealer"
                    }
                ]
            }

}

export default getNonDevExperience;