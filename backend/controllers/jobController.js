const asyncHandler = require('express-async-handler');
const url = require('url');
const axios = require('axios');

const User = require('../models/userModel');

// @desc Get list of jobs
// @route /api/jobs
// @access Private
const getJobs = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error('User not found');
  }

  try {
    const params = new url.URLSearchParams(req.query, req.query.page);

    const jobs = await axios.get(
      `http://dev3.dansmultipro.co.id/api/recruitment/positions.json?${params}`
    );

    res.status(200).json(jobs.data);
  } catch (error) {
    console.log(error);
  }
});

// @desc Get job detail
// @route /api/jobs/:id
// @access Private
const getJob = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error('User not found');
  }

  try {
    const jobs = await axios.get(
      `http://dev3.dansmultipro.co.id/api/recruitment/positions/${req.params.id}`
    );

    res.status(200).json(jobs.data);
  } catch (error) {
    console.log(error);
  }
});

module.exports = {
  getJobs,
  getJob,
};
