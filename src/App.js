import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import {ManualRoutes, ManualRoute} from './ManualRoutes'


function App() {
    const [hash, setHash] = useState(window.location.hash)
    window.addEventListener("hashchange", (e) => {setHash(e.target.location.hash)});
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a className="App-link" href="/#a">Jump to #a </a>
        <a className="App-link" href="/#b">Jump to #b </a>
        <ManualRoutes source={hash}>
            <ManualRoute route='#a.*' element={'A'}/>
            <ManualRoute route='#b.*' element={'B'}/>
        </ManualRoutes>
      </header>
    </div>
  );
}

export default App;
