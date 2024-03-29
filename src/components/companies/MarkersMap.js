import React from 'react'
import mapboxgl from 'mapbox-gl'
import axios from 'axios'
import Map from './Map'



mapboxgl.accessToken = process.env.MAPBOX





class MarkersMap extends React.Component {
  constructor() {
    super()
    this.state = { points: null }

  }

  componentDidMount(){
    this.getCompaniesList()
  }

  getCompaniesList() {
    axios.get('/api/companies')
      .then(res => {
        this.setState({ points: res.data })
      })
      .catch(err => console.log(err))
  }



  render() {
    if (!this.state.points) return null
    return (
      <main>
        <Map
          center={this.mapCenter}
          markers={this.state.points}

        />
      </main>
    )
  }
}

export default MarkersMap
