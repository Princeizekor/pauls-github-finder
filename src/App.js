import { BrowserRouter as Router, Route, } from 'react-router-dom';
import Navbar from './components/Navbar';
import './components/Navbar.css';
import './components/Home.css';
import './components/Details.css';
import './components/About.css';
import Home from './components/Home';
import Details from './components/Details';
import About from './components/About';

function App() {
  return (
    <Router>
     <div className="App">
       <Navbar />
        <div className="component">
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/details/:details">
            <Details />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </div>
      </div>
    </Router>
  );
}

export default App;
