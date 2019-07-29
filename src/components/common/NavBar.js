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
      <nav className="navbar is-fixed-top">


        <div className="container">
          <div className="navbar-brand">

            <Link to="/" className="navbar-item">  <img src="../../assets/logo2.jpg"  height="100%"></img></Link>




            <a role="button" className={`navbar-burger ${this.state.navbarOpen ? 'is-active' : ''}`} aria-label="menu" aria-expanded="false" onClick={this.toggleNavbar}>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          <div className={`navbar-menu ${this.state.navbarOpen ? 'is-active' : ''}`}>


            <div className="navbar-end">
              <Link to="/about" className="navbar-item" >About</Link>
              <Link to="/"  className="navbar-item">Home</Link>
              <Link to="/news" className="navbar-item">News</Link>

              <Link to="/companies" className="navbar-item">Companies</Link>





              <Link to="/map" className="navbar-item">See on the map</Link>



              {Auth.isAuthenticated() && <Link to="/companies/new" className="navbar-item">Add a company</Link>}
              <Link to="/users" className="navbar-item">Connect with people</Link>

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
