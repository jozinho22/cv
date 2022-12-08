import getJobs from "./getJobs";
import {GiSandsOfTime} from 'react-icons/gi';
import {HiLink} from 'react-icons/hi';
import {MdWork} from 'react-icons/md';

const Experience = () => {

    var jobs = getJobs();

    return  <>
                <div className="subheading">Experience</div>
                <div className="experience">
                        {jobs.map((job, index) => {
                            return  <div className="element" key={index}>
                                        <div className="icon-block period">
                                            <GiSandsOfTime className="icon" /> 
                                            <div className="element-of-icon period-date">{job.period}</div>
                                        </div>
                                        <div className="icon-block">
                                            <MdWork className="icon" /> 
                                            <div className="element-of-icon">{job.as}</div>
                                        </div>
                                        <div className="company">@ {job.company}</div> 
                                        <div className ="desc">{job.desc}</div>
                                        {
                                            job.references ?
                                                job.references.map((reference, index) => {
                                                    return <div className="icon">
                                                                <a className="reference" key={index} href={reference.url} target="_blank" rel="noreferrer">
                                                                    <HiLink /> 
                                                                    {reference.webSiteName}
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