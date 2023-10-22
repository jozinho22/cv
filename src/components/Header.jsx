import React from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import AppContext from './context/AppContext';
import { FilePdfFill, Globe, Magic, Link45deg, PlusLg, DashLg } from 'react-bootstrap-icons';
import EnumDomain from './helpers/EnumDomain';
import Constants from './helpers/Constants';

const Header = () => {

    const {theme, updateTheme, language, updateLanguage, reduced, updateReduced, domain} = React.useContext(AppContext);

    var mobile = document.body.offsetWidth < 450;

    /* console.log(domain) */

    const switchTheme = () => {
        updateTheme(theme === 'Blank' ? 'Darcula' : 'Blank');
    }

    const switchLanguage = () => {
        updateLanguage(language === 'French' ? 'English' : 'French');
    }

    const switchReduced = () => {
        updateReduced(!reduced);
    }

    const retrieveHeader = React.useCallback(() => {
            document.getElementsByClassName("header-button-container")[0].style.display = "flex";
            document.getElementsByClassName("web-button-container")[0].style.display = "none"; 
        }, []);

    const printWindow = () => {

        document.getElementsByClassName("header-button-container")[0].style.display = "none";
        document.getElementsByClassName("web-button-container")[0].style.display = "flex";
        window.print();
        retrieveHeader(); 
    }

    return  <Container className="header">
                <Row className="header-button-container">

                    <Col xs={3} >
                        <Button variant="warning" className="printer-button" onClick={printWindow} >
                            <div className="icon-block">
                                <FilePdfFill className="icon" /> 
                                {!mobile ? <div className="element-of-icon">Export</div> : <></>}
                            </div>
                        </Button>
                    </Col>
                    
                    <Col xs={3} >
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

                    <Col xs={3} >
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
                    
                    <Col xs={3} >
                        <Button variant="danger" className="reduced-button" onClick={switchReduced}>
                            <div className="icon-block">
                                {reduced ? <PlusLg className="icon" /> : <DashLg className="icon" /> }
                                {!mobile ?  <div className="element-of-icon">
                                                {reduced ? 'More details' : 'Less details'}
                                            </div> 
                                                : <></>}
                            </div>
                        </Button>         
                    </Col>

                </Row>

                <div className="web-button-container" id="web-button-container">
                    <a href={`${Constants.WEB_APP_URL}${domain !== EnumDomain.MATHS ? '/#/' + domain : ''}`} target="_blank" rel="noreferrer">
                        <Button variant="danger" className="web-button">
                            <div className="icon-block">
                                <Link45deg className="icon" /> 
                                <div className="element-of-icon">
                                    Web version
                                </div> 
                            </div>
                        </Button> 
                    </a>
                </div>

            </Container>
}

export default Header;