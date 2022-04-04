const express = require('express')
const PageController = require('./controllers/PageController')
const InterestController = require('./controllers/InterestController')
const router = express.Router()

// Controllers
const pageController = new PageController()
const interestController = new InterestController()

// Routes
router.get('/', pageController.renderHome)
router.get('/interest-form', interestController.renderInterest)
router.post('/interest-form', interestController.renderTotalInterest)

router.get('*', pageController.renderNotFound)

module.exports = router
