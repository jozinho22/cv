import getSocials from "./getSocials";

const Socials = () => {

    var socials = getSocials();

    return <>
                <div className="subheading">Socials</div>
                <div className="socials">
                        {socials.map((social, index) => {
                            return  <div className="element" key={index}>
                                        <a href={social.profileLink} target="_blank" rel="noreferrer">    
                                            <div className="icon">{social.icon} {social.platform}</div>
                                        </a>    
                                    </div>
                        })}        
                </div>
            </>

}

export default Socials;