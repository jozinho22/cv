import React from 'react';
import { Container, Button, Row, Col, Dropdown } from 'react-bootstrap';
import { useReactToPrint } from "react-to-print";
import pageStyle from '../helpers/pageStyle';

import getThemes from '../styles/getThemes';
import AppContext from '../context/AppContext';
import {ImFilePdf} from 'react-icons/im';
import {TbSwitchHorizontal} from 'react-icons/tb';
import {IoMdColorWand} from 'react-icons/io';

const Header = () => {

    const {updateTheme, language, updateLanguage} = React.useContext(AppContext);
    var catchedDiv = {};

    var themes = getThemes(); 

    const selectTheme = (eventKey, event) => {
        updateTheme(eventKey);
        localStorage.setItem('theme', JSON.stringify(eventKey));
    }

    const switchLanguage = () => {
        updateLanguage(language === 'French' ? 'English' : 'French');
        localStorage.setItem('language', JSON.stringify(language));
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
                                <ImFilePdf className="icon" /> 
                                <div className="element-of-icon">Export</div>
                            </div>
                        </Button>
                    </Col>
                    
                    <Col xs={4}>
                        <Dropdown onSelect={selectTheme}>
                            <Dropdown.Toggle 
                                className="theme-button"
                                variant="success" 
                                id="theme-dropdown-menu" >
                                <div className="icon-block">
                                    <IoMdColorWand className="icon" /> 
                                    <div className="element-of-icon">Theme</div>
                                </div>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {
                                    themes.map(theme => (
                                        <Dropdown.Item 
                                            key={theme.id}
                                            id="theme-dropdown-item"
                                            className={theme.name}
                                            eventKey={theme.name}>
                                            {theme.name}
                                        </Dropdown.Item>
                                    ))
                                }     
                            </Dropdown.Menu>
                        </Dropdown>               
                    </Col>

                    <Col xs={4}>
                        <Button variant="primary" className="language-button" onClick={switchLanguage}>
                            <div className="icon-block">
                                <div className="element-of-icon element-of-icon-left">
                                    {
                                        language === 'French' ? 'FR' : 'EN'
                                    }
                                </div>
                                <TbSwitchHorizontal className="icon" /> 
                                <div className="element-of-icon">
                                    {
                                        language === 'French' ? 'EN' : 'FR'
                                    }
                                </div>
                            </div>
                        </Button>
                    </Col>
                </Row>
            </Container>
}

export default Header;