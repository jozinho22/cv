import React from 'react';
import AppContext from '../context/AppContext';
import languageChooser from '../helpers/languageChooser';
import getDevIntro from './infos/dev/getDevIntro';
import getMathsIntro from './infos/maths/getMathsIntro';
import getGenericIntro from './infos/generic/getGenericIntro';
import EnumDomain from '../helpers/EnumDomain';

const Intro = ( {poste} ) => {

    const {language, reduced, domain} = React.useContext(AppContext);
    var intro = domain === EnumDomain.DEV ? languageChooser(language, getDevIntro()) : domain === EnumDomain.MATHS ? languageChooser(language, getMathsIntro()) : getGenericIntro(poste) ;

    return  <div className="intro">
                   
                {
                    domain === EnumDomain.DEV || domain === EnumDomain.MATHS ? 
                        <div className="summary">
                            {intro.summary.map((line, index) => {
                                return <div key={index} className="element">
                                            <p>{line +"."}</p>
                                        </div>
                            })} 
                            <hr/>
                        </div>
                        
                        : 
                            <></>
                }
                
            </div>
}

export default Intro;