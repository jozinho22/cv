import React from 'react';
import { Button } from 'react-bootstrap';
import Constants from './Constants';
import { House } from 'react-bootstrap-icons';
import EnumDomain from './EnumDomain';
import AppContext from '../context/AppContext';

const Error = () => {

    const {domain} = React.useContext(AppContext);
    console.log(domain)
    return (
        <>
            <div className="error">
                <div style={{paddingTop: "20px"}}>
                    <p>Cette url ne correspond à aucune page du site...</p>
                    <a href={`${Constants.BASE_URL}${Object.keys(domain).length !== 0 && domain !== EnumDomain.GENERIC ? '/#/' + domain : ''}` }>
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