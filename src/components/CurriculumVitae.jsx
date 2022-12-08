import { Container } from 'react-bootstrap';
import Intro from './parts/Intro';
import ContactInfos from './parts/ContactInfos';
import Skills from './parts/Skills';
import Experiences from './parts/Experience';
import Education from './parts/Education';
import Socials from './parts/Socials';
import Leasures from './parts/Leasures';

import './CurriculumVitae.css';

const CurriculumVitae = () => {
  
    return (
        <Container className="CurriculumVitaeContainer">
            <Intro />
            <Skills />
            <Experiences />
            <Education />
            <Socials />
            <Leasures />
            <ContactInfos />
        </Container>
    );
}

export default CurriculumVitae;