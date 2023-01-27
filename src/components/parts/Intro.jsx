import React from 'react';
import photo from '../assets/photo-profil.jpeg';
import AppContext from '../context/AppContext';
import languageChooser from '../helpers/languageChooser';
import getIntro from './infos/getIntro';

const Intro = () => {

    const {language} = React.useContext(AppContext);
    var intro = languageChooser(language, getIntro());

    return  <div className="intro">
                <img src={photo} alt=""/>
                <div className="me">{intro.me}</div>
                <div className="summary">
                    {intro.summary.map((line, index) => {
                        return <div key={index}><p>{line}.</p></div>
                    })} 
                </div>
            </div>

}

export default Intro;