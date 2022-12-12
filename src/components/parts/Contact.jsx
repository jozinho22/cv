import {BiDirections} from 'react-icons/bi';
import {BsFillTelephoneFill} from 'react-icons/bs';
import {BsMailbox} from 'react-icons/bs';

import getContactInfos from './getContactInfos';

const Contact = () => {

    var contactInfos = getContactInfos();

    return  <>
                <div className="subheading">Contact infos</div>
                <div className="contact">
                    {contactInfos.map((contact, index) => {
                        return  <div className="element icon-block" id={`contact-${index}`} key={index}>
                                    <div className="icon" >{contact.icon}</div> 
                                    <div className="element-of-icon">{contact.info}</div>
                                </div>
                    })}
                </div>
            </>

}

export default Contact;