import React from 'react'
import { Link } from 'react-router-dom'

const CompaniesCard = ({ name, image, street, number, postcode, city, id }) => (
  <div className="column is-one-quarter-desktop is-one-third-tablet is-half-mobile">
    <Link to={`/companies/${id}`}>
      <div className="card card-custom">
        <div className="card-header">
          <h4 className="card-header-title">{name}</h4>
        </div>
        <div className="card-image">
          <figure className="image">
            <img src={image} alt={name} />
          </figure>
        </div>
        <div className="card-content">
          <p> {street} {number}</p>
        <p> {postcode} {city}</p>




        </div>
      </div>
    </Link>
  </div>
)

export default CompaniesCard
