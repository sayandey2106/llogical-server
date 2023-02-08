const router = require('express').Router();
const demoClassController = require('../controllers/demoClassController');
const { validateOpenRequest } = require('../auth/request-validation');


router.post('/demoClass', validateOpenRequest, demoClassController.createNewDemoClass);
// router.get('/courses', validateOpenRequest, authoriseAdminRoutes, courseController.getAllCourses);
// router.put('/courses/:id', validateOpenRequest, authoriseAdminRoutes, courseController.modifyCourse);
// router.delete('/courses/:id', validateOpenRequest, authoriseAdminRoutes, courseController.removeCourse);


module.exports = router;