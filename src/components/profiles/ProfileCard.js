import React from 'react'
import { Link } from 'react-router-dom'



const ProfilesCard = ({ name, bio, id }) => (
  <div className="column is-one-quarter-desktop is-one-third-tablet is-half-mobile">
    <Link to={`/users/${id}`}>
      <div className="card">
        <div className="card-header">
          <h4 className="card-header-title">{name}</h4>
        </div>

        <div className="card-content">

          <h5 className="title is-6">{bio}</h5>

        </div>
      </div>
    </Link>
  </div>
)

export default ProfilesCard
