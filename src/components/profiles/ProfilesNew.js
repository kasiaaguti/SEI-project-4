import React from 'react'
import axios from 'axios'
import ProfilesForm from './ProfilesForm'

class ProfilesNew extends React.Component {
  constructor() {
    super()
    this.state =  { data: {} }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }

  handleChange({ target: { name, value } }) {
    const data = { ...this.state.data, [name]: value }
    this.setState({ data })
  }


  handleSubmit(e) {
    e.preventDefault()

    axios.post('/api/users', this.state.data)
      .then(() => this.props.history.push('/users'))
      .catch(err => console.log(err.response))
  }



  render() {
    return (
      <section>
        <h1>New Profile Form</h1>
        <ProfilesForm
          data={this.state.data}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}

        />
      </section>

    )
  }
}


export default ProfilesNew
