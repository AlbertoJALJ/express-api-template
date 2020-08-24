import mongoose from '../utils/db_connection'
const schema = mongoose.Schema

const User = new Schema({
    username : {
        type: String,
        required : true
    },
    email : {
        type: String,
        required : true
    },
    password : {
        type: String,
        required: true
    },
    roles: [{
        type: schema.types.ObjectId,
        ref: 'Role',
        required: true
    }]
})
module.exports = mongoose.model('User', User)