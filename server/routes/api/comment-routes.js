const router = require('express').Router();
const { addComment, getCommentById, deleteComment, addReply, deleteReply } = require('../../controllers/comment-controller');

// create new comment on game (/api/comments/:gameId)
router.route('/:gameId')
    .post(addComment);

// get individual comment (/api/comments/:gameId/:commentId)
router.route('/:gameId/:commentId')
    .get(getCommentById);

// create reply (/api/comments/:gameId/:commentId)
router.route('/:gameId/:commentId')
    .post(addReply)
    .delete(deleteComment);

// delete reply /api/comments/:gameId/:commentId/:replyId
router.route('/:gameId/:commentId/:replyId')
    .delete(deleteReply);

module.exports = router;