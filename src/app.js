import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import './style.scss'
import 'bulma'




import Home from './components/common/Home'
import About from './components/common/About'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import CompaniesIndex from './components/companies/CompaniesIndex'
import CompaniesShow from './components/companies/CompaniesShow'
import CompaniesNew from './components/companies/CompaniesNew'
import CompaniesEdit from './components/companies/CompaniesEdit'
import MarkersMap from './components/companies/MarkersMap'
import NewsIndex from './components/news/NewsIndex'
import ProfilesIndex from './components/profiles/ProfilesIndex'
import ProfilesShow from './components/profiles/ProfilesShow'
import ProfilesNew from './components/profiles/ProfilesNew'
import NavBar from './components/common/NavBar'


class App extends React.Component {
  render() {
    return(
      <BrowserRouter>
        <main>
          <NavBar />
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/about" component={About} />
            <Route exact path="/" component={Home}/>
            <Route path="/register" component={ProfilesNew} />
            <Route path="/users/:id" component={ProfilesShow} />
            <Route path="/users" component={ProfilesIndex} />
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
