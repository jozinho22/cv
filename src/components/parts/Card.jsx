import React from 'react';
import photo from '../assets/photo-profil.jpeg';
import AppContext from '../context/AppContext';
import languageChooser from '../helpers/languageChooser';
import getDevIntro from './infos/dev/getDevIntro';
import getMathsIntro from './infos/maths/getMathsIntro';
import getGenericIntro from './infos/generic/getGenericIntro';
import EnumDomain from '../helpers/EnumDomain';
import EnumLanguage from '../helpers/EnumLanguage';

const Card = ( {domain, poste} ) => {

    const {language} = React.useContext(AppContext);
    const age = Math.floor((new Date() - new Date(1987, 10, 26)) / (1000*60*60*24*364.25)) 

    var intro = domain === EnumDomain.DEV ? languageChooser(language, getDevIntro()) : domain === EnumDomain.MATHS ? languageChooser(language, getMathsIntro()) : getGenericIntro(poste) ;

    return  <div className="vcard">
                <img src={photo} alt=""/>
                <div className="me">{language === EnumLanguage.FRENCH ? `Josselin DOUINEAU, ${age} ans` : `Josselin DOUINEAU, ${age}` }</div>
              
                <h1>{intro.profession}</h1>
                
            </div>
}

export default Card;