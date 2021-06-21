const {Router} = require('express')
const router = Router()

const articlesControl = require('../controllers/articles.controllers')
//Realizaciín del CRUD
router.get('/articles', articlesControl.getArticles)

module.exports = router