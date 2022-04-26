const {Schema,model} = require('mongoose')

const PlaceSchema = new Schema({
    _id:Number,
    name:{
        type:String,
        required:true
    } ,
    description: String,
    seasons: [String],
    image:[String],
    created: String,
})


const Place = model("Place",PlaceSchema)

module.exports = Place