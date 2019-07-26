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

  handleSubmit(e) {
    e.preventDefault()

    axios.put(`/api/companies/${this.props.match.params.id}`, this.state.data,{

    })
      .then(() => this.props.history.push(`/Companies/${this.props.match.params.id}`))
      .catch(err => console.log(err.response))
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
