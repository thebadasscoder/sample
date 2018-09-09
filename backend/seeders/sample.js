const articleSeed = require('./article-seed');
var db = require('../models')

db.sequelize.sync({force:true})
	.then(()=>{
		articleSeed();
});