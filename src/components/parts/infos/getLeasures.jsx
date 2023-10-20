import EnumDomain from "../../helpers/EnumDomain";

const getLeasures = () => {

    return {
                french : 
                    [
                        {
                            activity: "Échecs",
                            domains: [EnumDomain.MATHS]
                        },
                        {
                            activity: "Maths",
                            domains: [EnumDomain.MATHS]
                        },
                        {
                            activity: "Programmation informatique",
                            domains: [EnumDomain.MATHS]
                        },
                        {
                            activity: "Basket"
                        },
                        {
                            activity: "Guitare"
                        }
                    ],
                english:
                    [
                        {
                            activity: "Chess",
                            domains: [EnumDomain.MATHS]
                        },
                        {
                            activity: "Maths",
                            domains: [EnumDomain.MATHS]
                        },
                        {
                            activity: "Computer programming",
                            domains: [EnumDomain.MATHS]
                        },
                        {
                            activity: "Basketball"
                        },
                        {
                            activity: "Guitar"
                        }
                    ]
        }
}

export default getLeasures;