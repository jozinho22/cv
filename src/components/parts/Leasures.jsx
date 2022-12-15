import React from 'react';
import {Row, Col} from 'react-bootstrap';
import getLeasures from "./infos/getLeasures";
import AppContext from '../context/AppContext';
import languageChooser from '../helpers/languageChooser';

const Leasures = () => {

    const {language} = React.useContext(AppContext);
    var leasures = languageChooser(language, getLeasures());

    var mobile = document.body.offsetWidth < 450;
    var nbCols = mobile ? 2 : 3;
    var nbRows = Math.ceil(leasures.length / nbCols);
    var rows = [];
    var i = 0;

    for(var r = 0; r < nbRows; r++) {
        var cols = [];
        for(var c = 0; c < nbCols; c++) {
            var col = {};

            if(r === (nbRows - 1) && c >= (leasures.length % nbCols)) {
                continue;
            } else {
                col =   <Col className="element" key={`col${c}`}>
                            <div className="icon-block">
                                <div className="icon">{leasures[i].icon}</div> 
                                <div className="element-of-icon">{leasures[i].activity}</div>
                            </div>
                        </Col>;
                
            }
            cols.push(col); 
            i++; 
        }
        rows.push(
            {
                index: `row${r}`,
                cols: cols
            }
        );
    }

    return <>
                <div className="subheading">Leasures</div>
                <div className="leasures element"> 
                    {rows.map((row) => {
                        return <Row id={`leasure-${row.index}`} key={row.index}>
                                    {
                                        row.cols.map(col => {
                                            return col;
                                        })
                                    }
                                </Row>
                    })}  
                </div>
            </>
}

export default Leasures;