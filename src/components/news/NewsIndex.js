import React from 'react'
import axios from 'axios'


class NewsIndex extends React.Component {
  constructor() {
    super()

    this.state = { news: null }
  }

  componentDidMount(){
    this.getNews()
  }

  // gst the list of countries using the restcountries API and select the name, flat and latlng.
  getNews() {
    axios.get('https://newsapi.org/v2/everything?q=bitcoin&apiKey=0fc2226545f9457c99378cfe53b9a8e0',
      { headers: {
        'Authorization': '0fc2226545f9457c99378cfe53b9a8e0'
      }
      })


      .then(res => {
        this.setState({ news: res.data })
      })


  }


  render() {

    console.log(this.state.news)

  }




}

export default NewsIndex





// "author": "David Murphy",
//    "title": "Steer Clear of Libra Cryptocurrency Scams",
//    "description": "Libra hasn’t even officially debuted on Facebook yet, but the highly anticipated cryptocurrency has already gotten a ton of interests—from scammers. In fact, it’s hard to tell who is more interested in Libra at this point: those looking to make a quick buck f…",
//    "url": "https://lifehacker.com/steer-clear-of-libra-cryptocurrency-scams-1836629236",
//    "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/s--fHe8gP1k--/c_fill,fl_progressive,g_center,h_900,q_80,w_1600/rri1pmjir9iyc4u2ter6.png",
//    "publishedAt": "2019-07-23T17:30:00Z",
//    "content": "Libra hasnt even officially debuted on Facebook yet, but the highly anticipated cryptocurrency has already gotten a ton of interestsfrom scammers. In fact, its hard to tell who is more interested in Libra at this point: those looking to make a quick buck from… [+5162 chars]"
