const router = require('express').Router();

// imported from controller functions.
const {
  getAllThought,
  getThoughtById,
  addThought,
  updateThought,
  addReaction,
  removeReaction,
  deleteThought,
} = require('../../controllers/thought-controller');

// Set up route to retrieve all thoughts data at /api/thoughts
router.route('/').get(getAllThought);

// Set up route to CREATE an thought data at /api/thoughts/:userId
router.route('/:userId').post(addThought);

// Set up route to retrieve thought, UPDATE and DELETE by selected thought Id /api/thoughts/:userId/:thoughtId
router
  .route('/:thoughtId')
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

// Set up route to add reaction to the specific thought at /api/thought/:thoughtId/reactions
router.route('/:thoughtId/reactions').post(addReaction);

// Set up route to DELETE a reaction from selected thought at /api/thought/:thoughtId/reactions/:reactionId
router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

module.exports = router;
