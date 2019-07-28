import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Auth from '../../lib/Auth'

class CompaniesShow extends React.Component {
  constructor() {
    super()

    this.state = { company: null,  comment: {}, employees: {}  }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleCommentDelete = this.handleCommentDelete.bind(this)
  }


  componentDidMount() {
    this.getData()

  }

  getData() {
    axios.get(`/api/companies/${this.props.match.params.id}`)
      .then(res => this.setState({ company: res.data, comment: {}, employees: {} }))
      .catch(err => console.log(err))
  }


  handleChange(e) {
    this.setState({ comment: { text: e.target.value } })
  }

  handleSubmit(e) {
    e.preventDefault()

    axios.post(`/api/companies/${this.props.match.params.id}/comments`, this.state.comment, {
      headers: { 'Authorization': `${Auth.getToken()}` }
    })
      .then(() => this.getData())
      .catch(err => console.log(err))
  }

  handleCommentDelete(comment) {
    axios.delete(`/api/companies/${this.props.match.params.id}/comments/${comment._id}`, {
      headers: { 'Authorization': Auth.getToken() }
    })
      .then(() => this.getData())
      .catch(err => console.log(err))
  }

  isOwner() {
    return Auth.getPayload().sub === this.state.location.user
  }

  isOwnerComment(comment) {
    return Auth.getPayload().sub === comment.user
  }



  render() {
    if (!this.state.company) return null
    const { company } =  this.state
    return (
      <main className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-half">
              <h2 className="title">{company.name}</h2>
            </div>
            <div className="column is-half">
              <Link
                className="button button-right"
                to={`/companies/${company.id}/edit`}
              >
           Edit
              </Link>
            </div>
          </div>
          <hr />

          <div className="columns">
            <div className="column is-half">
              <figure className="image">
                <img src={company.image} alt={company.name} />
              </figure>
              <br />

              <h4 className="title is-4">About</h4>
              <p>{company.profile}</p>
              <br />
              <h4 className="title is-4">Website</h4>
              <a href="${company.website}">{company.website}</a>


              <br />
              <br />
              <h4 className="title is-4">Emloyees</h4>
              <p>{company.employees.user}</p>

    </div>


              <div className="column is-half">

                <form onSubmit={this.handleSubmit}>
                  <div className="field">
                    <div className="control">
                      <textarea
                        className="reviewtexarea"
                        placeholder="Review"
                        onChange={this.handleChange}
                        value={this.state.comment.text || ''}
                      >
                      </textarea>
                    </div>
                  </div>
                  <button className="button" type="submit">Submit comment</button>
                </form>

                {company.comments.map(comment => (
                  <div key={comment.id}>
                    <div className="card-content">
                      {comment.text}
                    </div>

                    <button
                      className="button"
                      onClick={() => this.handleCommentDelete(comment)}
                    >Delete
                    </button>

                  </div>
                ))}



              </div>





          </div>



        </div>




      </main>
    )
  }
}


export default CompaniesShow



//
// {company.employees.map(user => (
//   <div key={user.id}>
