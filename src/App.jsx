import { useState } from 'react'
import './App.css'
import InlineComponent from './components/inlineComponent';

import Todo from './components/Todo';

function App() {
  return (
    <div className="App">
      <InlineComponent></InlineComponent>
    </div>
  );
}

export default App
