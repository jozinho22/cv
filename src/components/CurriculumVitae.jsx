import { Container } from 'react-bootstrap';
import Intro from './parts/Intro';
import ContactInfos from './parts/ContactInfos';
import Skills from './parts/Skills';
import Experiences from './parts/Experience';
import Socials from './parts/Socials';

import './CurriculumVitae.css';

const CurriculumVitae = () => {
  
    return (
        <Container className="CurriculumVitaeContainer">
            <Intro />
            <ContactInfos />
            <Skills />
            <Experiences />
            <Socials />
        </Container>
    );
}

export default CurriculumVitae;