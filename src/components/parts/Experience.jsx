import React from 'react';
import getJobs from "./infos/getJobs";
import {GiSandsOfTime} from 'react-icons/gi';
import {HiLink} from 'react-icons/hi';
import {MdWork} from 'react-icons/md';
import {MdAlternateEmail} from 'react-icons/md';
import AppContext from '../context/AppContext';
import languageChooser from '../helpers/languageChooser';

const Experience = () => {

    const {language} = React.useContext(AppContext);
    var jobs = languageChooser(language, getJobs());

    return  <>
                <div className="subheading">Experience</div>
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
                                                                <a className="reference" href={reference.url} target="_blank" rel="noreferrer">
                                                                    <HiLink /> 
                                                                    <div className="element-of-icon">{reference.webSiteName}</div>
                                                                </a>
                                                            </div> 
                                                }) : 
                                                    <></>
                                        } 
                                    </div>  
                        })}        
                </div>
            </>
}

export default Experience;