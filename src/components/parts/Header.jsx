import React from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import { useReactToPrint } from "react-to-print";
import pageStyle from '../helpers/pageStyle';

import AppContext from '../context/AppContext';
import { FilePdfFill, Globe, Magic, Search } from 'react-bootstrap-icons';
import EnumDomain from '../helpers/EnumDomain';

const Header = ( {domain, poste, boite} ) => {

    const {theme, updateTheme, language, updateLanguage, focus, updateFocus} = React.useContext(AppContext);

    var catchedDiv = {};


    var mobile = document.body.offsetWidth < 450;

    const switchTheme = () => {
        updateTheme(theme === 'Blank' ? 'Darcula' : 'Blank');
    }

    const switchLanguage = () => {
        updateLanguage(language === 'French' ? 'English' : 'French');
    }

    const switchFocus = () => {
        updateFocus(!focus);
    }

    const buildElementToPrint = () => {

        var entirePage = document.querySelector("#capture").cloneNode(true);
        document.getElementById("doc-to-print").appendChild(entirePage);
        catchedDiv = document.getElementById("doc-to-print");

        catchedDiv.getElementsByClassName("header")[0].remove(); 
        if(domain === EnumDomain.MATHS) {
            catchedDiv.getElementsByClassName("focus-disclaimer")[0].remove(); 
        }

        return catchedDiv.getElementsByClassName("App")[0];
    }

    const destroyElementToPrint = () => {
        catchedDiv.getElementsByClassName("App")[0].remove();
    }

    const print = useReactToPrint(
        {
            content: () => buildElementToPrint(), 
            pageStyle: pageStyle(),
            documentTitle: domain === `Josselin DOUINEAU - ${poste}${boite !== '' ? ` - ${boite}` : ''} - CV`,
            onAfterPrint: () => destroyElementToPrint()
        }
    );

    return  <Container className="header">
                <Row className="header-button-container">
                    <Col xs={domain === EnumDomain.MATHS ? 3 : 4} >
                        <Button variant="warning" className="printer-button" onClick={print}>
                            <div className="icon-block">
                                <FilePdfFill className="icon" /> 
                                {!mobile ? <div className="element-of-icon">Export</div> : <></>}
                            </div>
                        </Button>
                    </Col>
                    
                    <Col xs={domain === EnumDomain.MATHS ? 3 : 4} >
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

                    <Col xs={domain === EnumDomain.MATHS ? 3 : 4} >
                        <Button variant="primary" className="language-button" onClick={switchLanguage}>
                            <div className="icon-block">
                                {
                                    !mobile ?
                                        <div className="element-of-icon element-of-icon-left">
                                            {language === 'French' ? 'FR' : 'EN'}
                                        </div>
                                            : <></>
                                }
                                
                                <Globe className="icon" /> 
                                {
                                    !mobile ?
                                        <div className="element-of-icon">
                                            {language === 'French' ? 'EN' : 'FR'}
                                        </div>
                                            : <></>
                                }
                            </div>
                        </Button>
                    </Col>
                    
                    {
                        domain === EnumDomain.MATHS ?
                            <Col xs={domain === EnumDomain.MATHS ? 3 : 4} >
                                <Button variant="danger" className="focus-button" onClick={switchFocus}>
                                    <div className="icon-block">
                                        <Search className="icon" /> 
                                        {!mobile ?  <div className="element-of-icon">
                                                        {focus === true ? 'Remove focuses' : 'Display focuses'}
                                                    </div> 
                                                        : <></>}
                                    </div>
                                </Button>         
                            </Col>
                                :   <></>
                    }
                   
                </Row>
            </Container>
}

export default Header;