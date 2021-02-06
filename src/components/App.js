import React, { useState } from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../context/LanguageContext';
import ColorConxtext from '../context/ColorContext';

const App = () => {
  const [language, setLanguage] = useState('english');

  return (
    <div className="ui container">
      <div>
        Select a language:
        <i className="flag us" onClick={() => setLanguage('english')} />
        <i className="flag nl" onClick={() => setLanguage('dutch')} />
      </div>
      <LanguageContext.Provider value={language}>
        <ColorConxtext.Provider value="pink">
          <UserCreate />
        </ColorConxtext.Provider>
      </LanguageContext.Provider>
    </div>
  );
};

export default App;
