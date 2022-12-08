import favicon512 from '../assets/favicon-brasil-512.png';

const Intro = () => {

    return  <div className="intro">
                <img src={favicon512} alt = "" height="50px" width="50px"/>
                <div className="heading">Josselin DOUINEAU</div>
                <div className="prof">Developer</div>

                <div className="summary">
                    <p>
                        After a long period while doing other activities, i'm back in the development. 
                    </p>
                </div>
            </div>

}

export default Intro;