import React from 'react';
import { Button, Row, Col, Dropdown } from 'react-bootstrap';
import printToPdf from '../helpers/printToPdf';
import getThemes from '../styles/getThemes';
import AppContext from '../context/AppContext';
import {ImFilePdf} from 'react-icons/im';
import {TbSwitchHorizontal} from 'react-icons/tb';

const Header = () => {

    const {updateTheme, language, updateLanguage} = React.useContext(AppContext);

    var themes = getThemes(); 

    const selectTheme = (eventKey, event) => {
        updateTheme(eventKey);
        localStorage.setItem('theme', JSON.stringify(eventKey));
    }

    const switchLanguage = () => {
        updateLanguage(language === 'French' ? 'English' : 'French');
        localStorage.setItem('language', JSON.stringify(language));
    }

    return  <div className="header">
                <Row className="header-button-container">
                    <Col>
                        <Button variant="warning" className="printer-button" onClick={printToPdf}>
                            <div className="icon-block">
                                <ImFilePdf className="icon" /> 
                                <div className="element-of-icon">Export to PDF</div>
                            </div>
                        </Button>
                    </Col>
                    <Col>
                        <Button variant="primary" className="language-button" onClick={switchLanguage}>
                            <div className="icon-block">
                                <TbSwitchHorizontal className="icon" /> 
                                <div className="element-of-icon">
                                    {
                                        language === 'French' ? 'Changer de langue' : 'Switch idiom'
                                    }
                                </div>
                            </div>
                        </Button>
                    
                    </Col>
                    <Col>
                        <Dropdown onSelect={selectTheme}>
                            <Dropdown.Toggle 
                                className="dropdown-button"
                                variant="success" 
                                id="theme-dropdown-menu">
                                Themes
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
                </Row>
            </div>
}

export default Header;