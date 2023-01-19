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
                <div className="leasures"> 
                    <div className="element">        
                        <div className="element-of-icon">
                           {leasures.list}
                        </div>
                    </div>
                </div>
                <hr />
            </div> 
}

export default Leasures;