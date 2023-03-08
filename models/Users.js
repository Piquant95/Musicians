const mongoose = require('mongoose')
// const Schema = new mongoose.Schema

const userSchema = new mongoose.Schema(
    {
        username: {
        type: String,
        required: [true, "Please provide a name"],
        unique: [true, "Must be original."]
       }, 
        password: {
        type: String,
        required: [true, "Please provide the URL for an image"],
       }
   },
   {
       timestamps: true
   }

);


const Users = mongoose.model('Users', userSchema)

module.exports = Users;