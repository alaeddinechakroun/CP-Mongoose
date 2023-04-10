const mongoose = require('mongoose')

const contactSchema = mongoose.Schema(
    {
        name:String,
        age:Number,
        favoriteFoods:String,
    }
)


const Contact = mongoose.model('Contact' , contactSchema)
module.exports = Contact