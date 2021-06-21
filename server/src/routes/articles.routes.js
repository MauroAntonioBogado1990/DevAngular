const {Router} = require('express');
const { route } = require('../app');
const router = Router()

const articlesControl = require('../controllers/articles.controllers.js')
//Realizaciín del CRUD
router.get('/', articlesControl.getArticles);
router.post('/', articlesControl.createArticle);
router.get('/:id',articlesControl.getArticle);
router.put('/:id',articlesControl.editArticle);
router.delete('/:id',articlesControl.deleteArticle);
module.exports = router