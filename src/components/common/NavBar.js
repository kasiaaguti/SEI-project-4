import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import Auth from '../../lib/Auth'

class NavBar extends React.Component {
  constructor() {
    super()

    this.state = {}
    this.toggleNavbar = this.toggleNavbar.bind(this)
    this.logout = this.logout.bind(this)
  }

  logout() {
    Auth.logout()
    this.props.history.push('/')
  }

  toggleNavbar() {
    console.log(this.props)
    this.setState({ navbarOpen: !this.state.navbarOpen})
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.setState({ navbarOpen: false })
    }
  }

  render() {
    return (
      <nav className="navbar is-sticky-top">


        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item">Polish powerengeneering sector</Link>

            <a role="button" className={`navbar-burger ${this.state.navbarOpen ? 'is-active' : ''}`} aria-label="menu" aria-expanded="false" onClick={this.toggleNavbar}>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          <div className={`navbar-menu ${this.state.navbarOpen ? 'is-active' : ''}`}>




            <div className="navbar-end">
              {Auth.isAuthenticated() && <Link to="/companies/new" className="navbar-item">Add a company</Link>}
              <Link to="/companies" className="navbar-item">Companies</Link>


              <Link to="/about" className="navbar-item" >About</Link>
              <Link to="/"  className="navbar-item">Home</Link>

              <Link to="/map" className="navbar-item">See on the map</Link>

              {!Auth.isAuthenticated() && <Link to="/register" className="navbar-item">Register</Link>}
              {!Auth.isAuthenticated() && <Link to="/login" className="navbar-item">Login</Link>}
              {Auth.isAuthenticated() && <a className="navbar-item" onClick={this.logout}>Logout</a>}

            </div>
          </div>
        </div>

      </nav>
    )
  }
}


export default withRouter(NavBar)
