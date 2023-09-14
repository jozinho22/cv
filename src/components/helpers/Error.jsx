import { Button } from 'react-bootstrap';

const Error = () => {
    return (
        <>
            <p>Cette url ne correspond à aucune page du site...</p>
            <Button className="DefaultButton" href="/">
                Retour au CV
            </Button>
        </> 
    );
}

export default Error;