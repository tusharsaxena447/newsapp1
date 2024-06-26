import React, { Component } from 'react'
import Gridcard from './Gridcard'
// import news from './news.json'
import PropTypes from 'prop-types'


export default class Newsitems extends Component {
  
  static defaultProps = {
    category : "general",
    country : "us"
  }

  static propTypes = {
    category : PropTypes.string,
    country : PropTypes.string
  }
  
  constructor(){
    super();    
    this.state = {
      artic : [],
      loading : false 
    }
    
  }
  async componentDidMount(){
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=71163756e59f4b51bdb1135e1806500c&pageSize=30`
    this.setState({loading:true})
    let data = await fetch(url)
    let parsedData = await data.json()
    this.setState({artic : parsedData.articles})  
    this.setState({loading : false})
    }

  render() {
    let imageload
    //  const newsfile = news.articles
    if (this.state.loading === true){
      imageload = <img className='m-auto p-28' src="https://cdn.dribbble.com/users/2973561/screenshots/5757826/media/221d6bfc1960ab98a7585fcc2a4d0181.gif" alt="" />
      }
      else{

      }
    
    return (
        <>
      <div className=' flex justify-center flex-row flex-wrap'>
      {imageload}
        {this.state.artic.map((element) => 
       { return <Gridcard key={element.url} title = {element.title?element.title : "Title Not Available"} description = {element.description?element.description : "DESCRIPTION NOT AVAILABLE"} imageUrl = {element.urlToImage?element.urlToImage :"https://us.123rf.com/450wm/pavelstasevich/pavelstasevich1811/pavelstasevich181101028/112815904-no-image-available-icon-flat-vector-illustration.jpg?ver=6"} url={element.url}/>}
    )}
      </div>
      </>
    )
  }
}

