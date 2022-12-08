import React from 'react';
import CurriculumVitae from './components/CurriculumVitae';
import AppContext from './components/context/AppContext';

import 'bootstrap/dist/css/bootstrap.min.css';
import './components/styles/Themes.css';
import './App.css';

function App() {

  const [theme, setTheme] = React.useState(JSON.parse(localStorage.getItem('theme')) ? JSON.parse(localStorage.getItem('theme')) : "Default");

  const appContext = {
      theme: theme,
      updateTheme: setTheme
  }

  return (
    <div className="App" id="capture">
        <AppContext.Provider value={appContext} > 
              <div className={`${theme}`}>
                  <header className="App-header">
                      <CurriculumVitae />
                  </header>
              </div>
        </AppContext.Provider>
    </div>
  );
}

export default App;
