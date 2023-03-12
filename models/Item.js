const {Schema, model} = require('mongoose')

const schema = new Schema({
    name: {
        type: String
    },
    img: {
        type: String
    },
    price: {
        type: String
    }
}) 

module.exports = model('Item', schema)