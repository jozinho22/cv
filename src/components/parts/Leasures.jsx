import React from 'react';
import getLeasures from "./infos/getLeasures";
import AppContext from '../context/AppContext';
import languageChooser from '../helpers/languageChooser';
import getTitles from './infos/getTitles';
import EnumDomain from '../helpers/EnumDomain';

const Leasures = ( {domain} ) => {

    const {language, focus} = React.useContext(AppContext);
    var title = languageChooser(language, getTitles()).leasures;
    var leasures = languageChooser(language, getLeasures());

    return  <div className="page-break">
                <div className="title">{title}</div>
                <div className="leasures"> 
                    {
                        leasures.map((leasure, index) => {
                            return  <div key={index}>
                                        {
                                            index < 3 ? 
                                                <div className={`element ${focus && leasure.domains && leasure.domains.includes(EnumDomain.MATHS) ? "little-focus" : ""}`}>
                                                    {/* <div style={{textDecoration: "underline", textDecorationColor: "rgb(170, 65, 65)"}}> */}
                                                        {leasure.activity}
                                                    {/*  </div>
                                                    &nbsp; */}
                                                </div>
                                                    :   <div className="element">{leasure.activity}</div>
                                        }
                                    </div>
                        })
                    }
                </div>
                    
                <hr />
            </div> 
}

export default Leasures;