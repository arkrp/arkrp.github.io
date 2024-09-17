import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function FragmentRoute(props){
    return(props.hash);
}

function App() {
    const [hash, setHash] = useState(window.location.hash)
    window.addEventListener("hashchange", (e) => {setHash(e.target.location.hash)});
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <input type='color'/>
        <a className="App-link" href="/#a">Jump to /a </a>
        <a className="App-link" href="/#b">Jump to /b </a>
        <FragmentRoute hash={hash} element={'Hello'}/>
      </header>
    </div>
  );
}

export default App;
