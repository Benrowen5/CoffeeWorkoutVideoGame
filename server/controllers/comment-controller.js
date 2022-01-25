const { User, Comment, Game } = require('../models');

const commentController = {
    // add comment to game
    addComment({params, body }, res) {
        Comment.create(body)
            .then(({ _id }) => {
                return Game.findOneAndUpdate(
                    { _id: params.gameId},
                    { $push: { comments: _id } },
                    { new: true }
                );
            })
            .then(dbGameData => {
                if(!dbGameData) {
                    res.status(404).json({ message: 'No game found with this ID.'});
                    return;
                }
                res.json(dbGameData);
            })
            .catch(err => res.status(400).json(err));
    },
    // Get an individual comment
    getCommentById({params}, res) {
        Comment.findOne({ _id: params.commentId })
            .then(dbCommentData => res.json(dbCommentData))
            .catch(err => res.status(400).json(err));
    },

    // delete comment from game
    deleteComment({params}, res) {
        Comment.findOneAndDelete({ _id: params.commentId })
            .then(deleteComment => {
                if(!deleteComment) {
                    return res.status(400).json({ message: 'No comment found with this ID.'});
                }
                return Game.findOneAndUpdate(
                    { _id: params.gameId },
                    { $pull: { comments: params.commentId } },
                    { new: true }
                );
            })
            .then(dbGameData => {
                if(!dbGamaData) {
                    return res.status(404).json({ message: 'No game found with this ID.'});
                    return;
                }
                res.json(dbGameData);
            })
            .catch(err => res.status(400).json(err));
    },
    // add reply
    addReply({params, body}, res) {
        Comment.findOneAndUpdate(
            { _id: params.commentId },
            { $push: { replies: body } },
            { new: true}
        )
            .then(dbGameData => {
                if(!dbGameData) {
                    res.status(404).json({ message: 'No Game found with this ID.'});
                    return;
                }
            })
            .catch(err => res.status(400).json(err));
    },
    // delete reply
    deleteReply({params}, res) {
        Comment.findOneAndUpdate(
            { _id: params.commentId },
            { $pull: { replies: { replyId: params.replyId } } },
            { new: true }
        )
        .then(dbGameData => res.json(dbGameData))
        .catch(err => res.status(400).json(err));
    }
}

module.exports = commentController;