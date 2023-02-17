const router = require('express').Router();
const zoomController = require('../controllers/zoomController')
const { validateOpenRequest } = require('../auth/request-validation');

router.get('/zoom',validateOpenRequest,zoomController.createZoomMeeting);


module.exports=router;