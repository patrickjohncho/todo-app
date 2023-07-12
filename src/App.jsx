import { useState } from 'react'
import './App.css'
import InlineComponent from './components/inlineComponent';
import StylesheetComponent from './components/StylesheetComponent';
import ModuleComponent from './components/ModuleComponent';

import Todo from './components/Todo';

function App() {
  return (
    <div className="App">
      <ModuleComponent></ModuleComponent>
    </div>
  );
}

export default App
