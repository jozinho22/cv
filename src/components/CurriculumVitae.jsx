import { Container, Button } from 'react-bootstrap';
import Intro from './parts/Intro';
import ContactInfos from './parts/ContactInfos';
import Skills from './parts/Skills';
import Experiences from './parts/Experience';
import Education from './parts/Education';
import Socials from './parts/Socials';
import Leasures from './parts/Leasures';

import printToPdf from './helpers/printToPdf';
 
import './CurriculumVitae.css';

const CurriculumVitae = () => {
  
    return (
        <Container className="CurriculumVitaeContainer">
            <div id="section1">
                <div className="printer-button-container">
                    <Button variant="warning" className="printer-button" onClick={printToPdf}>Export to PDF</Button>
                </div>
                <Intro />
                <Skills />
            </div>
            <div id="section2">
                <Experiences />
                <Education />
                <Socials />
                <Leasures />
                <ContactInfos />
            </div>
        </Container>
    );
}

export default CurriculumVitae;