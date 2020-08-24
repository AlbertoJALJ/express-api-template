import mongoose from '../utils/db_connection'
const schema = mongoose.Schema

const Role = new Schema({
    name : {
        type: String,
        required : true
    },
    description : {
        type: String,
        required : true
    }
})
module.exports = mongoose.model('Role', Role)