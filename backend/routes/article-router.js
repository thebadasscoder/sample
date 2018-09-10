const express = require('express');
const articleRouter = express.Router();
const article = require('../models').Article;

// This will handle any routes going to localhost:8080/api/article/*

const getArticles = (req,res)=>{
	// article.findAll()
	// .then((data)=>{
	// 	console.log(data, "<==== this is the data")
	// })
	// .catch((error)=>{
	// 	res.sendStatus(500);
	// })
	res.send('Hello There!')
}

articleRouter.route('/')
	.get(getArticles)

module.exports = articleRouter;