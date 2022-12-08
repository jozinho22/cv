import {BiDirections} from 'react-icons/bi';
import {BsFillTelephoneFill} from 'react-icons/bs';
import {BsMailbox} from 'react-icons/bs';

const ContactInfos = () => {

    return  <>
                <div className="subheading">Contact infos</div>
                <div className="element icon-block contact">
                    <BiDirections className="icon" /> 
                    <div className="element-of-icon">Rennes, Brittany</div>
                </div>
                <div className="element icon-block contact">
                    <BsFillTelephoneFill className="icon" /> 
                    <div className="element-of-icon">06 25 45 01 76</div>
                </div>
                <div className="element icon-block contact">
                    <BsMailbox className="icon" /> 
                    <div className="element-of-icon">
                        <a href="mailto: josselin.douineau@gmail.com" >josselin.douineau@gmail.com</a>
                    </div>
                </div>
            </>

}

export default ContactInfos;