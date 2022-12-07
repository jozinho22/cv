import {FaJava} from 'react-icons/fa';
import {TbBrandJavascript} from 'react-icons/tb';
import {ImHtmlFive} from 'react-icons/im';
import {IoLogoCss3} from 'react-icons/io';
import {AiOutlineConsoleSql} from 'react-icons/ai';
import {BiGitBranch} from 'react-icons/bi';

const Frameworks = () => {
    return <>
                <div className="subheading">Frameworks / Tools</div>
                <div className="frameworks">
                    <ul>
                        <li>
                            <div><FaJava className="icon" /> Java</div>
                            <div>
                                Spring, Maven, JPA/Hibernate
                            </div>
                        </li>
                        <li>
                            <div><TbBrandJavascript className="icon" /> Javascript</div>
                            <div>
                                Node, ReactJS, MathJax
                            </div>
                        </li> 
                        <li>
                            <div><BiGitBranch className="icon" /> Git</div>
                            <div>
                                GitHub, GitLab, Git Fork
                            </div>
                        </li>                             
                    </ul>
                </div>
            </>
}

export default Frameworks;