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