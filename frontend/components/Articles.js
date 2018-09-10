import React, { Component } from 'react';
import css from '../css/app.css'

class Articles extends Component{
	constructor(){
		super();
		this.state = {
			allPosts: []
		}
	}
	//Requesting Data from News API 
	componentDidMount(){
		fetch('https://newsapi.org/v2/top-headlines?' +'country=us&' +'apiKey=feae10d3b00e45bba76933f24a7d4c05')
		.then(results =>{
			return results.json();
		})
		.then(data =>{
			//Pulling out just the title and link 
			let posts = data.articles.map((val, indx)=>{ 
				return(<div key={indx}><li key={indx}><ul className="news"><a href={val.url} key={indx}><h4 key={indx}>{val.title}</h4></a></ul><button className="save">Save</button></li></div>)
			})
			this.setState({allPosts: posts})
		})
	}
	render(){
		return(
			<div>
			<h1>Latest News</h1>
			<center><p>{this.state.allPosts}</p></center>
			</div>

		)
	}
}

export default Articles;
