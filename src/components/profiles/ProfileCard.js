import React from 'react'
import { Link } from 'react-router-dom'



const ProfilesCard = ({ name, image, id, companies }) => (
  <div className="column is-one-quarter-desktop is-one-third-tablet is-half-mobile">

    <div className="card card-custom">
      <Link to={`/users/${id}`}>
      
        <div className="card-header">

          <h4 className="card-header-title">{name}</h4>
        </div>

        <figure className="image card-image">
          <img src={image} alt={name} />
        </figure>
      </Link>
      <div className="card-content">

        <h5 className="subtitle is-6">I work at {companies.map(company =>
          <div key={company.id}>

            <p>
              <Link to={`/companies/${company.id}`}>{company.name}</Link>
            </p>
          </div>
        )}</h5>
      </div>
    </div>


  </div>
)

export default ProfilesCard
