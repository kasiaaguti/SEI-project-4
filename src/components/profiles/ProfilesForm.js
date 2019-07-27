import React from 'react'

const ProfileForm = ({ handleChange, handleSubmit, data }) => (


  <form onSubmit={handleSubmit}>

    <div className="field">
      <label className="label">Name</label>
      <div className="control">
        <input
          className="input"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          value={data.name || ''}
        />
      </div>
    </div>

    <div className="field">
      <label className="label">Username</label>
      <div className="control">
        <input
          className="input"
          name="username"
          placeholder="username"
          onChange={handleChange}
          value={data.username || ''}
        />
      </div>
    </div>


    <hr />

    <div className="field">
      <label className="label">Email</label>
      <div className="control">
        <input
          className="input"
          name="email"
          placeholder="email"
          onChange={handleChange}
          value={data.email || ''}
        />
      </div>
    </div>


        <div className="field">
          <label className="label">Bio</label>
          <div className="control">
            <input
              className="input"
              name="bio"
              placeholder="bio"
              onChange={handleChange}
              value={data.bio || ''}
            />
          </div>
        </div>


    <div className="field">
      <label className="label">Password</label>
      <div className="control">
        <input
          className="input"
          name="password"
          placeholder="password"
          onChange={handleChange}
          value={data.password|| ''}
        />
      </div>
    </div>

    <div className="field">
      <label className="label">Password confirmation</label>
      <div className="control">
        <input
          className="input"
          name="password confirmation"
          placeholder="password confirmation"
          onChange={handleChange}
          value={data.password_confirmation || ''}
        />
      </div>
    </div>



    <hr />




    <button type="submit" className="button is-info">Submit</button>
  </form>
)



export default ProfileForm
