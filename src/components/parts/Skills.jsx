import getSkills from './getSkills';

const Skills = () => {

    var skills = getSkills();

    return <>
                <div className="subheading">Skills</div>
                <div className="skills">
                        {skills.map((skill, index) => {
                            return  <div className="element" key={index}>
                                        <div className="icon">{skill.icon} {skill.language}</div>
                                        <div><progress value={skill.level} max={100} /></div> 
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