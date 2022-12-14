import getSocials from "./infos/getSocials";

const Socials = () => {

    var socials = getSocials();

    return <>
                <div className="subheading">Socials</div>
                <div className="socials">
                        {socials.map((social, index) => {
                            return  <div className="icon-block element" id={`social-${index}`} key={index}>
                                        <a href={social.profileLink} target="_blank" rel="noreferrer">    
                                            <div className="icon">{social.icon}</div>
                                            <div className="element-of-icon">{social.platform}</div>
                                        </a>    
                                    </div>
                        })}        
                </div>
            </>

}

export default Socials;