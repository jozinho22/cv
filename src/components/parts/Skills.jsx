import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import getDevSkills from './infos/dev/getDevSkills';
import getNonDevSkills from './infos/nonDev/getNonDevSkills';

import AppContext from '../context/AppContext';
import getTitles from './infos/getTitles';
import languageChooser from '../helpers/languageChooser';
import EnumDomain from '../helpers/EnumDomain';

const Skills = ({domain}) => {

    const {language} = React.useContext(AppContext);
    var title = languageChooser(language, getTitles()).skills;
    var skills = domain === undefined || domain === EnumDomain.DEV ? getDevSkills() : getNonDevSkills();

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
                                    {/* {
                                        skill.level ? <ProgressBar now={skill.level} /> : <></>
                                    } */}
                                    {
                                        skill.frameworks ? 
                                            <div className="desc">({skill.frameworks})</div>
                                                :   <div className="desc hidden"> rien </div>
                                    }
                                    
                                </div>   
                    })
                }
                </div>
                <hr />
            </div>
}

export default Skills;