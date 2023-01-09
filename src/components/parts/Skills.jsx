import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import getSkills from './infos/getSkills';
import AppContext from '../context/AppContext';
import getTitles from './infos/getTitles';
import languageChooser from '../helpers/languageChooser';

const Skills = () => {

    const {language} = React.useContext(AppContext);
    var title = languageChooser(language, getTitles()).skills;
    var skills = getSkills();

    return  <div className="page-break">
                <div className="title">{title}</div>
                <div className="skills">
                {
                    skills.map((skill, index) => {
                        return <div key={index} className="element">
                                    <div className="icon-block">
                                        <div className="icon">{skill.icon}</div>
                                        <div className="element-of-icon">{skill.language}</div>
                                    </div>
                                    <ProgressBar now={skill.level} />
                                    {/* <div className="frameworks">
                                        {skill.frameworks ? 
                                            `(${skill.frameworks})` :
                                                <></>
                                        }
                                    </div>  */}  
                                </div>   
                    })
                }
                </div>
                <hr />
            </div>
}

export default Skills;