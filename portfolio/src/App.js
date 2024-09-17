import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function testRouter(props){
    if(props.route==window.location.pathname){
        return(
            props.children
        );
    }
    return(null);
}

function Homepage(){
    return(
                        <header className="App-header">
                            <img src={logo} className="App-logo" alt="logo" />
                            <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        Learn React
                    </a>
                </header>
    );
}

function App() {
    return (
    <div className="App">
        <Router>
            <Routes>
                <Route path='/' element={<Homepage/>}/>
                <Route path='/*' element={'*'}> {'HELLO'}</Route>
                <Route path='/2' element={2}></Route>
            </Routes>
        </Router>
    </div>
    );
}

export default App;
