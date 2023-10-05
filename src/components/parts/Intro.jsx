import React from 'react';
import AppContext from '../context/AppContext';
import languageChooser from '../helpers/languageChooser';
import getDevIntro from './infos/dev/getDevIntro';
import getMathsIntro from './infos/maths/getMathsIntro';
import getGenericIntro from './infos/generic/getGenericIntro';
import EnumDomain from '../helpers/EnumDomain';

const Intro = ( {domain, poste} ) => {

    const {language, focus} = React.useContext(AppContext);
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
                            {
                                focus && domain === EnumDomain.MATHS ?
                                    <div className="element summary-focus">
                                        <p>
                                            Les expériences encadrées en rouge sont présentes pour mettre en avant la pertinence de l'élément (c'est-à-dire ce qui se rapporte aux maths ou aux sciences).
                                        </p>
                                        <p>
                                            Vous pouvez désactiver ce mode en cliquant sur le bouton rouge en haut à droite.
                                        </p>
                                    </div>
                                        :   <></> 
                            }
                        </div>
                        
                        : 
                            <></>
                }
                
            </div>
}

export default Intro;