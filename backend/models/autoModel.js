const mongoose = require('mongoose');

const autosSchema = mongoose.Schema({
    marca: {
        type:String,
        required: [true, 'Por favor, teclea una marca']
    }
},{
    timestamps: true
})

module.exports = mongoose.model('Auto', autosSchema)