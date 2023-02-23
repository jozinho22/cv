import React from 'react';
import getCertifications from "./infos/dev/getDevCertifications";
import { Hourglass, Award, GeoAltFill } from 'react-bootstrap-icons';
import AppContext from '../context/AppContext';
import languageChooser from '../helpers/languageChooser';
import getTitles from './infos/getTitles';

const Certifications = () => {

    const {language} = React.useContext(AppContext);
    var title = languageChooser(language, getTitles()).certifications;
    var certifs = languageChooser(language, getCertifications());
    
    return  <div className="page-break">
                <div className="title">{title}</div>
                <div className="certifications">
                    {certifs.map((certif, index) => {
                        return  <div className="element" id={`education-${index}`} key={index}>
                                    <div className="period icon-block">
                                        <Hourglass className="icon" /> 
                                        <div className="element-of-icon period-date">
                                            {certif.period}
                                        </div>
                                    </div>
                                    <div className="certification icon-block">
                                        <Award className="icon" /> 
                                        <div className="element-of-icon">
                                            {certif.title}
                                        </div>
                                    </div>
                                    <div className="desc">
                                        {certif.desc}
                                    </div>
                                    <div className="school icon-block">
                                        <GeoAltFill className="icon" /> 
                                        <a href={certif.schoolLink} target="_blank" rel="noreferrer">
                                            <div className="element-of-icon" >{certif.school}</div>
                                        </a>
                                    </div>
                                </div>
                    })}
                    <hr />        
                </div>
            </div>
}

export default Certifications;