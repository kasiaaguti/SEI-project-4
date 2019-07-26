import React from 'react'
import axios from 'axios'
import CompaniesForm from './CompaniesForm'

class CompaniesNew extends React.Component {
  constructor() {
    super()

    this.state = { data: {} }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.onRadioChange = this.onRadioChange.bind(this)
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



  handleSubmit(e) {
    e.preventDefault()

    axios.post('/api/companies', this.state.data,{
    })
      .then(() => this.props.history.push('/Companies'))
      .catch(err => console.log(err.response))
  }

  render() {
    return (
      <section className="section">
        <div className="container">
          <CompaniesForm
            data={this.state.data}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            onRadioChange={this.onRadioChange}
          />
        </div>

      </section>
    )
  }
}


export default CompaniesNew
