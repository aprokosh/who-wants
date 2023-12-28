import React, { useEffect } from 'react';
import {Helmet} from 'react-helmet';
import './App.css';
import { MainPage } from './components/mainPage';

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Who Wants to be</title>
      </Helmet>
      <main>
        <MainPage></MainPage>
      </main>
    </div>
  );
}

export default App;
