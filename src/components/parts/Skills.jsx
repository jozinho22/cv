import React from 'react';
import { ProgressBar, Col, Row } from 'react-bootstrap';
import getSkills from './infos/getSkills';
import AppContext from '../context/AppContext';
import getTitles from './infos/getTitles';
import languageChooser from '../helpers/languageChooser';

const Skills = () => {

    const {language} = React.useContext(AppContext);
    var title = languageChooser(language, getTitles()).skills;
    var skills = getSkills();

    var mobile = document.body.offsetWidth < 450;
    var nbCols = mobile ? 1 : 2;
    var nbRows = Math.ceil(skills.length / nbCols);
    var rows = [];
    var i = 0;

    for(var r = 0; r < nbRows; r++) {
        var cols = [];
        for(var c = 0; c < nbCols; c++) {
            var col = {};

            if(r === (nbRows - 1) && skills.length % nbCols !== 0 && c + 1 > skills.length % nbCols) {
                continue;
            } else {
                col =   <Col key={`skills-col-${c}`}>
                            <div className="element">
                                <div className="icon-block">
                                    <div className="icon">{skills[i].icon}</div>
                                    <div className="element-of-icon">{skills[i].language}</div>
                                </div>
                                <ProgressBar now={skills[i].level} />
                                <div className="frameworks">
                                    {skills[i].frameworks ? 
                                        `(${skills[i].frameworks})` :
                                            <></>
                                    }
                                </div>   
                            </div>   
                        </Col>;
            }
            cols.push(col); 
            i++; 
        }
        rows.push(
            {
                index: `skills-row-${r}`,
                cols: cols
            }
        );
    }

    return <div className="page-break">
                <div className="title">{title}</div>
                <div className="skills">
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

export default Skills;