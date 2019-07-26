import React from 'react'


const CompaniesForm = ({ data, handleChange, handleSubmit }) => (
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


    <hr />

    <div className="field">
      <label className="label">Street</label>
      <div className="control">
        <input
          className="input"
          name="street"
          placeholder="street"
          onChange={handleChange}
          value={data.street || ''}
        />
      </div>
    </div>

    <div className="field">
      <label className="label">Number</label>
      <div className="control">
        <input
          className="input"
          name="number"
          placeholder="number"
          onChange={handleChange}
          value={data.number || ''}
        />
      </div>
    </div>

    <div className="field">
      <label className="label">Postcode</label>
      <div className="control">
        <input
          className="input"
          name="postcode"
          placeholder="postcode"
          onChange={handleChange}
          value={data.postcode || ''}
        />
      </div>
    </div>

    <div className="field">
      <label className="label">City</label>
      <div className="control">
        <input
          className="input"
          name="city"
          placeholder="city"
          onChange={handleChange}
          value={data.city || ''}
        />
      </div>
    </div>



    <hr />

    

    <div className="field">
      <label className="label">Image</label>
      <div className="control">
        <input
          className="input"
          name="image"
          placeholder="Image"
          onChange={handleChange}
          value={data.image || ''}
        />
      </div>
    </div>
    <button type="submit" className="button is-info">Submit</button>
  </form>
)


export default CompaniesForm
