import React from 'react';
import getEducation from "./infos/getEducation";
import { Hourglass, Award, GeoAltFill, ArrowUp } from 'react-bootstrap-icons';
import AppContext from '../context/AppContext';
import languageChooser from '../helpers/languageChooser';
import getTitles from './infos/getTitles';
import EnumDomain from '../helpers/EnumDomain';

const Education = () => {

    const {language, reduced, domain} = React.useContext(AppContext);
    var title = languageChooser(language, getTitles()).education;
    var diplomas = languageChooser(language, getEducation())
        .filter(dip => dip.domains && dip.domains.includes(domain));
    
    return  <div className="page-break">
                <div className="title">{title}</div>
                <div className="education">
                    {diplomas.map((diploma, index) => {
                        if(diploma.period === "pause") {
                            return  <div key={index}>  
                                        <div className="pause">
                                            <ArrowUp className="arrowup-icon-left" /> 
                                            <div className="center">{diploma.desc} </div>
                                            <ArrowUp className="arrowup-icon-right" /> 
                                        </div>
                                         <hr/>
                                    </div>
                        }

                        if(diploma.toBreak) {
                            var brokenList = diploma.desc.split(',')
                        }
                        
                        return  <div className={`element ${reduced && diploma.domains && diploma.domains.includes(EnumDomain.MATHS) ? "focus" : ""}`} id={`education-${index}`} key={index}>
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
                                        {
                                            !reduced ? 
                                                <div className="desc">
                                                    {
                                                        diploma.toBreak ? 
                                                            brokenList.map((el, index) => {
                                                                return <div className="element" key={index}>
                                                                            {el}
                                                                        </div>
                                                            })  
                                                                :   <> {diploma.desc}</>
                                                    }
                                                    {/* {diploma.desc} */}
                                                </div> : <></>
                                        }
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
                    {/* <hr />   */}      
                </div>
            </div>
}

export default Education;