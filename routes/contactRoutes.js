const router = require('express').Router()
const Contactcontroller = require('../controllers/contactController')
const { validateOpenRequest } = require('../auth/request-validation');

router.post('/conatct',validateOpenRequest,Contactcontroller.contact);

module.exports  = router