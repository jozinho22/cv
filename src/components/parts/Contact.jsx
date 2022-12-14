import React from 'react';
import getContactInfos from './infos/getContactInfos';
import AppContext from '../context/AppContext';
import languageChooser from '../helpers/languageChooser';

const Contact = () => {

    const {language} = React.useContext(AppContext);
    var contactInfos = languageChooser(language, getContactInfos());

    return  <>
                <div className="subheading">Contact infos</div>
                <div className="contact">
                    {contactInfos.map((contact, index) => {

                        var element =   <>
                                            <div className="icon" >{contact.icon}</div> 
                                            <div className="element-of-icon">{contact.info}</div>
                                        </>;

                        return  <div className="element icon-block" id={`contact-${index}`} key={index}>

                                    {contact.type ?
                                        <a href={contact.type === "tel" ? `tel:${contact.info}`
                                                    : contact.type === "mail" ? `mailto:${contact.info}` 
                                                    : ""} > 
                                            {element}
                                        </a> 
                                            :  <>{element}</>
                                        }     
                                </div>
                    })}
                </div>
            </>

}

export default Contact;