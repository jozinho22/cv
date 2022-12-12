import { ProgressBar } from 'react-bootstrap';
import getSkills from './getSkills';

const Skills = () => {

    var skills = getSkills();

    return <>
                <div className="subheading">Skills</div>
                <div className="skills">
                        {skills.map((skill, index) => {
                            return  <div className="element" id={`skill-${index}`} key={index}>
                                        <div className="icon-block">
                                            <div className="icon">{skill.icon}</div>
                                            <div className="element-of-icon">{skill.language}</div>
                                        </div>
                                        <ProgressBar now={skill.level} />
                                        <div className="frameworks">
                                            {skill.frameworks ? 
                                                `(${skill.frameworks})` :
                                                    <></>
                                            }
                                        </div>      
                                    </div>
                        })}        
                </div>
            </>
}

export default Skills;