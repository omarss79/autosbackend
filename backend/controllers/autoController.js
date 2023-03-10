const asyncHandler = require('express-async-handler')
const Auto = require('../models/autoModel')

const getAutos = asyncHandler( async (req, res) => {
    const autos = await Auto.find()
    res.status(200).json(autos)
})
const setAutos = asyncHandler( async (req, res) => {
    if(!req.body.marca){
        res.status(400)
        throw new Error('Favor de teclear una marca')
    }
    if(!req.body.modelo){
        res.status(400)
        throw new Error('Favor de teclear un modelo')
    }
    if(!req.body.ann){
        res.status(400)
        throw new Error('Favor de teclear un año')
    }
    if(!req.body.color){
        res.status(400)
        throw new Error('Favor de teclear un color')
    }
    const auto = await Auto.create({
        marca: req.body.marca,
        modelo: req.body.modelo,
        ann: req.body.ann,
        color: req.body.color
    })
    res.status(201).json(auto)
})
const updateAutos = asyncHandler( async (req, res) => {
    const auto = await Auto.findById(req.params.id)
    if(!auto){
        res.status(400)
        throw new Error('Auto no encontrado')
    }
    const autoModificado = await Auto.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.status(200).json({'message':autoModificado})
})
const deleteAutos = asyncHandler( async (req, res) => {
    const auto = await Auto.findById(req.params.id)
    if(!auto){
        res.status(400)
        throw new Error('Auto no encontrado')
    }
    // await auto.removeOne()
    const autoEliminado = await Auto.findByIdAndRemove(req.params.id)
    res.status(200).json({'message':`Auto elimnado: ${req.params.id}`})
})

module.exports = {
    getAutos,
    setAutos,
    updateAutos,
    deleteAutos
}