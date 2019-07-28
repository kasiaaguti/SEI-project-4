import React from 'react'
import axios from 'axios'


class NewsIndex extends React.Component {
  constructor(props) {
    super(props)

    this.state = { news: null }
  }


  componentDidMount(){
    this.getNews()
  }

  getNews() {
    axios.get('https://newsapi.org/v2/everything?q=bitcoin&apiKey=0fc2226545f9457c99378cfe53b9a8e0',
      { headers: {
        'Authorization': '0fc2226545f9457c99378cfe53b9a8e0'
      }
      })

      .then(res => this.setState({ news: res.data },  () => console.log(this.state.news) ))
      .catch(err => console.log(err))
  }




  render() {


    return  (
      <div>

        <h1>kas</h1>


      <div>
        {this.props.news}
      <p>  {this.getNews()} </p> 



      </div>


      </div>







    )


  }



}







export default NewsIndex
//
//
//
// componentDidMount(){
//   axios.get('https://newsapi.org/v2/everything?q=bitcoin&apiKey=0fc2226545f9457c99378cfe53b9a8e0',
//     { headers: {
//       'Authorization': '0fc2226545f9457c99378cfe53b9a8e0'
//     }
//     })
//
//     .then(res => this.setState({ news: res.data },  () => console.log(this.state.news) ))
//     .catch(err => console.log(err))
// }
//
// render() {
// const news = this.state.news
//
//   return  (
//     <div>
//
//       <h1>kas</h1>
//
//     <div>
//       {this.props.news}
//
//       {this.state.data.map(d => <li key={d.news}>{d.news}</li>)}
//
//     </div>
//
//
//     </div>
//
//
//
//
//
//
//
//   )
//
//
// }
//
//
//
// }





// .then(res => {
// this.setState({ news: res.data }, () => console.log(this.state.news))


// "author": "David Murphy",
//    "title": "Steer Clear of Libra Cryptocurrency Scams",
//    "description": "Libra hasn’t even officially debuted on Facebook yet, but the highly anticipated cryptocurrency has already gotten a ton of interests—from scammers. In fact, it’s hard to tell who is more interested in Libra at this point: those looking to make a quick buck f…",
//    "url": "https://lifehacker.com/steer-clear-of-libra-cryptocurrency-scams-1836629236",
//    "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/s--fHe8gP1k--/c_fill,fl_progressive,g_center,h_900,q_80,w_1600/rri1pmjir9iyc4u2ter6.png",
//    "publishedAt": "2019-07-23T17:30:00Z",
//    "content": "Libra hasnt even officially debuted on Facebook yet, but the highly anticipated cryptocurrency has already gotten a ton of interestsfrom scammers. In fact, its hard to tell who is more interested in Libra at this point: those looking to make a quick buck from… [+5162 chars]"
