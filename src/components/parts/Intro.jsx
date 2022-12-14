import React from 'react';
import favicon512 from '../assets/favicon-brasil-512.png';
import AppContext from '../context/AppContext';
import languageChooser from '../helpers/languageChooser';
import getIntroInfos from './infos/getIntroInfos';

const Intro = () => {

    const {language} = React.useContext(AppContext);
    var intro = languageChooser(language, getIntroInfos());

    return  <div className="intro">
                <img src={favicon512} alt=""/>
                <div className="heading">Josselin DOUINEAU</div>
                <div className="prof">{intro.profession}</div>

                <div className="summary">
                    <p>
                        {intro.summary} 
                    </p>
                </div>
            </div>

}

export default Intro;