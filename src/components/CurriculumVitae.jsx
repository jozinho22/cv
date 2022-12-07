import { Container } from 'react-bootstrap';
import Intro from './parts/Intro';
import ContactInfos from './parts/ContactInfos';
import Skills from './parts/Skills';
import Frameworks from './parts/Frameworks';

import './CurriculumVitae.css';

const CurriculumVitae = () => {
  
    return (
        <Container className="CurriculumVitaeContainer">
            <Intro />
            <ContactInfos />
            <Skills />
            <Frameworks />
            {/* 
            
            <div className="subheading">Experience</div>
            <div className="explist">
                <ul>
                    <li>
                        <div className="date">2020 - 2022</div> 
                        <div className="jobinfo">
                            <div className="jobtitle">Java/reactJS developer</div> 
                            <div className ="jobdesc">I worked on personal projects and continue training</div>
                        </div>
                    </li>
                    <li>
                        <div className="date">2021</div> 
                        <div className="jobinfo">
                            <div className="jobtitle">Java/reactJS developer</div> 
                            <div className ="jobdesc">I worked on an Mobile App generator</div>
                        </div>
                    </li>
                    <li>
                        <div className="date">2016 - 2018</div> 
                        <div className="jobinfo">
                            <div className="jobtitle">Java/SQL developer</div> 
                            <div className ="jobdesc">I worked on several applications</div>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="subheading">Social</div>
            <div className="social">
                <a href="https://github.com/jozinho22" target="_blank">
                    <div className = "icon">
                        <span style="padding-left:10px;"></span>
                        <div className="fab fa-github"> Github</div>
                    </div>
                </a>
                <a href="https://stackoverflow.com/users/6741310/jozinho22" target="_blank">
                    <div className = "icon">
                        <span style="padding-left:10px;"></span>
                        <div className="fab fa-stack-overflow"> Stack Over Flow</div>
                    </div>
                </a>
            </div>
            <div className="subheading">Personal projects</div>
            <div className="perso">
                <a href="https://ma-thematique.netlify.app/" target="_blank">
                    <div className = "icon">
                        <span style="padding-left:10px;"></span>
                        <img src="https://ma-thematique.netlify.app/favicon-brasil-mini.png" alt = "" height="20px" width="20px"> Ma thématique </img>
                    </div>
                </a>
            </div> */}
        </Container>
    );
}

export default CurriculumVitae;