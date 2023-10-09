import { Button } from 'react-bootstrap';
import Constants from './Constants';
import { House } from 'react-bootstrap-icons';
import EnumDomain from './EnumDomain';

const Error = ( {domain} ) => {

    return (
        <>
            <div className="error">
                <div style={{paddingTop: "20px"}}>
                    <p>Cette url ne correspond à aucune page du site...</p>
                    <a href={`${Constants.BASE_URL}${domain !== EnumDomain.GENERIC ? '/#/' + domain : ''}`}>
                        <Button variant="success" className="theme-button" >
                            <div className="icon-block">
                                <House className="icon" /> 
                                <div className="element-of-icon">
                                    Retour au CV
                                </div>    
                            </div>
                        </Button> 
                    </a>
                </div>
            </div>
        </> 
    );
}

export default Error;