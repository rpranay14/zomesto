const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    userRoles: {
        admin: {
            type: Number
        },
        restroOwner: {
            type: Number
        },
        user: {
            type: Number
        }
    }
})
const user = mongoose.model('user', userSchema);
module.exports = user;