import React from 'react';
import './styles/main.scss'
import './App.css';
import { Select } from './components/Select';

function App() {
  const [value, setValue] = React.useState('')

  return (
    <div className="App">
      app <br />
      <Select />
    </div>
  );
}

export default App;
