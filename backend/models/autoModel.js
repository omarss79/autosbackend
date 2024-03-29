const mongoose = require('mongoose');

const autosSchema = mongoose.Schema({
    marca: {
        type:String,
        required: [true, 'Por favor, teclea una marca']
    },
    modelo: {
        type:String,
        required: [true, 'Por favor, teclea un modelo']
    },
    ann: {
        type:String,
        required: [true, 'Por favor, teclea un año']
    },
    color: {
        type:String,
        required: [true, 'Por favor, teclea un color']
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
},{
    timestamps: true
})

module.exports = mongoose.model('Auto', autosSchema)