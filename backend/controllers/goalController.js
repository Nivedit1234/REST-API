//to avoid using try-catch and to only use our errorHandler install async-handler

const asyncHandler = require('express-async-handler');
const Goal = require('../models/goalModel');

//@desc  Get goals
//@route GET api/goals
//@access Private after adding authentication
const getGoal = asyncHandler(async (req, res) => {
  //res.status(200).json({ message: 'Get Goals' });
  const goals = await Goal.find();
  res.status(200).json({ goals });
});

//@desc  Set goals
//@route   POST api/goals
//@access Private after adding authentication

const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error('Please add a text field'); //using express-error-handler
  }
  const goal = await Goal.create({
    text: req.body.text,
  });
  res.json({ goal });
});

//@desc Update goals
//@route PUT api/goals/id
//@access Private after adding authentication
const updateGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(400);
    throw new Error('Goal not found');
  }

  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  // res.status(200).json({ messsage: `Update Goals ${req.params.id}` })
  res.status(200).json({ updatedGoal });
});

//@desc Delete goals
//@route DELETE api/goals/id
//@access Private after adding authentication
const deleteGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  // goalToBeDeleted
  if (!goal) {
    throw new Error('Goal not found');
  }
  goalToBeDeleted = await Goal.remove(req.body.params);
  // res.json({ message: `Delete Goals ${req.params.id}` });
  res.json({ goalToBeDeleted });
});

module.exports = { getGoal, setGoal, updateGoal, deleteGoal };
