const router = require('express').Router();
const demoClassController = require('../controllers/demoClassController');
const { validateOpenRequest } = require('../auth/request-validation');


router.post('/demoClass', validateOpenRequest, demoClassController.createNewDemoClass);
// router.get('/courses', validateOpenRequest, courseController.getAllCourses);
router.put('/demoClass/:id', validateOpenRequest, demoClassController.updateDemoClass);
router.delete('/demoClass/:id', validateOpenRequest, demoClassController.deleteDemoClass);


module.exports = router;