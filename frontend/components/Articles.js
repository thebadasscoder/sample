import React, { Component } from 'react';

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
				return(<li key={indx}><a href={val.url} key={indx}><h4 key={indx}>{val.title}</h4></a></li>)
			})
			this.setState({allPosts: posts})
		})
	}
	render(){
		return(
			<div>
			<center><h1>Articles</h1></center>
			<center>{this.state.allPosts}</center>
			</div>

		)
	}
}

export default Articles;
