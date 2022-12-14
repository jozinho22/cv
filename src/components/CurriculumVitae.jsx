import { Container } from 'react-bootstrap';
import Header from './parts/Header';
import Intro from './parts/Intro';
import Contact from './parts/Contact';
import Skills from './parts/Skills';
import Experiences from './parts/Experience';
import Education from './parts/Education';
import Socials from './parts/Socials';
import Leasures from './parts/Leasures';
 
import './CurriculumVitae.css';

const CurriculumVitae = () => {
  
    return (
        <Container className="curriculum-vitae-container">
            <Header />
            <Intro />
            <Skills />
            <Experiences />
            <Education />
            <Socials />
            <Leasures />
            <Contact />
        </Container>
    );
}

export default CurriculumVitae;