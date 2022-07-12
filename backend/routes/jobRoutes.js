const express = require('express');
const router = express.Router();
const { getJobs, getJob } = require('../controllers/jobController');

const { protect } = require('../middleware/authMiddleware');

router.get('/', protect, getJobs);

router.get('/:id', protect, getJob);

module.exports = router;
