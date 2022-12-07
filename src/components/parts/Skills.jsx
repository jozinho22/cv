import {FaJava} from 'react-icons/fa';
import {TbBrandJavascript} from 'react-icons/tb';
import {ImHtmlFive} from 'react-icons/im';
import {IoLogoCss3} from 'react-icons/io';
import {AiOutlineConsoleSql} from 'react-icons/ai';
import ProgressBar from 'react-bootstrap/ProgressBar';

const Skills = () => {
    return <>
                <div className="subheading">Skills</div>
                <div className="skills">
                    <ul>
                        <li>
                            <div><FaJava className="icon" /> Java</div>
                            <ProgressBar className="progress" now={80} />              
                        </li>
                        <li>
                            <div><TbBrandJavascript className="icon" /> Javascript</div>
                            <ProgressBar className="progress" now={70} />              
                        </li>
                        <li>
                            <div><ImHtmlFive className="icon" /> HTML</div>
                            <ProgressBar className="progress" now={70} />              
                        </li>
                        <li>
                            <div><IoLogoCss3 className="icon" /> CSS</div>
                            <ProgressBar className="progress" now={60} />              
                        </li> 
                        <li>
                            <div><AiOutlineConsoleSql className="icon" /> SQL</div>
                            <ProgressBar className="progress" now={80} />              
                        </li>                      
                    </ul>
                </div>
            </>
}

export default Skills;