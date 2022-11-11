const router = require('express').Router();

const {
  getAllThought,
  getThoughtById,
  addThought,
  updateThought,
  addReaction,
  removeReaction,
  deleteThought,
} = require('../../controllers/thought-controller');

router.route('/').get(getAllThought);

// /api/<userId>
router.route('/:userId').post(addThought);

// /api/thoughts/<userId>/<thoughtId>
router
  .route('/:thoughtId')
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

router.route('/:thoughtId/reactions').post(addReaction);

router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

module.exports = router;
