import React from 'react';
import getSocialNetworks from "./infos/getSocialNetworks";
import getTitles from './infos/getTitles';
import languageChooser from '../helpers/languageChooser';
import AppContext from '../context/AppContext';

const SocialNetworks = () => {

    const {language} = React.useContext(AppContext);
    var title = languageChooser(language, getTitles()).socialNetworks;
    var socialNetworks = getSocialNetworks();

    return <>
                <div className="title">{title}</div>
                <div className="socials">
                    {socialNetworks.map((social, index) => {
                        return  <div className="icon-block element" id={`social-${index}`} key={index}>
                                    <a href={social.profileLink} target="_blank" rel="noreferrer">    
                                        <div className="icon">{social.icon}</div>
                                        <div className="element-of-icon">{social.platform}</div>
                                    </a>    
                                </div>
                    })}
                    <hr />        
                </div>
            </>

}

export default SocialNetworks;