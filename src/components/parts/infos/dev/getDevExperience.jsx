const getDevExperience = () => {
    return {
            french: [
                {
                    period: "january2021 - avril 2021",
                    company: "Open",
                    companyLink: "https://www.open.global/",
                    as: "Développeur Java/ReactJS",
                    tools: "Java 8, Spring, Maven, ReactJS, PostgreSQL, Git Fork, GitLab", 
                    context: "La start-up SWIZI développe un générateur d’applications mobiles customisables pour ses clients. \n Il y a alors un front-end développé en ReactJs qui fait appel à un back en Java. ",
                    desc: "Sur ces deux projets, j'ai été amené à développer de nouvelles fonctionnalités telles que l'ajout de nouvelles données, de créer de nouvelles requêtes à la base de données, de développer la possibilité d’ajout de nouveaux types de fichiers et d’assurer la cohérence des transferts de données entre le front-end et et le back-end."
                },
                {
                    period: "septembre 2016 - septembre 2018",
                    company: "La SACEM - Paris",
                    companyLink: "https://www.sacem.fr/",
                    as: "Développeur Java/SQL",
                    tools: "Java 6, JDBC, Restlet, XStream, JUnit/Cucumber, Maven, PL/SQL, Git Bash, GitLab", 
                    context: "La SACEM facture des redevances aux diffuseurs de musique dans le but de le redistribuer aux acteurs du domaine (auteurs, compositeurs, interprètes). ",
                    desc: "\n Il y trois projets sur lesquels j'ai travaillé : \n \n - Projet de gestion comptable : application destinée aux employés de la SACEM, contenant une IHM, un back-end en Java et des appels à la base données (avec de nombreuses procédures stockées en PL/SQL). Ce projet est destiné à recenser les clients diffuseurs de musique et de suivre le déroulement comptable de leur facturation. \n J'étais en charge, un sein d'une équipe de sept développeurs, de la maintenance et de l'évolution de la partie Java, avec quelques fois à intervenir dans la partie PL/SQL. \n \n - Projet de facturation des contrats : ce projet est un projet Java qui est appelé par le premier pour retourner un facturation complexe en fonction des paramètres de chaque établissement. \n Sur ce projet, j'ai implémenté de nouveaux contrats en cohérence avec le portail publique d'inscriptions de la SACEM, et développé des tests unitaires systématiquement. \n \n - Projet mobile de suivi d’établissements : une application mobile a été développée pour pouvoir aller prospecter et suivre l’avancement des nouveaux clients sur le terrain. \n Cette appli était relié aux back-end en Java dont j’avais en charge la maintenance et l'évolution."
                }
        ],
        english: [
            {
                period: "january 2021 - april 2021",
                company: "Open",
                companyLink: "https://www.open.global/",
                as: "Java/ReactJS developer",
                tools: "Java 8, Spring, Maven, ReactJS, PostgreSQL, Git Fork, GitLab", 
                context: "SWIZI is a start-up developping a mobile app generator for its customers. \n There is a front-end part on ReactJs and a back-end on Java.",
                desc: "On those two projects, I developped new features such as adding new datas, creating new databases requests and assuring back and front coherence."
            },
            {
                period: "september 2016 - september 2018",
                company: "La SACEM - Paris",
                companyLink: "https://www.sacem.fr/",
                as: "Java/SQL developer",
                tools: "Java 6, JDBC, Restlet, XStream, JUnit/Cucumber, Maven, PL/SQL, Git Bash, GitLab", 
                context: "SACEM factures all the music diffusers in order to dsitribute it to the music main actors, such as authors, composers and interpreters.",
                desc: "I worked on three projects: \n \n - Accountibility management : application made for SACEM's employees, contening a GUI, a Java back-end and database calls (as well with stored procedures in PL/SQL). This projets helps to manage SACEM's clients and facturation. \n I a seven developers team, i was in charge of maintening and developping new features on the Java part, and sometimes on the PL/SQL part. \n \n - Contracts facturation projets : this Java project calculates a complex pricing according to the contract parameters. \n On this projet, I implemented new contracts, and add unit tests systematically. \n \n - New clients management mobile project : a mobile app was developped to follow and prospect new clients at their establishment. \n This app was related to a Java back-end application which I was in charge of the maintenance."
            }
        ]

    }
}

export default getDevExperience;