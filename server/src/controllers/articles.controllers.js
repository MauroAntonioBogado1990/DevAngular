const articlesControl = {}
//llamada a la DB
const Article = require('../models/Article')

articlesControl.getArticles = async (req,res) => {
    const articles = await Article.find()
    res.json(articles)
}
articlesControl.createArticle = async(req,res) => {
    const newArticle = new Article(req.body)
    
    await newArticle.save()
    res.send({message : 'Article created'})
}
articlesControl.getArticle = async (req,res) =>  {
    const article = await Article.findById(req.params.id)
    res.send(article)
}
articlesControl.editArticle = async (req,res) => {
    await Article.findByIdAndUpdate(req.params.id, req.body)
    res.json({status: 'Article updated'})
}
articlesControl.deleteArticle = async (req,res) => {
    await Article.findByIdAndDelete(req.params.id)
    res.json({status : 'Article Deleted'}) 
}

module.exports = articlesControl;