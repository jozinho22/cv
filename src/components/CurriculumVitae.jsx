import { Container } from 'react-bootstrap';
import Header from './parts/Header';
import Intro from './parts/Intro';
import Contact from './parts/Contact';
import Skills from './parts/Skills';
import Languages from './parts/Languages';

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

    var poste = domain === EnumDomain.DEV ? "Développeur" : "Cartographe";
  
    return (
        <Container className="curriculum-vitae-container">
            <Header domain={domain} poste={poste} />
            
            <Contact />
            <Intro domain={domain} poste={poste} />

            
            {/* {
                domain === EnumDomain.DEV ? 
                    <Skills />
                        : <></>
            } */}
            <Skills domain={domain}/> 
            <Education />
            {
                domain === EnumDomain.DEV ? 
                    <Certifications />
                        : <></>
            }
            {
                domain === EnumDomain.DEV ? 
                    <>
                        <Experience domain={domain} pro/>
                        <Experience domain={domain} />
                    </>
                        :   <>
                                <Experience domain={domain} />
                                <Experience domain={domain} pro/>
                            </>
            }
            <Volunteering />
           
            
            
            <Languages />
            {
                domain === EnumDomain.DEV ? 
                    <Socials />
                        : <></>
            }
            <Leasures />
            
            <Licenses />
        </Container>
    );
}

export default CurriculumVitae;