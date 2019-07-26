import React from 'react'
import axios from 'axios'

class CompaniesShow extends React.Component {
  constructor() {
    super()

    this.state = { company: null,  comment: {}  }
  }

  componentDidMount() {
    axios.get(`/api/companies/${this.props.match.params.id}`)
      .then(res => this.setState({ company: res.data, comment: {} }))
      .catch(err => console.log(err))
  }

  render() {
    if (!this.state.company) return null
    const { company } =  this.state
    return (
      <main className="section">
        <div className="container">
          <h2 className="title">{company.name}</h2>
          <hr />
          <div className="columns">
            <div className="column is-half">
              <figure className="image">
                <img src={company.image} alt={company.name} />
              </figure>
            </div>
            <div className="column is-half">
              <h4 className="title is-4">Website</h4>
              <p>{company.website}</p>
              <p>{company.profile}</p>
              <p>{company.employees.user}</p>



           </div>


        



            </div>
          </div>



      </main>
    )
  }
}

export default CompaniesShow
