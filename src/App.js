import logo from 'src/img/react_logo.svg';
import { useState } from 'react';
import 'src/App.css';
import {ManualRoutes, ManualRoute} from 'src/components/ManualRoutes'
import CustomNavbar from 'src/components/CustomNavbar'


function App() {
    const [hash, setHash] = useState(window.location.hash)
    window.addEventListener("hashchange", (e) => {setHash(e.target.location.hash)});
  return (
    <div className="App">
        <CustomNavbar/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ManualRoutes source={hash}>
            <ManualRoute route='#home.*' element={'HOME'}/>
            <ManualRoute route='#portfolio.*' element={'PORTFOLIO'}/>
            <ManualRoute route='#projects.*' element={'PROJECTS'}/>
            <ManualRoute route='#contact.*' element={'CONTACT'}/>
        </ManualRoutes>
      </header>
    </div>
  );
}

export default App;
