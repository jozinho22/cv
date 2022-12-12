import React from 'react';
import { Button, Row, Col, Dropdown } from 'react-bootstrap';
import printToPdf from '../helpers/printToPdf';
import getThemes from '../styles/getThemes';
import AppContext from '../context/AppContext';

const Header = () => {

    const {updateTheme} = React.useContext(AppContext);

    var themes = getThemes(); 

    const selectTheme = (eventKey, event) => {
        updateTheme(eventKey);
        localStorage.setItem('theme', JSON.stringify(eventKey));
    }

    return  <div className="header">
                <Row className="header-button-container">
                    <Col>
                        <Button variant="warning" className="header-button" onClick={printToPdf}>
                            Export to PDF
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