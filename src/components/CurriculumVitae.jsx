import React from 'react';
import AppContext from './context/AppContext';
import { Container } from 'react-bootstrap';
import Header from './parts/Header';
import Card from './parts/Card';
import Contact from './parts/Contact';
import Intro from './parts/Intro';
import Skills from './parts/Skills';
import Languages from './parts/Languages';
import Experience from './parts/Experience';
import Education from './parts/Education';
import Socials from './parts/SocialNetworks';
import Leasures from './parts/Leasures';
import Licenses from './parts/Licenses';
import EnumDomain from './helpers/EnumDomain';
import VolunteerWork from './parts/VolunteerWork';

import { Helmet } from "react-helmet-async";

import './CurriculumVitae.css';

const CurriculumVitae = ( {domain, poste, relativePath} ) => {

    // entrer le poste ici
    var posteNonGeneric = '';
    
    posteNonGeneric !== '' ? poste = posteNonGeneric : <></>;
    
    // entrer la société ici
    var boite = "";

    const {focus, updateFocus} = React.useContext(AppContext);

    React.useEffect(() => {
        updateFocus(focus && domain === EnumDomain.MATHS);
    }, [domain]) 
   
    return (
        <>
            <Helmet>
                <title>
                    {`CV de Josselin DOUINEAU${(poste !== '' && poste !== undefined) ? ` - ${poste}` : ''}${boite !== '' ? ` - ${boite}` : ''}`}
                </title>
                <meta data-rh="true" name="description" content={`Mon curriculum vitae : ${poste} au format web`} />
                <link rel="canonical" href={`https://jozinho22.github.io/cv${relativePath}`} />
            </Helmet>
            <Container className="curriculum-vitae-container">
                
                <Header domain={domain} poste={poste} boite={boite} />
                
                <Card domain={domain} poste={poste} />
                <Contact />
                <Intro domain={domain} poste={poste} />
                
                {
                    domain === EnumDomain.DEV ? 
                        <Skills />
                            : <></>
                } 

                {
                    domain !== EnumDomain.MATHS ? 
                        <>
                            <Experience domain={domain} pro/>
                            {
                                domain !== EnumDomain.GENERIC ? 
                                    <Experience domain={domain} /> 
                                        :   <></>
                            }
                            
                        </>
                            : 
                                <>
                                    {
                                        domain !== EnumDomain.GENERIC ? 
                                            <Experience domain={domain} /> 
                                                :   <></>
                                    }
                                    <Experience domain={domain} pro/>
                                </>
                } 

                <Education domain={domain} />
                
                <VolunteerWork domain={domain} />

            
                <Languages />

                {
                    domain === EnumDomain.DEV ? 
                        <Socials />
                            : <></>
                }

                <Leasures domain={domain} />
                
                <Licenses />
            </Container>
        </>
    );
}

export default CurriculumVitae;