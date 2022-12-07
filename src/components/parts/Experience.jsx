import getJobs from "./getJobs";
import {GiSandsOfTime} from 'react-icons/gi';

const Experience = () => {

    var jobs = getJobs();

    return  <>
                <div className="subheading">Experience</div>
                <div className="experience">
                        {jobs.map((job, index) => {
                            return  <div className="element" key={index}>
                                        <div className="icon date"><GiSandsOfTime /> <u>{job.period}</u></div>
                                        <div className="jobinfo">
                                            <div className="jobtitle">{job.as}</div> 
                                            <div className ="jobdesc">{job.desc}</div>
                                        </div>  
                                        {
                                            job.references ?
                                                job.references.map((reference, index) => {
                                                    return <a className="reference" key={index} href={reference} target="_blank" rel="noreferrer">{reference}</a>
                                                }) : 
                                                    <></>
                                        } 
                                    </div>
                        })}        
                </div>
            </>
}

export default Experience;