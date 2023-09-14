import React from 'react';
import photo from '../assets/photo-profil.jpeg';
import AppContext from '../context/AppContext';
import languageChooser from '../helpers/languageChooser';
import getDevIntro from './infos/dev/getDevIntro';
import getMathsIntro from './infos/maths/getMathsIntro';
import getGenericIntro from './infos/generic/getGenericIntro';
import EnumDomain from '../helpers/EnumDomain';

const Intro = ( {domain, poste} ) => {

    const {language} = React.useContext(AppContext);
    var intro = domain === EnumDomain.DEV ? languageChooser(language, getDevIntro()) : domain === EnumDomain.MATHS ? languageChooser(language, getMathsIntro()) : getGenericIntro(poste) ;

    return  <div className="intro">
                <img src={photo} alt=""/>
                <div className="me">{intro.me}</div>
              
                <h1>{intro.profession}</h1>
                   
                {
                    domain === EnumDomain.DEV ? 
                        <div className="summary">
                            {intro.summary.map((line, index) => {
                                return <div key={index}><p>{line}.</p></div>
                            })} 
                        </div>
                        : 
                            <></>
                }
                
            </div>
}

export default Intro;