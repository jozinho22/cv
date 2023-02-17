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
import Certifications from './parts/Certifications';
import EnumDomain from './helpers/EnumDomain';
import './CurriculumVitae.css';
import Volunteering from './parts/Volunteering';

const CurriculumVitae = ( {domain} ) => {
  
    return (
        <Container className="curriculum-vitae-container">
            <Header />
            <Intro domain={domain} />
            {
                domain === EnumDomain.DEV ? 
                    <Skills />
                        : <></>
            }
            <Experience domain={domain} />
            {
                domain === EnumDomain.DEV ? 
                    <></>
                        : <Volunteering />
            }
            {
                domain === EnumDomain.DEV ? 
                    <Certifications />
                        : <></>
            }
            
            <Education />
            {
                domain === EnumDomain.DEV ? 
                    <Socials />
                        : <></>
            }
            <Leasures />
            <Contact />
            <Licenses />
        </Container>
    );
}

export default CurriculumVitae;