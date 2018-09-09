const Article  = require('../models').Article; 

let articleArr = [

	{
		title: 'Ex-Trump aide jailed in Russia inquiry',
		link: 'http://www.bbc.co.uk/news/world-us-canada-45455050',
		saved:{'title':'Ex-Trump aide jailed in Russia inquiry', 'link': 'http://www.bbc.co.uk/news/world-us-canada-45455050'}
	},
	{
		title: 'Apple is creating an online portal for law enforcement data requests',
		link: 'https://www.engadget.com/2018/09/07/apple-online-portal-law-enforcement-data-requests/',
		saved: {'title': 'Apple is creating an online portal for law enforcement data requests', 'link': 'https://www.engadget.com/2018/09/07/apple-online-portal-law-enforcement-data-requests/'}
	},

]

const articleSeed = () =>{
	Article.bulkCreate(articleArr)
}

module.exports = articleSeed;