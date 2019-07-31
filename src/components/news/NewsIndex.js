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
    axios.get('https://newsapi.org/v2/everything?q=energy&apiKey=0fc2226545f9457c99378cfe53b9a8e0',
      { headers: {
        'Authorization': process.env.NEWS

      }
      })

      .then(res => this.setState({ news: res.data.articles },  () => console.log(this.state.news) ))
      .catch(err => console.log(err))
  }



  render() {
    if (!this.state.news) return null
    return  (
      <section className="section index-page">
        <div className="container">
          <div className="columns is-mobile is-multiline">

            {this.state.news.map((article, i) => (
              <div key={i} className="column is-one-quarter-desktop is-one-third-tablet is-half-mobile">
                <div className="card card-custom">
                  <div className="card-header">
                    <h1 className="card-header-title">{article.title}</h1>
                  </div>

                  <figure className="article-iamge">
                    <img src={article.urlToImage} alt={name} />
                  </figure>
                  <br/>


                  <div className="card-content">
                    <h3 className="subtitle is-6"><i>
                      {article.author}</i></h3>
                    <p>{article.description} </p>
                    <a href={article.url} target="blank">Go to the article</a>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
}



export default NewsIndex
//
//
    //
    //
    //
        // )
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
