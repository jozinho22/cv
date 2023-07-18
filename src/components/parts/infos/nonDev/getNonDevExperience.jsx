const getNonDevExperience = () => {
    
    return {
                french: [
                    {
                        period: "août 2021 - oct 2022",
                        company: "Biocoop Le Chat Biotté - Combourg",
                        companyLink: "https://www.biocooplechatbiotte.com/",
                        as: "Employé polyvalent fruits-légumes / vrac / caisse",
                        tools: "CocoBio, IziBio", 
                        desc: "Réassort, réception des livraisons, accueil/conseil clients, encaissement, nettoyage"
                    },
                    {
                        period: "juil 2021 - août 2021",
                        company: "Biocoop Scarabée - Rennes",
                        companyLink: "https://scarabee-biocoop.fr/",
                        as: "Chauffeur - livreur",
                        desc: "Vérification des commandes, livraisons et entretien du véhicule"
                    },
                    {
                        period: "juin 2021 - juil 2021",
                        company: "La vie claire - Monfort-sur-Meu",
                        companyLink: "https://www.lavieclaire.com/",
                        as: "Employé polyvalent fruits-légumes / vrac / caisse",
                        desc: "Réassort, réception des livraisons, accueil/conseil clients, encaissement, nettoyage"
                    },
                   {
                        period: "jan 2021 - avr 2021",
                        company: "Open",
                        companyLink: "https://www.open.global/",
                        as: "Développeur Java/ReactJS",
                        tools: "Spring, Maven, ReactJS, PostgreSQL, Git Fork, GitLab", 
                        desc: "Maintenance en condition opérationnelle et développement de nouvelles fonctionnalités d'un un générateur d'applications mobiles avec ReactJs ainsi que sur le back-end de cette application développé en Java"
                    },
                    {
                        period: "sept 2018 - juin 2019",
                        as: "Développeur Java",
                        tools: "Java, Spring, JPA/Hibernate, Maven", 
                        desc: "Intercontrat pendant neuf mois dans tros sociétés différentes, soit ce temps passé à se former en interne (Java8, Spring, frameworks JavaScript)"
                    },
                    {
                        period: "sept 2016 - sept 2018",
                        company: "La SACEM - Paris",
                        companyLink: "https://www.sacem.fr/",
                        as: "Développeur Java/SQL",
                        tools: "Java, JDBC, Restlet, XStream, JUnit/Cucumber, Maven, PL/SQL, Git Bash, GitLab", 
                        desc: "Maintenance en condition opérationnelle et développement de nouvelles fonctionnalités sur trois applications (application de gestion de clients, application de tarification de contrats et environnement back-end d'une application mobile)"
                    },
                    {
                        period: "févr 2016 - juin 2016",
                        company: "La SNCF - Paris",
                        companyLink: "https://www.sncf.com/fr",
                        as: "Développeur Java",
                        tools: "Java, Spring, JPA/Hibernate, Maven, AngularJS", 
                        desc: "Développement en binôme d'un POC sur la thématique des recharges de pass pour le TER"
                    },
                    {
                        period: "mai 2015 - sept 2015",
                        company: "Axione - Malakoff",
                        companyLink: "https://www.axione.com/",
                        as: "Cartographe",
                        tools: "ArcGIS, Excel", 
                        desc: "Intégration de données en masse dans un schéma directeur de développement de la fibre optique"
                    },
                    {
                        period: "nov 2014 - fév 2015",
                        company: "ERDF - Paris",
                        companyLink: "https://www.enedis.fr/",
                        as: "Cartographe",
                        tools: "Mercator, Excel", 
                        desc: "Gestion de la cartographie à moyenne échelle pour les quatres agences de Paris (portage de nouvelles versions logicielles, formation et support aux utilisateurs)"
                    },
                    {
                        period: "avr 2014 - sept 2014",
                        company: "Enertrag - Cergy",
                        companyLink: "https://france.enertrag.com/",
                        as: "Cartographe (stage de M2)",
                        tools: "ArgGIS, Excel", 
                        desc: "Prospection de nouvelles zones propices à l'implantation d'éoliennes, participation aux présentations en mairie"
                    },
                    {
                        period: "avr 2013 - sept 2013",
                        company: "Sermet - Créteil",
                        companyLink: "https://www.manergy.fr/",
                        as: "Cartographe (stage de M1)",
                        tools: "ArgGIS, Excel", 
                        desc: "Participation à un schéma directeur de développement de la géothermie : collecte de données auprès de bailleurs sociaux, création de cartes à partir des données collectées, participation au rapport final"
                    },
                    {
                        period: "avr 2012 - sept 2012",
                        company: "Planète verte - Paris",
                        companyLink: "http://www.planete-verte.fr/",
                        as: "Rédacteur technique (stage de L3)",
                        tools: "Word, Excel", 
                        desc: "Rédaction d'articles techniques dans le domaine de la mobilité électrique"
                    },
                    {
                        period: "jan 2008 - sept 2008",
                        company: "Casino de Pougues-les-Eaux",
                        companyLink: "https://casino-pougues-les-eaux.fr/",
                        as: "Croupier de Texas Hold'Em",
                        desc: "Croupier de poker (variante Texas Hold'em), gestion du fond de caisse et des litiges"
                    }
                ],
                english: [
                    {
                        period: "aug 2021 - oct 2022",
                        company: "Biocoop Le Chat Biotté - Combourg",
                        companyLink: "https://www.biocooplechatbiotte.com/",
                        as: "Polyvalent employee (notably Fruits & Vegetables)",
                        tools: "CocoBio, IziBio", 
                        desc: "Restock, delivering reception, welcoming/advices, cashiering, cleaning"
                    },
                    {
                        period: "july 2021 - aug 2021",
                        company: "Biocoop Scarabée - Rennes",
                        companyLink: "https://scarabee-biocoop.fr/",
                        as: "Driver - delivery person",
                        desc: "Commands checking, delivery and vehicle maintenance"
                    },
                    {
                        period: "june 2021 - july 2021",
                        company: "La vie claire - Monfort-sur-Meu",
                        companyLink: "https://www.lavieclaire.com/",
                        as: "Polyvalent employee (notably Fruits & Vegetables)",
                        desc: "Restock, delivering reception, welcoming/advices, cashiering, cleaning"
                    },
                    {
                        period: "jan 2021 - apr 2021",
                        company: "Open",
                        companyLink: "https://www.open.global/",
                        as: "Java/ReactJS developer",
                        tools: "Spring, Maven, ReactJS, PostgreSQL, Git Fork, GitLab", 
                        desc: "Maintenance and development of a mobile app generator with ReactJs as well as the back-end part developed in Java"
                    },
                    {
                        period: "sept 2018 - juin 2019",
                        as: "Développeur Java",
                        tools: "Java, Spring, JPA/Hibernate, Maven", 
                        desc: "Nine monthes intercontract in three differents companies, hence training on new technologies (Java8, Spring, JavaScript frameworks)"
                    },
                    {
                        period: "sept 2016 - sept 2018",
                        company: "La SACEM - Paris",
                        companyLink: "https://www.sacem.fr/",
                        as: "Java/SQL developer",
                        tools: "JDBC, Restlet, XStream, JUnit/Cucumber, Maven, PL/SQL, Git Bash, GitLab", 
                        desc: "Maintenance and development of three applications (clients management application, pricing application and back-end environment of a mobile app)"
                    },
                    {
                        period: "febr 2016 - june 2016",
                        company: "La SNCF - Paris",
                        companyLink: "https://www.sncf.com/fr",
                        as: "Développeur Java",
                        tools: "Java, Spring, JPA/Hibernate, Maven, AngularJS", 
                        desc: "Development of a Proof Of Concept on the theme of self pass-charging"
                    },
                    {
                        period: "may 2015 - sept 2015",
                        company: "Axione - Malakoff",
                        companyLink: "https://www.axione.com/",
                        as: "Cartographer",
                        tools: "ArcGIS, Excel", 
                        desc: "Data integration in a developement of the optical fiber"
                    },
                    {
                        period: "nov 2014 - febr 2015",
                        company: "ERDF - Paris",
                        companyLink: "https://www.enedis.fr/",
                        as: "Cartographer",
                        tools: "Mercator, Excel", 
                        desc: "Electricity networks cartography managing, as well as training and support for new users"
                    },
                    {
                        period: "apr 2014 - sept 2014",
                        company: "Enertrag - Cergy",
                        companyLink: "https://france.enertrag.com/",
                        as: "Cartographer (M2 internship)",
                        tools: "ArgGIS, Excel", 
                        desc: "Aeolien cartography prospecter"
                    },
                    {
                        period: "apr 2013 - sept 2013",
                        company: "Sermet - Créteil",
                        companyLink: "https://www.manergy.fr/",
                        as: "Cartographer (M1 internship)",
                        tools: "ArgGIS, Excel", 
                        desc: "Cartography, data interpretation and support on a geothermy developement blueprint"
                    },
                    {
                        period: "apr 2012 - sept 2012",
                        company: "Planète verte - Paris",
                        companyLink: "http://www.planete-verte.fr/",
                        as: "Technical writer (stage de L3)",
                        tools: "Word, Excel", 
                        desc: "Article writing on green mobility"
                    },
                    {
                        period: "jan 2008 - sept 2008",
                        company: "Casino de Pougues-les-Eaux",
                        companyLink: "https://casino-pougues-les-eaux.fr/",
                        as: "Texas Hold'Em dealer",
                        desc: "Texas Hold'Em dealer, managing cashier and tables"
                    }

                ]
            }

}

export default getNonDevExperience;