import React from 'react';

export default React.createContext(
    {
        theme: "",
        updateTheme: (name) => {},
        language: "",
        updateLanguage: (name) => {},
        focus: {},
        updateFocus: (value) => {},
    }
);