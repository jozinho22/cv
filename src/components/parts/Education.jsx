import React from 'react';
import getEducation from "./infos/getEducation";
import { Hourglass, Award, GeoAltFill } from 'react-bootstrap-icons';
import AppContext from '../context/AppContext';
import languageChooser from '../helpers/languageChooser';
import getTitles from './infos/getTitles';

const Education = () => {

    const {language} = React.useContext(AppContext);
    var title = languageChooser(language, getTitles()).education;
    var diplomas = languageChooser(language, getEducation());
    
    return  <div className="page-break">
                <div className="title">{title}</div>
                <div className="education">
                    {diplomas.map((diploma, index) => {
                        return  <div className="element" id={`education-${index}`} key={index}>
                                    <div className="icon-block period">
                                        <Hourglass className="icon" /> 
                                        <div className="element-of-icon period-date">
                                            {diploma.period}
                                        </div>
                                    </div>
                                    <div className="diplomas">
                                        <>
                                            <Award className="icon" /> 
                                            <div className="element-of-icon">
                                                {diploma.what}
                                            </div>
                                            <a href={diploma.whatLink} target="_blank" rel="noreferrer">
                                                 <div className="desc" >{diploma.whatDesc}</div>
                                            </a>
                                        </>
                                    </div>
                                    <div className="school">
                                        <>
                                            <GeoAltFill className="icon" /> 
                                            <div className="element-of-icon">
                                                {diploma.where}
                                            </div>
                                            <a href={diploma.whereLink} target="_blank" rel="noreferrer">
                                                 <div className="desc" >{diploma.whereDesc}</div>
                                            </a>
                                        </>
                                    </div>
                                </div>
                    })}
                    <hr />        
                </div>
            </div>
}

export default Education;