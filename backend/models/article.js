'use strict';
module.exports = (sequelize, DataTypes) => {
  const Article = sequelize.define('Article', {
    title: DataTypes.STRING,
    link: DataTypes.STRING,
    saved: DataTypes.JSON
  }, {});
  Article.associate = function(models) {
    // associations can be defined here
  };
  return Article;
};