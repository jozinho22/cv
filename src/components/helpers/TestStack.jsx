import { Button, Container } from "react-bootstrap";
import React from 'react';
import { FilePdfFill, Link45deg } from 'react-bootstrap-icons';
import Constants from "./Constants";

const TestStack = () => {

    var mobile = document.body.offsetWidth < 450;

    const retrieveHeader = React.useCallback(() => {
    }, []);

    const printWindow = () => {

        window.print();
   
    }

    return  <Container>
                <div className="web-button-container-test" id="web-button-container">
                    <a href={`${Constants.WEB_APP_URL}${'/#/test'}`} target="_blank" rel="noreferrer">
                        <Button variant="danger" className="web-button">
                            <div className="icon-block">
                                <Link45deg className="icon" /> 
                                <div className="element-of-icon">
                                  button link
                                </div> 
                            </div>
                        </Button> 
                    </a>
                </div>
                <hr />
                <div style={{textAlign: "left"}}>
                    <a href={`${Constants.WEB_APP_URL}${'/#/test'}`} target="_blank" rel="noreferrer"> 
                        
                            simple link
                        
                    </a>
                </div>
                <div >
                    <Button variant="warning" className="printer-button" onClick={printWindow} >
                        <div className="icon-block">
                            <FilePdfFill className="icon" /> 
                            {!mobile ? <div className="element-of-icon">Export</div> : <></>}
                        </div>
                    </Button>
                </div>
            </Container>

}

export default TestStack;