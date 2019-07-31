import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Auth from '../../lib/Auth'

class ProfilesShow extends React.Component {
  constructor() {
    super()

    this.state = { user: null }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleSubmitComment = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    this.getData()
  }

  getData() {
    axios.get(`/api/users/${this.props.match.params.id}`)
      .then(res => this.setState({ user: res.data }))
      .catch(err => console.log(err))
  }

  handleChange(e) {
    const post = e.target.value
    this.setState({ post })
  }

  handleSubmit(e) {
    e.preventDefault()
    const post = { content: this.state.post }
    axios.post(`/api/users/${this.props.match.params.id}/posts`, post, {
      headers: { 'Authorization': `${Auth.getToken()}` }
    })
      .then(() => this.getData())
      .catch(err => console.log(err))
  }

  handleSubmitComment(e) {
    e.preventDefault()
    const postcomment = { content: this.state.postcomment }
    axios.post(`/api/users/${this.props.match.params.id}/posts`, postcomment, {
      headers: { 'Authorization': `${Auth.getToken()}` }
    })
      .then(() => this.getData())
      .catch(err => console.log(err))
  }


  isOwner() {
    return Auth.getPayload().sub === parseInt(this.props.match.params.id)
  }



  render() {
    if (!this.state.user ) return null
    const { user } =  this.state
    console.log(user)

    return (
      <main className="section show-page">

        <div className="container">
          <h2 className="title">{user.name}</h2>
          <hr />
          <div className="columns">
            <div className="column is-half">
              <figure className="image user-img">
                <img src={user.image} alt={user.name} />
              </figure>
              <br />

              <h4 className="title is-4">About me</h4>
              <p>{user.bio}</p>
              <br />

              <h4 className="title is-4">I work at</h4>
              <div className="employees">
                {user.companies.map(company =>
                  <div className="employee-card" key={company.id}>
                    <p> <Link to={`/companies/${company.id}`}>  {company.name} <img src={company.image} alt="company-image" /> </Link></p>
                  </div>
                )}
              </div>
            </div>
            <div className="column is-half">
              {this.isOwner() &&
                <form onSubmit={this.handleSubmit}>
                  <div className="field">
                    <div className="control">
                      <textarea
                        className="reviewtexarea"
                        placeholder="Type your post here"
                        onChange={this.handleChange}
                        value={this.state.post || ''}
                      >
                      </textarea>
                    </div>
                  </div>
                  <button className="button" type="submit">Post</button>
                </form>
              }
              <div>
                {user.posts.map(post =>
                  <div key={post.id} className="comment">
                    <p >{post.content}</p>
                    <p className="date">{post.created_at}</p>
                    {post.comments.map(comment => (
                      <div key={comment.id}>
                        <p>{comment.content}</p>
                        <p>{comment.user.username}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <form onSubmit={this.handleSubmitComment}>
                <div className="field">
                  <div className="control">
                    <textarea
                      className="reviewtexarea"
                      placeholder="Type your comment here"
                      onChange={this.handleChange}
                      value={this.state.postcomment || ''}
                    >
                    </textarea>
                  </div>
                </div>
                <button className="button" type="submit">comment post</button>
              </form>

            </div>
          </div>
        </div>



      </main>
    )
  }
}

export default ProfilesShow
