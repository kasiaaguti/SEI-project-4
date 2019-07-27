import React from 'react'
import mapboxgl from 'mapbox-gl'
import MarkersMap from './MarkersMap'

// mapboxgl.accessToken = process.env.MAPBOX

mapboxgl.accessToken = process.env.MAPBOX

class Map extends React.Component {
  constructor() {
    super()
    this.markers = []
    this.number = 1
  }

  componentDidMount() {
    this.map = new mapboxgl.Map({
      container: this.mapDiv,
      style: 'mapbox://styles/mapbox/streets-v10',
      zoom: 5,
      center: [21.0067265, 52.2319237]
    })
    this.map.scrollZoom.disable()


    this.props.markers.map(point => {

      const el = document.createElement('div')
      el.className = 'marker'
      return new mapboxgl.Marker()
        .setLngLat({ lat: point.lat, lng: point.long })
        .addTo(this.map)
        .setPopup(new mapboxgl.Popup({ offset: 25 })
          .setHTML(`
            <main>

              <h1 className="title is-5">${point.name}</h1>

              <div style="background-image: url('${point.image}'); height: 120px; min-width: 150px; background-repeat: no-repeat; background-size: cover; background-position: center;"></div>

              <button className="popupbutton "> <a href="/companies/${point._id}" className="subtitle is-6 is-link popuptext" target="_blank" rel="noopener noreferrer">Reviews & edit</a> </button>

            </main>
          `))
    })
  }

  render() {
    return (

      <div className="map" ref={el => this.mapDiv = el}/>

    )
  }


}

export default Map
