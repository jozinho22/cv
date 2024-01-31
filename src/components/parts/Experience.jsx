import React from 'react';
import getDevExperience from './infos/dev/getDevExperience';
import getExperience from './infos/getExperience';
import { ArrowUp, Hourglass, PcDisplayHorizontal, PersonFill, GeoAltFill, CodeSquare, Boxes, WrenchAdjustable, Link45deg, Phone, QuestionLg } from 'react-bootstrap-icons';
import AppContext from '../context/AppContext';
import languageChooser from '../helpers/languageChooser';
import getTitles from './infos/getTitles';
import EnumDomain from '../helpers/EnumDomain';
import EnumLanguage from '../helpers/EnumLanguage';
import getExtraProExperience from './infos/getExtraProExperience';

import {DiGit} from 'react-icons/di';


const Experience = ( {pro} ) => {

    const {language, reduced, domain} = React.useContext(AppContext);
    var title = pro ? languageChooser(language, getTitles()).experience : languageChooser(language, getTitles()).extraProExperience;
    var jobs = pro ? ( domain === EnumDomain.DEV ? languageChooser(language, getDevExperience()) : languageChooser(language, getExperience()) ) : languageChooser(language, getExtraProExperience(domain)); 
    
    /* domain !== EnumDomain.DEV && !pro ? jobs.reverse() : <></>; */

    return  <div className="page-break">
                <div className="title">{title}</div>
                <div className={`${reduced ? 'reduced' : ''} experience`}>
                    {jobs.map((job, index) => {

                        if(job.period === "pause") {
                            return  <div key={`pause-${index}`}>  
                                        <div className="pause">
                                            <ArrowUp className="arrowup-icon-left" /> 
                                            <div className="center">{job.desc} </div>
                                            <ArrowUp className="arrowup-icon-right" /> 
                                        </div>
                                         <hr/>
                                    </div>
                        }

                        if((!pro && job.domains.includes(domain)) || pro) {
                            return  <div className={`element`} id={`experience-${index}`} key={pro ? `job-${index}`: `extra-pro-job-${index}`}>
    
                                        {reduced && job.longPeriod || !reduced && job.period || !pro ? 
                                            <div className="icon-block period">
                                                <Hourglass className="icon" /> 
                                                <div className="element-of-icon period-date">{reduced && job.longPeriod ? job.longPeriod : job.period}</div>
                                            </div>
                                                :   <></>  
                                        }
                                        {reduced && job.longAs || !reduced && job.as || !pro ? 
                                            <div className="icon-block">
                                                <>
                                                    {
                                                        domain === EnumDomain.DEV ?
                                                            <PcDisplayHorizontal className="icon" />
                                                            :   <PersonFill className="icon" />
                                                    }
                                                    <div className="element-of-icon">{reduced && job.longAs ? job.longAs : job.as}</div> 
                                                </>
                                            </div>
                                                    :  <></>
                                            
                                        }
                                        {job.company ? 
                                            <>
                                                <div className="icon-block">
                                                        <>
                                                            <GeoAltFill className="icon" /> 
                                                            {
                                                                job.companyLink ?
                                                                    <a href={job.companyLink} target="_blank" rel="noreferrer">
                                                                        <div className="element-of-icon">{job.company}</div>
                                                                    </a>
                                                                        :   <div className="element-of-icon">{job.company}</div>
                                                            }
                                                        </>
                                                </div>
                                                {job.tools && domain === EnumDomain.DEV ?
                                                    <div className="tools">
                                                        <> 
                                                            <WrenchAdjustable className="icon" />
                                                            <div className="element-of-icon">
                                                                {language === EnumLanguage.FRENCH ? "Outils" : "Tools"}
                                                            </div> 
                                                            <div className="desc">
                                                                {job.tools}
                                                            </div>                                                
                                                        </>   
                                                    </div>
                                                        :   <></>
                                                }
                                            </>
                                                :   <></>
                                        }
                                        {job.context && domain === EnumDomain.DEV && !reduced ?
                                            <div className="context">
                                                <>
                                                    <div className="icon-block">
                                                        <QuestionLg className="icon" /> 
                                                        <div className="element-of-icon">{language === EnumLanguage.FRENCH ? "Contexte" : "Context"}</div>
                                                    </div>
                                                    <div className="desc">{job.context}</div>
                                                </>  
                                            </div>
                                                : <></>
                                        }
                                        {(job.desc && !reduced) || !pro ?
                                            <div className="achievements">
                                                
                                                    <>
                                                        <div className="icon-block">
                                                            {domain === EnumDomain.DEV ? 
                                                                <CodeSquare className="icon" /> 
                                                                    : <Boxes className="icon" /> 
                                                            }
                                                            <div className="element-of-icon">{language === EnumLanguage.FRENCH ? "Réalisations" : "Achievements"}</div>
                                                        </div>
                                                        <div className="desc">{job.desc}</div>
                                                        {/* <div className="desc">{domain === EnumDomain.DEV ? job.more : ''}</div> */}
                                                    </>  
                                                </div>
                                                    : <></>
                                        }
                                        {
                                            (job.references && !reduced) || !pro ?
                                                job.references.map((reference, index) => {
                                                    return <div key={index} className="reference">
                                                        {
                                                            Object.keys(reference).length !== 0 ?
                                                                <a href={reference.url} target="_blank" rel="noreferrer">
                                                                    <Link45deg className="icon" /> 
                                                                    <Phone className="icon" /> 
                                                                    <div className="element-of-icon">{reference.webSiteName}</div>
                                                                    {/* {
                                                                        reference.desc ? 
                                                                            <div className="reference-desc">{reference.desc}</div>
                                                                                :   <></>
                                                                    } */}
                                                                </a>
                                                                    : <></>
                                                        }
                                                        </div> 
                                                })
                                                    : <></>
                                        } 
                                        
                                        {/* {job.gitDesc && domain === EnumDomain.DEV && !reduced ?
                                                <>
                                                    <br></br>
                                                    <div className="desc">{job.gitDesc}</div>
                                                </>
                                                    : <></>
                                        } */}
                                        {/* {
                                            job.gitReferences && domain === EnumDomain.DEV && !reduced ?
                                                job.gitReferences.map((reference, index) => {
                                                    return <div key={index} className="reference">
                                                                <a href={reference.url} target="_blank" rel="noreferrer">
                                                                    <DiGit className="icon" /> 
                                                                    <div className="element-of-icon">{reference.projectName}</div>
                                                                    {
                                                                        reference.desc ? 
                                                                            <div className="reference-desc">{reference.desc}</div>
                                                                                :   <></>
                                                                    }
                                                                </a>
                                                            </div> 
                                                })
                                                    : <></>
                                        }  */}
                                       
                                    </div>  
                                }
                     
                    })}  
                </div>
                {
                    domain === EnumDomain.DEV || !pro ? 
                        <hr />
                            : <></>
                }
            </div>
}

export default Experience;