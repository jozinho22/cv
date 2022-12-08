import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';

import printToPdf from '../helpers/printToPdf';

import AppContext from '../context/AppContext';

const Header = () => {

    const {theme, updateTheme} = React.useContext(AppContext);

    return  <Row className="header-button-container">
                <Col>
                    <Button variant="warning" className="header-button" onClick={printToPdf}>
                        Export to PDF
                    </Button>
                </Col>
                <Col>
                    <Button 
                        variant="danger" 
                        className="header-button" 
                        onClick={() => {
                                let newTheme = "";
                                if(theme === "Default") {
                                    newTheme = "Darcula";
                                } else {
                                    newTheme = "Default";
                                }
                                updateTheme(newTheme);
                                localStorage.setItem('theme', JSON.stringify(newTheme));
                            }}>
                        {theme === "Default" ? "Change to dark" : "Get back to light"}
                    </Button>
                </Col>
            </Row>
}

export default Header;