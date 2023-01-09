import React from 'react';
import getExperience from "./infos/getExperience";
import {GiSandsOfTime} from 'react-icons/gi';
import {HiLink} from 'react-icons/hi';
import {MdWork} from 'react-icons/md';
import {MdAlternateEmail} from 'react-icons/md';
import {AiFillTool} from 'react-icons/ai';
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
                                            <GiSandsOfTime className="icon" /> 
                                            <div className="element-of-icon period-date">{job.period}</div>
                                        </div>
                                        <div className="icon-block">
                                            {job.as ? 
                                                <>
                                                    <MdWork className="icon" />
                                                    <div className="element-of-icon">{job.as}</div> 
                                                </>
                                                    : <></>}
                                        </div>
                                        <div className="icon-block">
                                            {job.company ? 
                                                <>
                                                    <MdAlternateEmail className="icon" /> 
                                                    <div className="element-of-icon">{job.company}</div>
                                                </> 
                                                    : <></>
                                            }
                                            
                                        </div>
                                        <div className="tools">
                                            {job.tools ? 
                                                <> 
                                                    <AiFillTool className="icon" />
                                                    <div className="element-of-icon">
                                                        {language === "French" ? "Outils" : "Tools"}
                                                    </div> 
                                                    <div className="tools-display-flex">
                                                        {
                                                            job.tools.map((tool, index) => {
                                                                return <div key={index} className="flex-content">
                                                                            {tool}
                                                                        </div>
                                                                        
                                                            })
                                                        }  
                                                    </div>                                                 
                                                </>
                                                    : <></>
                                            }
                                            
                                        </div>
                                        <div className="icon-block desc">
                                            <div className="element-of-icon">{job.desc}</div>
                                        </div>
                                        {
                                            job.references ?
                                                job.references.map((reference, index) => {
                                                    return <div key={index} className="reference">
                                                                <a href={reference.url} className="icon-block" target="_blank" rel="noreferrer">
                                                                    <HiLink className="icon" /> 
                                                                    <div className="element-of-icon">{reference.webSiteName}</div>
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