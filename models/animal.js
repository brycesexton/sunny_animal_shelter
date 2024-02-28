const { model, Schema } = require('mongoose')


const animalSchema = new Schema ({
    name: { required: true, type: String },
    species: { required: true, type: String },
    image: { required: true, type: String },
    reservedForAdoption: { required: true, type: Boolean }
})

const Todo = model('Animal', animalSchema)

module.exports = Animal