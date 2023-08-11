//to avoid using try-catch and to only use our errorHandler install async-handler

const asyncHandler = require('express-async-handler');

//@desc  Get goals
//@route GET api/goals
//@access Private after adding authentication
const getGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Get Goals' });
});

//@desc  Set goals
//@route   POST api/goals
//@access Private after adding authentication

const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error('Please add a text field'); //using express-error-handler
  }
});

//@desc Update goals
//@route PUT api/goals/id
//@access Private after adding authentication
const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ messsage: `Update Goals ${req.params.id}` });
});

//@desc Delete goals
//@route DELETE api/goals/id
//@access Private after adding authentication
const deleteGoal = asyncHandler(async (req, res) => {
  res.json({ message: `Delete Goals ${req.params.id}` });
});

module.exports = { getGoal, setGoal, updateGoal, deleteGoal };
