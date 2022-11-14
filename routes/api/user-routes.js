const router = require('express').Router();

// imported from controller functions.
const {
  getAllUser,
  getUserById,
  createUser,
  updateUser,
  addFriend,
  removeFriend,
  deleteUser,
} = require('../../controllers/user-controller');

// Set up route retrieve all users data and Post user at /api/users
router.route('/').get(getAllUser).post(createUser);

// Set up route to GET one user data, update PUT user, and DELETE at /api/users/:userId
router.route('/:id').get(getUserById).put(updateUser).delete(deleteUser);

// Set up route to ADD friend and DELETE to/from Friends list at /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);

module.exports = router;
