import React from 'react'
import mapboxgl from 'mapbox-gl'
import axios from 'axios'
import Map from './Map'



// mapboxgl.accessToken = process.env.MAPBOX

mapboxgl.accessToken = 'pk.eyJ1Ijoia2FzaWFhZ3V0aSIsImEiOiJjanlrMHE2b2IwNjlrM2luY2I5dzluNDk5In0.lQdefpodFluw02DhzxoR0Q'



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
        this.setState({ points: res.data },() => console.log(this.state.points))
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
