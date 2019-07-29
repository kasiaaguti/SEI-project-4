import React from 'react'
import axios from 'axios'
import CompaniesCard from './CompaniesCard'

class CompaniesIndex extends React.Component {
  constructor() {
    super()

    this.state = { companies: null }
  }

  componentDidMount() {
    axios.get('api/companies')
      .then(res => this.setState({ companies: res.data }))
      .catch(err => console.log(err))
  }

  render() {
    if (!this.state.companies) return null
    console.log(this.state.companies)
    return (
      <section className="section index-page">
        <div className="container">
          <div className="columns is-mobile is-multiline">
            {this.state.companies.map(company => (
              <CompaniesCard
                key={company.id}
                {...company}
              />
            ))}
          </div>
        </div>
      </section>



    )
  }
}

export default CompaniesIndex

//
// <section className="section">
//   <div className="container">
//     <div className="columns is-mobile is-multiline">
//       {this.state.companies.map(company => (
//         <div key={company._id}>
//           <h1>  {company.name} </h1>
//           <p>  {company.address}</p>
//
//         </div>
//       ))}
//     </div>
//   </div>
// </section>
//
