import React from 'react';
import { Container, Button, Row, Col, Dropdown } from 'react-bootstrap';
import { useReactToPrint } from "react-to-print";
import pageStyle from '../helpers/pageStyle';

import {getThemes} from '../styles/getThemes';
import AppContext from '../context/AppContext';
import { FilePdfFill, Globe, Magic } from 'react-bootstrap-icons';

const Header = () => {

    const {theme, updateTheme, language, updateLanguage} = React.useContext(AppContext);
    var catchedDiv = {};

    /* var themes = getThemes();  */
    var mobile = document.body.offsetWidth < 450;

/*     const selectTheme = (eventKey, event) => {
        updateTheme(eventKey);
        sessionStorage.setItem('josselin-douineau-developer-theme', JSON.stringify(eventKey));
    } */

    const switchTheme = () => {
        updateTheme(theme === 'Blank' ? 'Darcula' : 'Blank');
    }

    const switchLanguage = () => {
        updateLanguage(language === 'French' ? 'English' : 'French');
    }

    const buildElementToPrint = () => {

        var entirePage = document.querySelector("#capture").cloneNode(true);
        document.getElementById("doc-to-print").appendChild(entirePage);

        catchedDiv = document.getElementById("doc-to-print");
        catchedDiv.getElementsByClassName("header")[0].remove();

        return catchedDiv.getElementsByClassName("App")[0];

    }

    const destroyElementToPrint = () => {
        catchedDiv.getElementsByClassName("App")[0].remove();
    }

    const print = useReactToPrint(
        {
            content: () => buildElementToPrint(), 
            pageStyle: pageStyle(),
            documentTitle: 'Josselin DOUINEAU - developer',
            onAfterPrint: () => destroyElementToPrint()
        }
    );

    return  <Container className="header">
                <Row className="header-button-container">
                    <Col xs={4}>
                        <Button variant="warning" className="printer-button" onClick={print}>
                            <div className="icon-block">
                                <FilePdfFill className="icon" /> 
                                {!mobile ? <div className="element-of-icon">Export</div> : <></>}
                            </div>
                        </Button>
                    </Col>
                    
                    <Col xs={4}>
                        <Button variant="success" className="theme-button" onClick={switchTheme}>
                            <div className="icon-block">
                                <Magic className="icon" /> 
                                {!mobile ?  <div className="element-of-icon">
                                                {theme === 'Blank' ? 'Switch to dark' : 'Switch to blank'}
                                            </div> 
                                                : <></>}
                            </div>
                        </Button>         
                    </Col>

                    <Col xs={4}>
                        <Button variant="primary" className="language-button" onClick={switchLanguage}>
                            <div className="icon-block">
                                {
                                    !mobile ?
                                        <div className="element-of-icon element-of-icon-left">
                                            {
                                                language === 'French' ? 'FR' : 'EN'
                                            }
                                        </div>
                                            : <></>
                                }
                                
                                <Globe className="icon" /> 
                                {
                                    !mobile ?
                                        <div className="element-of-icon">
                                            {
                                                language === 'French' ? 'EN' : 'FR'
                                            }
                                        </div>
                                            : <></>
                                }
                            </div>
                        </Button>
                    </Col>
                </Row>
            </Container>
}

export default Header;