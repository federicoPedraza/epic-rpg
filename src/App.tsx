import React from 'react';
import './App.css';
import { Canvas } from './components/canvas/canvas';
import { I18nextProvider } from 'react-i18next';
import i18n from './translations/i18n';

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <div className='full-screen'>
          <Canvas />
      </div>
    </I18nextProvider>
  );
}

export default App;
