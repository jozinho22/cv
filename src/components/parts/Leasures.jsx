import React from 'react';
import {Row, Col} from 'react-bootstrap';
import getLeasures from "./infos/getLeasures";
import AppContext from '../context/AppContext';
import languageChooser from '../helpers/languageChooser';
import getTitles from './infos/getTitles';

const Leasures = () => {

    const {language} = React.useContext(AppContext);
    var title = languageChooser(language, getTitles()).leasures;
    var leasures = languageChooser(language, getLeasures());

    var mobile = document.body.offsetWidth < 450;
    var nbCols = mobile ? 2 : 4;
    var nbRows = Math.ceil(leasures.length / nbCols);
    var rows = [];
    var i = 0;

    for(var r = 0; r < nbRows; r++) {
        var cols = [];
        for(var c = 0; c < nbCols; c++) {
            var col = {};
             console.log(c)
            if(r === (nbRows - 1) && leasures.length % nbCols !== 0 && c + 1 > leasures.length % nbCols) {
                continue;
            } else {
                col =   <Col key={`leasures-col-${c}`}>
                            <div className="element">
                                <div className="icon-block">
                                    <div className="icon">{leasures[i].icon}</div> 
                                    <div className="element-of-icon">{leasures[i].activity}</div>
                                </div>
                            </div>
                        </Col>;
                
            }
           
            cols.push(col); 
            i++; 
        }
        rows.push(
            {
                index: `leasures-row-${r}`,
                cols: cols
            }
        );
        console.log(rows)
    }

    return <div className="page-break">
                <div className="title">{title}</div>
                <div className="leasures element"> 
                    {rows.map((row) => {
                        return <Row key={row.index}>
                                    {
                                        row.cols.map(col => col)
                                    }
                                </Row>
                    })} 
                    <hr /> 
                </div>
            </div>
}

export default Leasures;