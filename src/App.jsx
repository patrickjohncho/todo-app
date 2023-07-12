import { useState } from 'react'
import './App.css'
import InlineComponent from './components/inlineComponent';
import StylesheetComponent from './components/StylesheetComponent';

import Todo from './components/Todo';

function App() {
  return (
    <div className="App">
      <StylesheetComponent></StylesheetComponent>
    </div>
  );
}

export default App
