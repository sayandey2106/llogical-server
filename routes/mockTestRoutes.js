const router = require('express').Router();
const mockTestController = require("../controllers/mockTestController")
const { validateOpenRequest } = require('../auth/request-validation');


router.post('/mockTest',validateOpenRequest,mockTestController.createMockTest);
router.get('/mockTest', validateOpenRequest , mockTestController.getAllMockTest);
router.put('/mockTest/:id',validateOpenRequest, mockTestController.updateMockTest);
router.delete('/mockTest/:id',validateOpenRequest, mockTestController.deleteMockTest);
router.get('/mockTest/:id',validateOpenRequest, mockTestController.getMockTestById);

module.exports=router
