import React from 'react';
import CurriculumVitae from './components/CurriculumVitae';
import AppContext from './components/context/AppContext';
import EnumDomain from './components/helpers/EnumDomain';
import { getThemeIfStoredThemeExists } from './components/styles/getThemes';

import 'bootstrap/dist/css/bootstrap.min.css';
import './components/styles/Themes.css';
import './App.css';

function App() {

  const [theme, setTheme] = React.useState(getThemeIfStoredThemeExists(JSON.parse(sessionStorage.getItem('josselin-douineau-developer-theme'))) ? JSON.parse(sessionStorage.getItem('josselin-douineau-developer-theme')) : "Blank");
  const [language, setLanguage] = React.useState("French");

  const [domain] = React.useState(
    process.env.NODE_ENV === 'development' ?
        EnumDomain.NON_DEV 
            :   EnumDomain.DEV 
    );

  const appContext = {
      theme: theme,
      updateTheme: setTheme,
      language: language,
      updateLanguage: setLanguage
  }

  return (
      <>
          <div className="App" id="capture">
              <AppContext.Provider value={appContext} > 
                  <div className={`${theme}`}>
                      <CurriculumVitae domain={domain}/>
                  </div>       
              </AppContext.Provider>
          </div>
          <div id="doc-to-print"></div>
      </>
  );
}

export default App;
