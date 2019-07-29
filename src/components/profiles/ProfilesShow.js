import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class ProfilesShow extends React.Component {
  constructor() {
    super()

    this.state = { user: null }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    axios.get(`/api/users/${this.props.match.params.id}`)
      .then(res => this.setState({ user: res.data }))
      .catch(err => console.log(err))
  }

  handleChange(e) {
    this.setState({ comment: { text: e.target.value } })
  }

  handleSubmit(e) {
    e.preventDefault()

    axios.post(`/api/users/${this.props.match.params.id}/posts`, this.state.post, {
      headers: { 'Authorization': `${Auth.getToken()}` }
    })
      .then(() => this.getData())
      .catch(err => console.log(err))
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
                <div className="comment">
                  {user.posts.map(post =>
                    <div key={post.id}>
                      <p >{post.content}</p>
                    <p className="date">{post.created_at}</p>
                    </div>
                  )}
              </div>
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







                {/* <div>
                  {user.post.postcomments.map(postcomment =>
                    <div key={postcomment.id}>
                      <p >{postcomment.content}</p>

                    </div>

                  )}

                // </div> */}

                </div>
              </div>
            </div>



      </main>
    )
  }
}

export default ProfilesShow
