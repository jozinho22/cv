import React from 'react';
import getLeasures from "./infos/getLeasures";
import AppContext from '../context/AppContext';
import languageChooser from '../helpers/languageChooser';
import getTitles from './infos/getTitles';

const Leasures = () => {

    const {language, focus} = React.useContext(AppContext);
    var title = languageChooser(language, getTitles()).leasures;
    var leasures = languageChooser(language, getLeasures());
    leasures = leasures.list.split(",")

    return  <div className="page-break">
                <div className="title">{title}</div>
                <div className="leasures"> 
                    {
                        leasures.map((leasure, index) => {
                            return  <div key={index}>
                                        {
                                            index < 3 ? 
                                                <div className={`element ${focus ? "little-focus" : ""}`}>
                                                    {/* <div style={{textDecoration: "underline", textDecorationColor: "rgb(170, 65, 65)"}}> */}
                                                        {leasure}
                                                    {/*  </div>
                                                    &nbsp; */}
                                                </div>
                                                    :   <div className="element">{leasure}</div>
                                        }
                                    </div>
                        })
                    }
                </div>
                    
                <hr />
            </div> 
}

export default Leasures;