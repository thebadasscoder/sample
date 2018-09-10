import React, { Component } from 'react';
import css from '../css/app.css';
import db from '../../backend/db.js';

class Articles extends Component{
	constructor(){
		super();
		this.state = {
			allPosts: [], database:db
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
				return(
					<div key={indx}>
						<li key={indx}>
							<ul className="news">
								<a href={val.url} key={indx}>
								<h4 key={indx}>{val.title}</h4>
								</a>
							</ul>
							<button type="button" className="btn btn-primary btn-sm" onClick={(e)=>this.handleClick(e, val.title, val.url)}
							>Save it for later</button>
						</li>
					</div>
				)
			})
			this.setState({allPosts: posts})
		})
	}
	handleClick(e, title, url){
		e.preventDefault();
		// Once clicked it will push both the title and link to the database created in the backend folder 
		this.state.database.saved.push(title, url)

		alert('Awesome! It Saved.')

		//Open up the dev tools to see the items saved once clicked
		console.log(this.state.database, 'Database')
		console.log(this.state.database.saved, 'Saved items!')
	}
	render(){
		return(
			<div>
			<h1 className="heading">Latest News</h1>
			<center>{this.state.allPosts}</center>
			</div>

		)
	}
}

export default Articles;
