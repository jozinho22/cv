import {Row, Col} from 'react-bootstrap';
import getLeasures from "./getLeasures";

const Leasures = () => {

    var leasures = getLeasures();

    var nbRows = leasures.length / 3;
    var nbCols = 3;
    var rows = [];
    var i = 0;

    for(var r = 0; r < nbRows; r++) {
        var cols = [];
        for(var c = 0; c < nbCols; c++) {
            var col =   <Col className="element" key={`col${c}`}>
                            <div className="icon-block">
                                <div className="icon" >{leasures[i].icon}</div> 
                                <div className="element-of-icon">{leasures[i].activity}</div>
                            </div>
                        </Col>;
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
                        return <Row key={row.index}>
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