const express = require('express');
const healthCheckRoutes = require('./healthcheckRoutes');
const manageUserRoutes = require('./manageUserRoutes');
const userRoutes = require('./userRoutes');
const authRoutes = require('./authRoutes');
const testRoutes = require('./testRoutes');
const courseRoutes = require('./courseRoutes');
const demoClassRoutes = require('./demoClassRoute');
const mockTestRoutes = require('./mockTestRoutes');
const ContactRoutes = require('./contactRoutes')
const zoomRoutes = require('./zoomRoute')
const router = express.Router();

router.use(healthCheckRoutes);
router.use(authRoutes);
router.use(testRoutes);
router.use(courseRoutes);
router.use(manageUserRoutes);
router.use(demoClassRoutes);
router.use(userRoutes)
router.use(mockTestRoutes)
router.use(ContactRoutes)
router.use(zoomRoutes);

module.exports = router;