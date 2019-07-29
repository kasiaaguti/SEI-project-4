import React from 'react'

import MarkersMap from '/Users/katarzynawypychewicz/development/projects/SEI-project-4/src/components/companies/MarkersMap.js'
import About from './About'

class Home extends React.Component {

  render() {

    return (
      <section className="hero is-fullheight-with-navbar">
        <div className="hero-body">
          <div className="container-custom has-text-left">
            <p className="title is-1 has-text-white title-custom">
              Polish power engineering industry
            </p>
          </div>
        </div>
        <MarkersMap />

        <About />
      </section>


    )
  }
}


export default Home


// <section className="hero is-fullheight-with-navbar">
//   <div className="hero-body">
//     <div className="container-custom has-text-centered">
//       <p className="title is-1 has-text-white has-text-centered">
//         Polish power engeneering industry
//       </p>
//
//
//
//
//     </div>
//   </div>
//
//
// </section>
