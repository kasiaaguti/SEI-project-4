import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import './style.scss'
import 'bulma'



import Home from './components/common/Home'
import About from './components/common/About'
import CompaniesIndex from './components/companies/CompaniesIndex'
import CompaniesShow from './components/companies/CompaniesShow'
import CompaniesNew from './components/companies/CompaniesNew'
import CompaniesEdit from './components/companies/CompaniesEdit'
import MarkersMap from './components/companies/MarkersMap'
import NewsIndex from './components/news/NewsIndex'


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
             <Link to="/companies/new">Add company</Link>
           <Link to="/news">News</Link>
            </div>
          </nav>
          <Switch>
            <Route path="/about" component={About} />
            <Route exact path="/" component={Home}/>
            <Route path="/companies/new" component={CompaniesNew} />
            <Route path="/companies/:id/edit" component={CompaniesEdit}/>
            <Route path="/companies/:id" component={CompaniesShow} />
            <Route path="/companies" component={CompaniesIndex} />
            <Route path="/map" component={MarkersMap} />
            <Route path="/news" component={NewsIndex} />
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
