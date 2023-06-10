import React from 'react';
import getDevExperience from './infos/dev/getDevExperience';
import getNonDevExperience from './infos/nonDev/getNonDevExperience';
import { Hourglass, PcDisplayHorizontal, PersonFill, GeoAltFill, CodeSquare, Boxes, WrenchAdjustable, Link45deg, Phone } from 'react-bootstrap-icons';
import AppContext from '../context/AppContext';
import languageChooser from '../helpers/languageChooser';
import getTitles from './infos/getTitles';
import EnumDomain from '../helpers/EnumDomain';
import getExtraProExperience from './infos/getExtraProExperience';

const Experience = ( {domain, pro} ) => {

    console.log(pro)

    const {language} = React.useContext(AppContext);
    var title = pro ? languageChooser(language, getTitles()).experience : languageChooser(language, getTitles()).extraProExperience;
    var jobs = pro ? (domain === EnumDomain.DEV ? languageChooser(language, getDevExperience()) : getNonDevExperience()) : languageChooser(language, getExtraProExperience());

    console.log(jobs)
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
                                                {job.tools ?
                                                    <> 
                                                        <WrenchAdjustable className="icon" />
                                                        <div className="element-of-icon">
                                                            {language === "French" ? "Outils" : "Tools"}
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
                                    <div className="achievements">
                                        {job.desc ?
                                            <>
                                                <div className="icon-block">
                                                    {domain === EnumDomain.DEV ? 
                                                        <CodeSquare className="icon" /> 
                                                            : <Boxes className="icon" /> 
                                                    }
                                                    <div className="element-of-icon">{language === "French" ? "Réalisations" : "Achievements"}</div>
                                                </div>
                                                <div className="desc">{job.desc}</div>
                                            </>  
                                                : <></>
                                        }
                                    </div>
                                    {
                                        job.references ?
                                            job.references.map((reference, index) => {
                                                return <div key={index} className="reference">
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