import React from 'react'
import axios from 'axios'
import CompaniesForm from './CompaniesForm'
import Auth from '../../lib/Auth'

class CompaniesNew extends React.Component {
  constructor() {
    super()

    this.state = { data: {} }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    // this.getAddressCoordinates = this.getAddressCoordinates.bind(this)
    // this.
  }

  handleChange({ target: { name, value }}) {
    const data = { ...this.state.data, [name]: value }
    this.setState({ data })
  }

  onRadioChange ({ target: { name, value }}) {
    const data = { ...this.state.data, [name]: value }
    this.setState({ data })
    console.log(value)
  }

  getAddressCoordinates() {
    const { data } = this.state
    axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${data.street} ${data.number}, ${data.postcode} ${data.city}, Poland.json`, {
      params: {
        access_token: process.env.MAPBOX
      }
    })
      .then(res => {
        const lat = res.data.features[0].geometry.coordinates[1]
        const long = res.data.features[0].geometry.coordinates[0]
        const data = { ...this.state.data, lat, long}
        this.setState({ data }, () => this.postNewCompany())
      })
      .catch(err => console.log(err))
  }

  postNewCompany() {
    console.log('submitting with data:', this.state.data)
    axios.post('/api/companies', this.state.data, {
      headers: { 'Authorization': `${Auth.getToken()}` }
    })
      .then(() => this.props.history.push('/companies'))
      .catch(err => console.log(err.response))
  }


  handleSubmit(e) {
    e.preventDefault()
    this.getAddressCoordinates()
  }

  render() {
    return (
      <section className="section parallax">
        <div className="container">
          <CompaniesForm
            data={this.state.data}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}

          />
        </div>

      </section>
    )
  }
}


export default CompaniesNew
