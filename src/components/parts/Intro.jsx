import favicon512 from '../assets/favicon-brasil-512.png';

const Intro = () => {

    return  <div className="intro">
                <img src={favicon512} alt = "" height="50px" width="50px"/>
                <div className="heading">Josselin DOUINEAU</div>
                <div className="prof">Developer</div>

                {/* <div className="summary">
                    Hi, I'm a Java developer. 
                </div> */}
            </div>

}

export default Intro;