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


  // return (
  //   <section className="section newform">
  //     <div className="container">
  //       <form onSubmit={this.handleSubmit}>
  //
  //
  //         <h2 className="title">Register</h2>
  //
  //           <div className="field">
  //             <label className="label">Name</label>
  //             <div className="control">
  //               <input
  //                 className="input"
  //                 name="name"
  //                 placeholder="Name"
  //                 onChange={this.handleChange}
  //
  //               />
  //             </div>
  //           </div>


  render() {
    return (
      <main className="section newform">
        <div className="container">
          <form onSubmit={this.handleSubmit}>

            <h2 className="title">Login For Your Account</h2>

            <div className="field">
               <label className="label">Email</label>
                 <div className="control">
                  <input
                    className={`input ${this.state.error ? 'is-danger' : ''}`}
                    name="email"
                    placeholder="Email"
                    onChange={this.handleChange}
                  />
              </div>
            </div>


                <div className="field">
                  <label className="label">Password</label>
                  <div className="control">
                  <input
                    id="input"
                    className={`input ${this.state.error ? 'is-danger' : ''}`}
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={this.handleChange}
                  />
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
