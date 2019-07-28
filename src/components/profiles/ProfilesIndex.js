import React from 'react'
import axios from 'axios'

import ProfileCard from './ProfileCard'

class Profiles extends React.Component {
  constructor() {
    super()

    this.state = { profiles: null }
  }

  componentDidMount() {
    axios.get('/api/users')
      .then(res => this.setState({ profiles: res.data }))
      .catch(err => console.log(err.response))
  }

  render() {
    if (!this.state.profiles) return null
    return (
      <main className="main-profiles">
        {this.state.profiles.map(profile => (
          <ProfileCard
            key={profile.id}
            {...profile}
          />
        ))}
      </main>
    )
  }
}

export default Profiles
