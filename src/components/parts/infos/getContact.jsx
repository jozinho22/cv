import { GeoAltFill, TelephoneFill, Envelope} from 'react-bootstrap-icons';

const getContact = () => {
    return {
            french: [
                {
                    info: "Hédé, Bretagne",
                    icon : <GeoAltFill />
                },
                {
                    info: "06 25 45 01 76",
                    type: "tel",
                    icon : <TelephoneFill />
                },
                {
                    info: "josselin.douineau@gmail.com",
                    type: "courriel",
                    icon : <Envelope />
                }
            ],
            english: [
                {
                    info: "Hédé, Brittany",
                    icon : <GeoAltFill />
                },
                {
                    info: "00336 25 45 01 76",
                    type: "tel",
                    icon : <TelephoneFill />
                },
                {
                    info: "josselin.douineau@gmail.com",
                    type: "mail",
                    icon : <Envelope />
                }
            ]
            
        }
}

export default getContact;