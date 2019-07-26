import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import './style.scss'
import 'bulma'



import Home from './components/Home'
import About from './components/About'
import CompaniesIndex from './components/CompaniesIndex'
import CompaniesShow from './components/CompaniesShow'
import MarkersMap from './components/MarkersMap'


class App extends React.Component {
  render() {
    return(
      <BrowserRouter>
        <main>
          <nav className="navbar is-light">
            <div className="navbar-brand">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
            </div>
            <div className="navbar-end">
              <Link to="/companies">Companies</Link>
              <Link to="/map">Map</Link>
            </div>
          </nav>
          <Switch>
            <Route path="/about" component={About} />
            <Route exact path="/" component={Home}/>
            <Route path="/companies/:id" component={CompaniesShow} />
            <Route path="/companies" component={CompaniesIndex} />
            <Route path="/map" component={MarkersMap} />
          </Switch>
        </main>
      </BrowserRouter>
    )
  }
}




ReactDOM.render(
  <App />,
  document.getElementById('root')
)
