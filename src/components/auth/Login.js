import React from 'react'
import axios from 'axios'
import Auth from '../../lib/Auth'

class Login extends React.Component {
  constructor() {
    super()

    this.state = { data: {}, error: '' }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    const data = { ...this.state.data, [e.target.name]: e.target.value }

    this.setState({ data: data, error: '' })
    console.log(e.target.name)
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log('Logging In')
    axios.post('/api/login', this.state.data)
      .then(res => {
        Auth.setToken(res.data.token)
        this.props.history.push('/companies')
      })
      .catch(() => this.setState({ error: 'Invalid Credentials' }))
  }

  render() {
    return (
      <main className="section-newform">
        <div className="new-form">
          <form onSubmit={this.handleSubmit}>
            <h2 className="register-title">Login For Your Account</h2>
            <div className="wrapper">
              <div className="wrapper-2">
                <div className="control has-icons-right">
                  <input
                    id="input"
                    className={`input-text2 ${this.state.error ? 'is-danger' : ''}`}
                    name="email"
                    placeholder="Email"
                    onChange={this.handleChange}
                  />
                  <label htmlFor="input" className="input-label">Email</label>
                  <span className="icon is-small is-right">
                    <i className="fas fa-envelope"></i>
                  </span>
                </div>
              </div>
            </div>

            <div className="wrapper">
              <div className="wrapper-2">
                <div className="control has-icons-right">
                  <input
                    id="input"
                    className={`input-text2 ${this.state.error ? 'is-danger' : ''}`}
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={this.handleChange}
                  />
                  <label className="input-label">Password</label>
                  <span className="icon is-small is-right">
                    <i className="fas fa-lock"></i>
                  </span>
                </div>
              </div>
              {this.state.error && <small className="help is-danger">{this.state.error}</small>}
            </div>
            <button type="submit" className="button">Login</button>
          </form>
        </div>
      </main>
    )
  }
}

export default Login
