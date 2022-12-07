const getJobs = () => {

    var maThematique = "https://ma-thematique.netlify.app/";
    return [
        {
            period: "mar 2020 - now",
            company: "@Home",
            as: "developer",
            desc: "I develop personal projects such as the last one",
            references: [maThematique]
        },
        {
            period: "jan 2021 - apr 2021",
            company: "Open",
            as: "Java/ReactJS developer",
            desc: "I worked on a mobile app generator"
        },
        {
            period: "sept 2016 - sept 2018",
            company: "La SACEM",
            as: "Java/SQL developer",
            desc: "I worked on many applications, mainly do some corrections in the Java and PL/SQL code"
        }
    ]
}

export default getJobs;