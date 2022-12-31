import React from 'react';
import CurriculumVitae from './components/CurriculumVitae';
import AppContext from './components/context/AppContext';

import { getThemeIfStoredThemeExists } from './components/styles/getThemes';

import 'bootstrap/dist/css/bootstrap.min.css';
import './components/styles/Themes.css';
import './App.css';

function App() {

  const [theme, setTheme] = React.useState(getThemeIfStoredThemeExists(JSON.parse(sessionStorage.getItem('theme'))) ? JSON.parse(sessionStorage.getItem('theme')) : "Blank");
  const [language, setLanguage] = React.useState(JSON.parse(sessionStorage.getItem('language')) ? JSON.parse(sessionStorage.getItem('language')) : "French");

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
                      <CurriculumVitae language={language} />
                  </div>       
              </AppContext.Provider>
          </div>
          <div id="doc-to-print"></div>
      </>
  );
}

export default App;
