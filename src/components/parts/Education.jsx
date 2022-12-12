import getDiplomas from "./getDiplomas";
import {GiSandsOfTime} from 'react-icons/gi';
import {GiDiploma} from 'react-icons/gi';

const Education = () => {

    var diplomas = getDiplomas();

    return  <>
                <div className="subheading">Education</div>
                <div className="education">
                        {diplomas.map((diploma, index) => {
                            return  <div className="element" id={`education-${index}`} key={index}>
                                        <div className="icon-block period">
                                            <GiSandsOfTime className="icon" /> 
                                            <div className="element-of-icon period-date">{diploma.period}</div>
                                        </div>
                                        <div className="icon-block">
                                            <GiDiploma className="icon" /> 
                                            <div className="element-of-icon">{diploma.title}</div>
                                        </div>
                                        <div className ="school">@ {diploma.school}</div>
                                    </div>
                        })}        
                </div>
            </>
}

export default Education;