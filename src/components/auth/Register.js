import React from 'react'
import axios from 'axios'

class Register extends React.Component {
  constructor() {
    super()

    this.state ={ data: {}, errors: {} }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange({ target: { name, value }}) {
    const data = { ...this.state.data, [name]: value }
    const errors = {...this.state.errors, [name]: ''}
    this.setState({ data, errors })
  }

  handleSubmit(e) {
    e.preventDefault()

    axios.post('/api/register', this.state.data)
      .then(() => this.props.history.push('/api/login'))
      .catch(err => this.setState({ errors: err.response.data.errors }))
  }

  render() {
    console.log(this.state)
    return (
      <section className="parallax">
        <section className="section newform">
          <div className="container">
            <form onSubmit={this.handleSubmit}>


              <h2 className="title">Register</h2>

              <div className="field">
                <label className="label">Name</label>
                <div className="control">
                  <input
                    type="name"
                    className="input"
                    name="name"
                    placeholder="Name"
                    onChange={this.handleChange}

                  />
                </div>
              </div>

              <div className="field">
                <label className="label">Username</label>
                <div className="control">
                  <input
                    className="input"
                    name="username"
                    placeholder="Username"
                    onChange={this.handleChange}

                  />
                </div>
              </div>

              <div className="field">
                <label className="label">Email</label>
                <div className="control">
                  <input
                    className="input"
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
                    className="input"
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={this.handleChange}
                  />
                </div>

              </div>

              <div className="field">
                <label className="label">Password Confirmation</label>
                <div className="control">
                  <input
                    className="input"
                    type="password"
                    name="password_confirmation"
                    placeholder="Password Confirmation"
                    onChange={this.handleChange}
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">Bio</label>
                <div className="control">
                  <input
                    className="input"
                    name="bio"
                    placeholder="Bio"
                    onChange={this.handleChange}

                  />
                </div>
              </div>


              <button type="submit" className="button">Submit</button>
            </form>
          </div>
        </section>
      </section>
    )
  }
}

export default Register

{/*
            //
            // <div className="field">
            //   <label className="label">Username</label>
            //   <div className="control">
            //     <input */}
{/* //       className={`input ${this.state.errors.username ? 'is-danger' : ''}`}
            //       name="username"
            //       placeholder="Username"
            //       onChange={this.handleChange}
            //     />
            //   </div> */}
{/* //   {this.state.errors.username && <small className="help is-danger">{this.state.errors.username}</small>}
            // </div> */}
