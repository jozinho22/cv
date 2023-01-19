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
                                                <a href={diploma.titleLink} target="_blank" rel="noreferrer">
                                                    {diploma.title}
                                                </a>
                                            </div>
                                            {
                                                diploma.certif ?
                                                    <div className="certif-desc" >{diploma.certif}</div>
                                                        :   <></>
                                            }
                                        </>
                                    </div>
                                    <div className="icon-block school">
                                        <GeoAltFill className="icon" /> 
                                        <div className="element-of-icon">
                                            <a href={diploma.schoolLink} target="_blank" rel="noreferrer">
                                                {diploma.school}
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