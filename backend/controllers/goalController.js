//to avoid using try-catch and to only use our errorHandler install async-handler

const asyncHandler = require('express-async-handler');
const Goal = require('../models/goalModel');
const User = require('../models/userModel');

//@desc  Get goals
//@route GET api/goals
//@access Private after adding authentication
const getGoal = asyncHandler(async (req, res) => {
  //res.status(200).json({ message: 'Get Goals' });
  console.log(req.user.id);
  //console.log(typeof req.user.id);
  const goals = await Goal.find({ user: req.user.id });
  res.status(200).json({ goals, id: req.user.id });
  //res.status(200).json({ goals });
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
    user: req.user.id,
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

  //Check for user
  const user = User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error('User not found');
  }

  const goalUserId = goal.user;
  const userId = req.user.id;

  //Make sure logged in user matches goal user
  if (goalUserId != userId) {
    res.status(401);
    throw new Error('User not authorized');
    console.log('user id did not match with goal user');
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

  //Check for user
  //const user1 = User.findById(req.user.id);

  const user = User.findById(req.user.id);

  //const user = User.findOne(req.user.id);
  console.log(user);
  console.log(user.name, user._id, user.id);
  if (!user) {
    res.status(401);
    throw new Error('User not found');
    //res.json({ msg: 'hello world' });
  }

  //Make sure logged in user matches goal user

  console.log(goal.user + '     ' + req.user.id);
  console.log(user._id + '   ' + user.id);
  console.log(goal.id);

  const goalUserId = goal.user;
  //const userId = user._id;
  const userId = req.user.id;

  if (goalUserId != userId) {
    res.status(401);
    throw new Error('User not authorized');
    console.log('user id did not match with goal user');
  }

  goalToBeDeleted = await Goal.findByIdAndRemove({ _id: `${req.params.id}` });
  // res.json({ message: `Delete Goals ${req.params.id}` });
  res.json({ goalToBeDeleted });
  //res.json('helloword');
});

module.exports = { getGoal, setGoal, updateGoal, deleteGoal };
