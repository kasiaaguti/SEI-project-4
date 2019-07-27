import React from 'react'
import axios from 'axios'

class ProfilesShow extends React.Component {
  constructor() {
    super()

    this.state = { user: null }
  }

  componentDidMount() {
    axios.get(`/api/users/${this.props.match.params.id}`)
      .then(res => this.setState({ user: res.data }))
      .catch(err => console.log(err))
  }

  render() {
    if (!this.state.user ) return null
    const { user } =  this.state
    console.log(user)

    return (
      <main className="section">
        <div className="container">
          <h2 className="title">{user.name}</h2>
          <hr />
          <div className="columns">

            <div className="column is-half">
              <h4 className="title is-4">works at</h4>
              <p>{user.bio}</p>



           </div>






            </div>
          </div>



      </main>
    )
  }
}

export default ProfilesShow
