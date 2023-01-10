import React from 'react';
import getDiplomas from "./infos/getDiplomas";

import {GiSandsOfTime} from 'react-icons/gi';
import {GiDiploma} from 'react-icons/gi';
import {MdOutlineAlternateEmail} from 'react-icons/md';
import AppContext from '../context/AppContext';
import languageChooser from '../helpers/languageChooser';
import getTitles from './infos/getTitles';

const Education = () => {

    const {language} = React.useContext(AppContext);
    var title = languageChooser(language, getTitles()).education;
    var diplomas = languageChooser(language, getDiplomas());
    
    return  <div className="page-break">
                <div className="title">{title}</div>
                <div className="education">
                    {diplomas.map((diploma, index) => {
                        return  <div className="element" id={`education-${index}`} key={index}>
                                    <div className="icon-block period">
                                        <GiSandsOfTime className="icon" /> 
                                        <div className="element-of-icon period-date">
                                            {diploma.period}
                                        </div>
                                    </div>
                                    <div className="diplomas">
                                        {
                                            Array.isArray(diploma.title) ?
                                                <>
                                                    <GiDiploma className="icon" />
                                                    <div className="element-of-icon">
                                                        {language === "French" ? "Certifications" : "Certificates"}
                                                    </div>
                                                    
                                                    <div className="display-flex">
                                                        {
                                                            diploma.title.map((certif, index) => {
                                                                return <div key={index} className="flex-content">
                                                                            {certif}
                                                                        </div>
                                                                        
                                                            })
                                                        }  
                                                    </div>                                                 
                                                </>
                                                    :   <>
                                                            <GiDiploma className="icon" /> 
                                                            <div className="element-of-icon">
                                                                <a href={diploma.titleLink} target="_blank" rel="noreferrer">
                                                                    {diploma.title}
                                                                </a>
                                                            </div>
                                                        </>
                                        }
                                        
                                    </div>
                                    <div className="icon-block school">
                                        <MdOutlineAlternateEmail className="icon" /> 
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