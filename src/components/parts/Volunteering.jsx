import React from 'react';
import AppContext from '../context/AppContext';
import languageChooser from '../helpers/languageChooser';
import getTitles from './infos/getTitles';
import getVolunteerWork from './infos/getVolunteerWork';
import { Hourglass, PersonFill, GeoAltFill } from 'react-bootstrap-icons';

const Volunteering = ({domain}) => {

    const {language, focus} = React.useContext(AppContext);
    var title = languageChooser(language, getTitles()).volunteerWork;
    var volunteerWorks = languageChooser(language, getVolunteerWork());

    return  <div className="page-break">
                <div className="title">{title}</div>
                <div className="volunteering">
                    {volunteerWorks.map((volunteering, index) => {
                        return  <div className={`element ${focus && volunteering.domain && volunteering.domain === domain? "focus" : ""}`} id={`volunteering-${index}`} key={index}>
                                    <div className="icon-block period">
                                        <Hourglass className="icon" /> 
                                        <div className="element-of-icon period-date">{volunteering.period}</div>
                                    </div>
                                    <div className="icon-block">
                                        {volunteering.as ? 
                                            <>
                                                <PersonFill className="icon" />
                                                <div className="element-of-icon">{volunteering.as}</div> 
                                            </>
                                                : <></>
                                        }
                                    </div>
                                    {volunteering.company ? 
                                        <>
                                            <div className="icon-block">
                                                    <>
                                                        <GeoAltFill className="icon" /> 
                                                        {
                                                            volunteering.companyLink ?
                                                                <a href={volunteering.companyLink} target="_blank" rel="noreferrer">
                                                                    <div className="element-of-icon">{volunteering.company}</div>
                                                                </a>
                                                                    :   <div className="element-of-icon">{volunteering.company}</div>
                                                        }
                                                    </>
                                            </div>
                                        
                                        </>
                                            :   <></>
                                    }
                                   
                                    {/* <div className="achievements">
                                        <div className="icon-block">
                                            <Boxes className="icon" /> 
                                            <div className="element-of-icon">{language === "French" ? "Réalisations" : "Achievements"}</div>
                                        </div> 
                                        <div className="desc">{volunteering.desc}</div>
                                    </div> */}
                                </div>  
                    })}  
                    <hr />      
                </div>
            </div>
}

export default Volunteering;