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
      <section className="section index-page">
        <div className="container">
          <div className="columns is-mobile is-multiline">
            {this.state.profiles.map(profile => (
              <ProfileCard
                key={profile.id}
                {...profile}
              />
            ))}
          </div>
        </div>
      </section>
    )
  }
}

export default Profiles
