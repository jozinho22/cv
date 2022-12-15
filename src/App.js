import React from 'react';
import CurriculumVitae from './components/CurriculumVitae';
import AppContext from './components/context/AppContext';

import 'bootstrap/dist/css/bootstrap.min.css';
import './components/styles/Themes.css';
import './App.css';

function App() {

  const [theme, setTheme] = React.useState(JSON.parse(localStorage.getItem('theme')) ? JSON.parse(localStorage.getItem('theme')) : "Blank");
  const [language, setLanguage] = React.useState(JSON.parse(localStorage.getItem('language')) ? JSON.parse(localStorage.getItem('language')) : "French");

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
                    <CurriculumVitae language={language}/>
                </div>       
          </AppContext.Provider>
      </div>
      <div id="doc-to-print"></div>
    </>
  );
}

export default App;
