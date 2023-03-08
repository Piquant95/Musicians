const mongoose = require('mongoose')
// const Schema = new mongoose.Schema

const musiciansSchema = new mongoose.Schema(
    {
        // name field is required to be a string
       name: {
        type: String,
        required: [true, "Please provide a name"]
       }, 
    //    image field is a string and it's both required and it has to be unique
       image: {
        type: String,
        required: [true, "Please provide the URL for an image"],
        unique: [true, "I don't want the same slug picture multiple times"]
       }, 
    //    This is saying instrument is not a required field but if it's entered it will be a string
       instrument: String 
   },
   {
       timestamps: true
   }

);

// mongoode.model(<mongodb collection name>, our Schema) is the general default and it creates a collection inside of MongoDB
// that is named from the first argument, Musicians here. And it applies the schema above to that collection.
const Musicians = mongoose.model('Musicians', musiciansSchema)

module.exports = Musicians;