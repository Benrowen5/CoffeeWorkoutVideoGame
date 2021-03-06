const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const { Game } = require('./Game');
const UserSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            trim: true,
            match: [/.+@.+\..+/, 'Must match an email address!']
        },
        password: {
            type: String,
            required: true,
            minlength: 5
        },
        favorites: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Game'
            }
        ],
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

// hash user password
UserSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
  
    next();
  });

// method to compare and validate password for logging in
UserSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

// create the User model using the UserSchema
const User = model('User', UserSchema);

module.exports = User;