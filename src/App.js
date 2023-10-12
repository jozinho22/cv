import React from 'react';
import CurriculumVitae from './components/CurriculumVitae';
import AppContext from './components/context/AppContext';
import EnumDomain from './components/helpers/EnumDomain';
import EnumLanguage from './components/helpers/EnumLanguage';
import EnumTheme from './components/helpers/EnumTheme';
import { BrowserRouter, Route, Routes, Outlet, HashRouter, createHashRouter, RouterProvider } from 'react-router-dom';
import pathBuilder from './components/helpers/pathBuilder';
/* import Error from './components/helpers/Error';
 */
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/styles/Themes.css';
import './App.css';
import Error from './components/helpers/Error';

function App() {

    const [theme, setTheme] = React.useState(process.env.NODE_ENV === 'development' ? EnumTheme.DARCULA : EnumTheme.BLANK);
    const [language, setLanguage] = React.useState(EnumLanguage.FRENCH);
    const [reduced, setReduced] = React.useState(true);
    const [domain, setDomain] = React.useState({});

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
                        element: <CurriculumVitae domain={EnumDomain.GENERIC} relativePath={'/'} />
                    },
                    {
                        path: "dev",
                        element: <CurriculumVitae domain={EnumDomain.DEV} poste={'Développeur ReactJS'} relativePath={'/#/dev'} />
                    },
                    {
                        path: "maths",
                        element: <CurriculumVitae domain={EnumDomain.MATHS} poste={'Professeur de mathématiques'} relativePath={'/#/maths'} />
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
                        {/* <HashRouter>
                             <Routes>
                                <Route exact path={'/'} element={<CurriculumVitae domain={EnumDomain.GENERIC} relativePath={'/'} />} />
                                <Route path={'/dev'} element={<CurriculumVitae domain={EnumDomain.DEV} poste={'Développeur ReactJS'} relativePath={'/dev'} />} />
                                <Route path={'/maths'} element={<CurriculumVitae domain={EnumDomain.MATHS} poste={'Professeur de mathématiques'} relativePath={'/maths'} />} />
                            </Routes> 
                        </HashRouter> */}
                        <RouterProvider router={router} />
                    </div>       
                </AppContext.Provider>
            </div>
            <div id="doc-to-print"></div>
        </>
    );
}

export default App;
