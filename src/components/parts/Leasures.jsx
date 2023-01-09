import React from 'react';
import getLeasures from "./infos/getLeasures";
import AppContext from '../context/AppContext';
import languageChooser from '../helpers/languageChooser';
import getTitles from './infos/getTitles';

const Leasures = () => {

    const {language} = React.useContext(AppContext);
    var title = languageChooser(language, getTitles()).leasures;
    var leasures = languageChooser(language, getLeasures());

    return  <div className="page-break">
                <div className="title">{title}</div>
                <div className="leasures element"> 
                    {leasures.map((leasure, index) => {
                        return <div key={index} className="element">
                                    <div className="icon-block">
                                        <div className="icon">{leasure.icon}</div> 
                                        <div className="element-of-icon">{leasure.activity}</div>
                                    </div>
                                </div>
                    })} 
                </div>
                <hr />
            </div> 
}

export default Leasures;