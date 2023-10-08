import React from 'react';
import CurriculumVitae from './components/CurriculumVitae';
import AppContext from './components/context/AppContext';
import EnumDomain from './components/helpers/EnumDomain';
import { getThemeIfStoredThemeExists } from './components/styles/getThemes';
import { BrowserRouter, Route, Routes, Outlet, HashRouter } from 'react-router-dom';
import pathBuilder from './components/helpers/pathBuilder';
/* import Error from './components/helpers/Error';
 */
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/styles/Themes.css';
import './App.css';
import EnumLanguages from './components/helpers/EnumLanguages';

function App() {

    const [theme, setTheme] = React.useState(getThemeIfStoredThemeExists(JSON.parse(sessionStorage.getItem('josselin-douineau-cv-theme'))) ? JSON.parse(sessionStorage.getItem('josselin-douineau-cv-theme')) : "Blank");
    const [language, setLanguage] = React.useState(EnumLanguages.FRENCH);
    const [focus, setFocus] = React.useState(true);

    const appContext = {
        theme: theme,
        updateTheme: setTheme,
        language: language,
        updateLanguage: setLanguage,
        focus: focus,
        updateFocus: setFocus,
    }
    
    console.log('public url: ', process.env.PUBLIC_URL)

    return (
        <>
            <div className="App" id="capture">
                <AppContext.Provider value={appContext} > 
                    <div className={`${theme}`}>
                        <BrowserRouter>
                             <Routes>
                                <Route exact path={pathBuilder('/')} element={<CurriculumVitae domain={EnumDomain.GENERIC} relativePath={'/'} />} />
                                <Route path={pathBuilder('/dev')} element={<CurriculumVitae domain={EnumDomain.DEV} poste={'Développeur ReactJS'} relativePath={'/dev'} />} />
                                <Route path={pathBuilder('/maths')} element={<CurriculumVitae domain={EnumDomain.MATHS} poste={'Professeur de mathématiques'} relativePath={'/maths'} />} />

                                {/* <Route exact path={'/'} element={<CurriculumVitae domain={EnumDomain.GENERIC} relativePath={'/'} />} />
                                <Route path={'/dev'} element={<CurriculumVitae domain={EnumDomain.DEV} poste={'Développeur ReactJS'} relativePath={'/dev'} />} />
                                <Route path={'/maths'} element={<CurriculumVitae domain={EnumDomain.MATHS} poste={'Professeur de mathématiques'} relativePath={'/maths'} />} /> */}
                                
                                {/* <Route path={pathBuilder('/')} element={<Layout />} >
                                    <Route index element={<CurriculumVitae domain={EnumDomain.GENERIC} relativePath={'/'} />} />
                                    <Route path={pathBuilder('dev')} element={<CurriculumVitae domain={EnumDomain.DEV} poste={'Développeur ReactJS'} relativePath={'/dev'} />} />
                                    <Route path={pathBuilder('maths')} element={<CurriculumVitae domain={EnumDomain.MATHS} poste={'Professeur de mathématiques'} relativePath={'/maths'} />} />
                                </Route> */}
                            </Routes> 
                        </BrowserRouter>
                    </div>       
                </AppContext.Provider>
            </div>
            <div id="doc-to-print"></div>
        </>
    );
}

export default App;
