import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Nav from './components/Nav'
import HomePage from './components/HomePage'
import Footer from './components/Footer'
import Services from './components/Services';
import Projects from './components/Projects'
import NewProject from './components/NewProject'
import SingleProject from './components/SingleProject';
import About from './components/About'

function App() {

  return (
    <Router>
      <Switch>
        <div className="App">
          <Nav/>
          <Route path="/projects/:projectId" exact={true}>
            <SingleProject/>
          </Route>

          <Route path="/services" exact={true}>
            <Services/>
          </Route>

          <Route path="/projects" exact={true}>
            <Projects/>
          </Route>

          <Route path="/about" exact={true}>
            <About/>
          </Route>
          <Route path="/new-project" exact={true}>
            <NewProject/>
          </Route>

          <Route path="/Water-Tech-Pools-Maintenance" exact={true}>
            <HomePage/>
          </Route>

          <Route path="/" exact={true}>
            <HomePage/>
          </Route>

          <Footer/>
      </div>
      </Switch>
    </Router>
  );
}

export default App;
