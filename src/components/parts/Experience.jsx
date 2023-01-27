import React from 'react';
import getExperience from "./infos/getExperience";

import { Hourglass, PcDisplayHorizontal, GeoAltFill, CodeSquare, WrenchAdjustable, Link45deg } from 'react-bootstrap-icons';
import AppContext from '../context/AppContext';
import languageChooser from '../helpers/languageChooser';
import getTitles from './infos/getTitles';

const Experience = () => {

    const {language} = React.useContext(AppContext);
    var title = languageChooser(language, getTitles()).experience;
    var jobs = languageChooser(language, getExperience());

    return  <div className="page-break">
                <div className="title">{title}</div>
                <div className="experience">
                        {jobs.map((job, index) => {
                            return  <div className="element" id={`experience-${index}`} key={index}>
                                        <div className="icon-block period">
                                            <Hourglass className="icon" /> 
                                            <div className="element-of-icon period-date">{job.period}</div>
                                        </div>
                                        <div className="icon-block">
                                            {job.as ? 
                                                <>
                                                    <PcDisplayHorizontal className="icon" />
                                                    <div className="element-of-icon">{job.as}</div> 
                                                </>
                                                    : <></>}
                                        </div>
                                        {job.company ? 
                                            <>
                                                <div className="icon-block">
                                                        <>
                                                            <GeoAltFill className="icon" /> 
                                                            <div className="element-of-icon">{job.company}</div>
                                                        </>
                                                </div>
                                                <div className="tools">
                                                    <> 
                                                        <WrenchAdjustable className="icon" />
                                                        <div className="element-of-icon">
                                                            {language === "French" ? "Outils" : "Tools"}
                                                        </div> 
                                                        <div className="desc">
                                                            {job.tools}
                                                        </div>                                                
                                                    </>
                                                </div>
                                            </>
                                                :   <></>
                                        }
                                        <div className="achievements">
                                            {job.company ?
                                                <div className="icon-block">
                                                    <CodeSquare className="icon" /> 
                                                    <div className="element-of-icon">{language === "French" ? "Réalisations" : "Achievements"}</div>
                                                </div>  : <></>
                                            }
                                            <div className="desc">{job.desc}</div>
                                        </div>
                                        {
                                            job.references ?
                                                job.references.map((reference, index) => {
                                                    return <div key={index} className="reference">
                                                                <a href={reference.url} target="_blank" rel="noreferrer">
                                                                    <Link45deg className="icon" /> 
                                                                    <div className="element-of-icon">{reference.webSiteName}</div>
                                                                    {
                                                                        reference.desc ? 
                                                                            <div className="reference-desc">{reference.desc}</div>
                                                                                :   <></>
                                                                    }
                                                                </a>
                                                            </div> 
                                                })
                                                    : <></>
                                        } 
                                    </div>  
                        })}  
                    <hr />      
                </div>
            </div>
}

export default Experience;