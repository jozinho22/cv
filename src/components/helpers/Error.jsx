import { Button } from 'react-bootstrap';
import Constants from './Constants';

const Error = () => {
    return (
        <>
            <div className="error">
                <div style={{paddingTop: "20px"}}>
                    <p>Cette url ne correspond à aucune page du site...</p>
                    <Button variant="success" className="theme-button" href={Constants.BASE_URL}>
                        Retour au CV
                    </Button>
                </div>
            </div>
            
        </> 
    );
}

export default Error;