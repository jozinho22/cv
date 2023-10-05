import React from 'react';
import getEducation from "./infos/getEducation";
import { Hourglass, Award, GeoAltFill } from 'react-bootstrap-icons';
import AppContext from '../context/AppContext';
import languageChooser from '../helpers/languageChooser';
import getTitles from './infos/getTitles';

const Education = ({domain}) => {

    const {language, focus} = React.useContext(AppContext);
    var title = languageChooser(language, getTitles()).education;
    var diplomas = languageChooser(language, getEducation()).filter(dip => (dip.domain === domain) || (!dip.domain));
    
    return  <div className="page-break">
                <div className="title">{title}</div>
                <div className="education">
                    {diplomas.map((diploma, index) => {
                        return  <div className={`element ${focus && diploma.domain && diploma.domain === domain? "focus" : ""}`} id={`education-${index}`} key={index}>
                                    <div className="icon-block period">
                                        <Hourglass className="icon" /> 
                                        <div className="element-of-icon period-date">
                                            {diploma.period}
                                        </div>
                                    </div>
                                    <div className="diplomas">
                                        <div className="icon-block">
                                            <Award className="icon" /> 
                                            <a href={diploma.titleLink} target="_blank" rel="noreferrer">
                                                <div className="element-of-icon">
                                                    {diploma.title}
                                                </div>
                                            </a>
                                        </div>
                                        <div className="desc">
                                            {diploma.desc}
                                        </div>
                                    </div>
                                    <div className="school">
                                        <div className="icon-block">
                                            <GeoAltFill className="icon" /> 
                                            <a href={diploma.schoolLink} target="_blank" rel="noreferrer">
                                                <div className="element-of-icon">
                                                    {diploma.school}
                                                </div>
                                            </a>
                                        </div> 
                                    </div>
                                </div>
                    })}
                    <hr />        
                </div>
            </div>
}

export default Education;