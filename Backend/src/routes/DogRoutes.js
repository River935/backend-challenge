const router = require('express').Router();
const DogController = require('../controllers/DogController');
router.get('/dogs',DogController.findAll);

module.exports = router;