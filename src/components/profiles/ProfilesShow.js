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
                <figure className="image user-img">
                  <img src={user.image} alt={user.name} />
                </figure>
                <br />

                <h4 className="title is-4">About me</h4>
                <p>{user.bio}</p>
                <br />

                <h4 className="title is-4">I work at</h4>


              </div>
              <div className="column is-half">

<p>posts here</p>

                </div>
              </div>
            </div>



      </main>
    )
  }
}

export default ProfilesShow
