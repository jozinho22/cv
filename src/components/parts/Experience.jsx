import React from 'react';
import getExperience from "./infos/getExperience";
import {GiSandsOfTime} from 'react-icons/gi';
import {HiLink} from 'react-icons/hi';
import {MdWork} from 'react-icons/md';
import {MdAlternateEmail} from 'react-icons/md';
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
                                            <MdWork className="icon" /> 
                                            <div className="element-of-icon">{job.as}</div>
                                        </div>
                                        <div className="icon-block">
                                            <MdAlternateEmail className="icon" /> 
                                            <div className="element-of-icon">{job.company}</div>
                                        </div>
                                        <div className ="desc">{job.desc}</div>
                                        {
                                            job.references ?
                                                job.references.map((reference, index) => {
                                                    return <div key={index} className="icon">
                                                                <a href={reference.url} className="reference" target="_blank" rel="noreferrer">
                                                                    <HiLink /> 
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