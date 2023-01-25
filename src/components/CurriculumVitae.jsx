import { Container } from 'react-bootstrap';
import Header from './parts/Header';
import Intro from './parts/Intro';
import Contact from './parts/Contact';
import Skills from './parts/Skills';
import Experience from './parts/Experience';
import Education from './parts/Education';
import Socials from './parts/SocialNetworks';
import Leasures from './parts/Leasures';
import Licenses from './parts/Licenses';

import './CurriculumVitae.css';

const CurriculumVitae = () => {
  
    return (
        <Container className="curriculum-vitae-container">
            <Header />
            <Intro />
            <Skills />
            <Experience />
            <Education />
            <Socials />
            <Leasures />
            <Contact />
            <Licenses />
        </Container>
    );
}

export default CurriculumVitae;