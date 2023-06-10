import React from 'react';
import getLanguages from "./infos/getLanguages";
import AppContext from '../context/AppContext';
import languageChooser from '../helpers/languageChooser';
import getTitles from './infos/getTitles';
import { ProgressBar } from 'react-bootstrap';

const Languages = () => {

    const {language} = React.useContext(AppContext);
    var title = languageChooser(language, getTitles()).languages;
    var languages = languageChooser(language, getLanguages());

    return  <div className="page-break">
                <div className="title">{title}</div>
                <div className="languages">
                {
                    languages.map((language, index) => {
                        return <div key={index} className="element">
                                    <div>{language.language}</div>
                                    <ProgressBar now={language.level} />
                                </div>   
                    })
                }
                </div>
                <hr />
            </div> 
}

export default Languages;