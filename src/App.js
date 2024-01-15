import React from 'react';
import CurriculumVitae from './components/CurriculumVitae';
import AppContext from './components/context/AppContext';
import EnumDomain from './components/helpers/EnumDomain';
import EnumLanguage from './components/helpers/EnumLanguage';
import EnumTheme from './components/helpers/EnumTheme';
import Error from './components/helpers/Error';
import { createHashRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './components/styles/Themes.css';
import './App.css';


function App() {

    const [theme, setTheme] = React.useState(process.env.NODE_ENV === 'development' ? EnumTheme.DARCULA : EnumTheme.BLANK);
    const [language, setLanguage] = React.useState(EnumLanguage.FRENCH);
    const [reduced, setReduced] = React.useState(true);
    const [domain, setDomain] = React.useState(EnumDomain.BASIC);

    // entrer le poste ici
    var devPoste = 'Développeur polyvalent';
    var genericPoste = 'Employé polyvalent';
    
    // entrer la société ici
    var boite = "";

    const appContext = {
        theme: theme,
        updateTheme: setTheme,
        language: language,
        updateLanguage: setLanguage,
        reduced: reduced,
        updateReduced: setReduced,
        domain: domain,
        updateDomain: setDomain
    }
    
    /* console.log('public url: ', process.env.PUBLIC_URL) */

    const router = createHashRouter(
        [
            {
                path: "/",
                children : [
                    {
                        path: "",
                        element: <CurriculumVitae domain={EnumDomain.MATHS} poste={'Professeur de mathématiques'} relativePath={'/'} />
                    },
                    {
                        path: "dev",
                        element: <CurriculumVitae domain={EnumDomain.DEV} poste={process.env.NODE_ENV === 'development' ? devPoste : 'Développeur ReactJS'} boite={process.env.NODE_ENV === 'development' ? boite : ''} relativePath={'/#/dev'} />
                    },
                    {
                        path: "basic",
                        element: <CurriculumVitae domain={EnumDomain.BASIC} poste={process.env.NODE_ENV === 'development' ? genericPoste : 'Employé polyvalent'} boite={process.env.NODE_ENV === 'development' ? boite : ''} relativePath={'/#/basic'}/>
                    }
                ],
                errorElement: <Error />,
            }
        ]
    );

    return (
        <>
            <div className="App" id="capture">
                <AppContext.Provider value={appContext} > 
                    <div className={`${theme}`}>
                        <RouterProvider router={router} />
                    </div>       
                </AppContext.Provider>
            </div>
            <div id="doc-to-print"></div>
        </>
    );
}

export default App;
