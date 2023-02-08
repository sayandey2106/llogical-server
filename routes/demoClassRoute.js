const router = require('express').Router();
const demoClassController = require('../controllers/demoClassController');
const { validateOpenRequest } = require('../auth/request-validation');


router.post('/demoClass', validateOpenRequest, demoClassController.createNewDemoClass);
router.get('/demoClass', validateOpenRequest, demoClassController.getAllDemoClass);
router.put('/demoClass/:id', validateOpenRequest, demoClassController.updateDemoClass);
router.delete('/demoClass/:id', validateOpenRequest, demoClassController.deleteDemoClass);
router.get('/demoClass/:id', validateOpenRequest, demoClassController.getDemoClassById);

module.exports = router;