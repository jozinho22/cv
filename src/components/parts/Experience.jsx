import React from 'react';
import getDevExperience from './infos/dev/getDevExperience';
import getNonDevExperience from './infos/getGenericExperience';
import { ArrowUp, Hourglass, PcDisplayHorizontal, PersonFill, GeoAltFill, CodeSquare, Boxes, WrenchAdjustable, Link45deg, Phone, QuestionLg } from 'react-bootstrap-icons';
import AppContext from '../context/AppContext';
import languageChooser from '../helpers/languageChooser';
import getTitles from './infos/getTitles';
import EnumDomain from '../helpers/EnumDomain';
import EnumLanguages from '../helpers/EnumLanguages';
import getExtraProExperience from './infos/getExtraProExperience';
import {DiGit} from 'react-icons/di';


const Experience = ( {domain, pro} ) => {

    const {language, focus} = React.useContext(AppContext);
    var title = pro ? languageChooser(language, getTitles()).experience : languageChooser(language, getTitles()).extraProExperience;
    var jobs = pro ? domain === EnumDomain.DEV ? languageChooser(language, getDevExperience()) : languageChooser(language, getNonDevExperience()) : languageChooser(language, getExtraProExperience(domain)); 

    /* domain !== EnumDomain.DEV && !pro ? jobs.reverse() : <></>; */

    return  <div className="page-break">
                <div className="title">{title}</div>
                <div className="experience">
                    {jobs.map((job, index) => {

                        if(job.period === "pause") {
                            return  <div key={index}>  
                                        <div className="pause">
                                            <ArrowUp className="arrowup-icon-left" /> 
                                            <div className="center">{job.desc} </div>
                                            <ArrowUp className="arrowup-icon-right" /> 
                                        </div>
                                         <hr/>
                                    </div>
                        }
                        return  <div className={`element ${focus && job.domains && job.domains.includes(EnumDomain.MATHS) ? "focus" : ""}`} id={`experience-${index}`} key={index}>
                                    <div className="icon-block period">
                                        <Hourglass className="icon" /> 
                                        <div className="element-of-icon period-date">{job.period}</div>
                                    </div>
                                    <div className="icon-block">
                                        {job.as ? 
                                            <>
                                                {
                                                    domain === EnumDomain.DEV ?
                                                        <PcDisplayHorizontal className="icon" />
                                                        :   <PersonFill className="icon" />
                                                }
                                                <div className="element-of-icon">{job.as}</div> 
                                            </>
                                                : <></>}
                                    </div>
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
                                            <div className="tools">
                                                {job.tools && domain === EnumDomain.DEV ?
                                                    <> 
                                                        <WrenchAdjustable className="icon" />
                                                        <div className="element-of-icon">
                                                            {language === EnumLanguages.FRENCH ? "Outils" : "Tools"}
                                                        </div> 
                                                        <div className="desc">
                                                            {job.tools}
                                                        </div>                                                
                                                    </>
                                                        :   <></>
                                                }
                                            </div>
                                        </>
                                            :   <></>
                                    }
                                    <div className="context">
                                        {job.context && domain === EnumDomain.DEV ?
                                            <>
                                                <div className="icon-block">
                                                    <QuestionLg className="icon" /> 
                                                    <div className="element-of-icon">{language === EnumLanguages.FRENCH ? "Contexte" : "Context"}</div>
                                                </div>
                                                <div className="desc">{job.context}</div>
                                            </>  
                                                : <></>
                                        }
                                    </div>
                                    <div className="achievements">
                                        {!pro && job.desc ?
                                            <>
                                                <div className="icon-block">
                                                    {domain === EnumDomain.DEV ? 
                                                        <CodeSquare className="icon" /> 
                                                            : <Boxes className="icon" /> 
                                                    }
                                                    <div className="element-of-icon">{language === EnumLanguages.FRENCH ? "Réalisations" : "Achievements"}</div>
                                                </div>
                                                <div className="desc">{job.desc}</div>
                                                <div className="desc">{domain === EnumDomain.DEV ? job.more : ''}</div>
                                            </>  
                                                : <></>
                                        }
                                    </div>
                                    {
                                        job.references ?
                                            job.references.map((reference, index) => {
                                                return <div key={index} className="reference">
                                                    {
                                                        Object.keys(reference).length !== 0 ?
                                                            <a href={reference.url} target="_blank" rel="noreferrer">
                                                                <Link45deg className="icon" /> 
                                                                <Phone className="icon" /> 
                                                                <div className="element-of-icon">{reference.webSiteName}</div>
                                                                {
                                                                    reference.desc ? 
                                                                        <div className="reference-desc">{reference.desc}</div>
                                                                            :   <></>
                                                                }
                                                            </a>
                                                                : <></>
                                                     }
                                                     </div> 
                                            })
                                                : <></>
                                    } 
                                    
                                    {job.gitDesc && domain === EnumDomain.DEV ?
                                            <>
                                                <br></br>
                                                <div className="desc">{job.gitDesc}</div>
                                            </>
                                                : <></>
                                    }
                                    {
                                        job.gitReferences && domain === EnumDomain.DEV ?
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
                                    } 
                                </div>  
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