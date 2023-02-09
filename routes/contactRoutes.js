const router = require('express').Router()
const Contactcontroller = require('../controllers/contactController')
const { validateOpenRequest } = require('../auth/request-validation');

router.post('/contact', validateOpenRequest, Contactcontroller.contact);
router.get('/contact', validateOpenRequest, Contactcontroller.getallcontact)
module.exports = router