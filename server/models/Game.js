const { Schema, model, Types } = require('mongoose');
const GameSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true
        },
        genre: {
            type: String,
            required: true,
            trim: true
        },
        description: {
            type: String,
            required: true,
            trim: true,
            maxlength: 256
        },
        image: {
            type: String,
        },
        comments: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Comment'
            }
        ]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }  
);

// create Game model using gameSchema
const Game = model('Game', GameSchema);

module.exports = Game;