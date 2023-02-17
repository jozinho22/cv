import React from 'react';
import getSocialNetworks from "./infos/dev/getSocialNetworks";
import getTitles from './infos/getTitles';
import languageChooser from '../helpers/languageChooser';
import AppContext from '../context/AppContext';
import { Link45deg } from 'react-bootstrap-icons';

const SocialNetworks = () => {

    const {language} = React.useContext(AppContext);
    var title = languageChooser(language, getTitles()).socialNetworks;
    var socialNetworks = getSocialNetworks();

    return <div className="page-break">
                <div className="title">{title}</div>
                <div className="socials">
                    {socialNetworks.map((social, index) => {
                        return  <div key={index} className="element">
                                    <div className="icon-block" id={`social-${index}`} key={index}>
                                        <a href={social.profileLink} target="_blank" rel="noreferrer">    
                                            <div className="icon"><Link45deg /></div>
                                            <div className="element-of-icon">{social.platform}</div>
                                        </a>    
                                    </div>
                                </div>
                    })}  
                </div>
                <hr />
            </div>

}

export default SocialNetworks;