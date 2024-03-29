import React from 'react'
import axios from 'axios'
import CompaniesForm from './CompaniesForm'


class CompaniesEdit extends React.Component {
  constructor() {
    super()

    this.state = { data: {} }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    axios.get(`/api/companies/${this.props.match.params.id}`)
      .then(res => this.setState({ data: res.data }))
      .catch(err => console.log(err.response))
  }

  handleChange({ target: { name, value }}) {
    const data = { ...this.state.data, [name]: value }
    this.setState({ data })
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
        this.setState({ data }, () => this.updateCompany())
      })
      .catch(err => console.log(err))
  }

  updateCompany() {
    axios.put(`/api/companies/${this.props.match.params.id}`, this.state.data,{

    })
      .then(() => this.props.history.push(`/Companies/${this.props.match.params.id}`))
      .catch(err => console.log(err.response))
  }


    handleSubmit(e) {
      e.preventDefault()
      this.getAddressCoordinates()
    }

  render() {
    return(
      <section className="section">
        <div className="main">
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

export default CompaniesEdit
