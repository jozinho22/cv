import React from 'react';
import getContacts from './infos/getContacts';
import AppContext from '../context/AppContext';
import languageChooser from '../helpers/languageChooser';
import getTitles from './infos/getTitles';

const Contact = () => {

    const {language} = React.useContext(AppContext);
    var title = languageChooser(language, getTitles()).contact;
    var contacts = languageChooser(language, getContacts());

    return  <div className="page-break">
                <div className="title">{title}</div>
                <div className="contact">
                    {contacts.map((contact, index) => {

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
            </div>

}

export default Contact;