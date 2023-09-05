const router = require('express').Router();
const blogController = require('../controllers/blog')

router
.post('/', blogController.create)
.get('/', blogController.readAll)
.get('/:id', blogController.readById)
.put('/:id', blogController.update)
.delete('/:id', blogController.delete)

module.exports = router