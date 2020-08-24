import mongoose from 'mongoose'
import dotenv from 'dotenv'
const db_uri = process.env.db_uri;

mongoose.connect(db_uri,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})
.then(db => console.log('Succesfuly connected to MongoDb'))
.catch(db => console.error(err))

module.exports = mongoose
