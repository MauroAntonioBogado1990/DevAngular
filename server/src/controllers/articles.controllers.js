const articlesControl = {}
//llamada a la DB
const Article = require('../models/Article')

articlesControl.getArticles = async (req,res) => {
    const articles = await Article.find()
    res.json(articles)
}
articlesControl.createArticle = (req,res) => {
    res.send('create articles')
}
articlesControl.getArticle = (req,res) => {}
articlesControl.editArticle = (req,res) => {}
articlesControl.deleteArticle = (req,res) => {}

module.exports = articlesControl;