import getLeasures from "./getLeasures";

const Leasures = () => {

    var leasures = getLeasures();

    return <>
                <div className="subheading">Leasures</div>
                <div className="leasures">
                        {leasures.map((leasure, index) => {
                            return  <div className="element" key={index}>
                                        <div className="icon-block">
                                            <div className="icon" >{leasure.icon}</div> 
                                            <div className="element-of-icon">{leasure.activity}</div>
                                        </div>
                                    </div>
                        })}        
                </div>
            </>
}

export default Leasures;