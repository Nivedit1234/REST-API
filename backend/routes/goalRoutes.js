const express = require('express');
const router = express.Router();
const {
  getGoal,
  setGoal,
  updateGoal,
  deleteGoal,
} = require('../controllers/goalController');

const protect = require('../middleware/authMiddleware');

router.route('/').get(protect, getGoal).post(protect, setGoal);
router.route('/:id').put(protect, updateGoal).delete(protect, deleteGoal);

// router.get('/', getGoals);
//   res.send('Get Goals');
// res.status(200).json({ message: 'Get Goals' });
//);
// router.post('/', setGoal);
// router.put('/:id', updateGoal);
// router.delete('/:id', deleteGoal);
module.exports = router;
