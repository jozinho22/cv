import React from 'react';
import getLanguages from "./infos/getLanguages";
import AppContext from '../context/AppContext';
import languageChooser from '../helpers/languageChooser';
import getTitles from './infos/getTitles';
import EnumLanguage from '../helpers/EnumLanguage';
import { ProgressBar } from 'react-bootstrap';

const Languages = () => {

    const {language} = React.useContext(AppContext);
    var title = languageChooser(language, getTitles()).languages;
    var languages = languageChooser(language, getLanguages());
    if(language === EnumLanguage.FRENCH) {
        languages.shift();
    }

    return  <div className="page-break">
                <div className="title">{title}</div>
                <div className="languages">
                {
                    languages.map((lang, index) => {
                        return  <div key={index} className="element">
                                    <div className="text-block">
                                        <div className="element-of-text">{lang.language}</div>
                                        <ProgressBar now={lang.level} />
                                    </div>
                                </div>   
                    })
                }
                </div>
                <hr />
            </div> 
}

export default Languages;