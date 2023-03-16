const asyncHandler = require('express-async-handler')
const Auto = require('../models/autoModel')

const getAutos = asyncHandler( async (req, res) => {
    const autos = await Auto.find({ user: req.user.id })
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
        color: req.body.color,
        user: req.user.id
    })
    res.status(201).json(auto)
})
const updateAutos = asyncHandler( async (req, res) => {
    const auto = await Auto.findById(req.params.id)
    if(!auto){
        res.status(400)
        throw new Error('Auto no encontrado')
    }
    //Verificamos que el auto pertenece al usuario del token
    if (auto.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('Acceso no Autorizado, el auto no pertenece al usuario logueado')
    }
    
    const autoModificado = await Auto.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.status(200).json(autoModificado)
})
const deleteAutos = asyncHandler( async (req, res) => {
    const auto = await Auto.findById(req.params.id)
    if(!auto){
        res.status(400)
        throw new Error('Auto no encontrado')
    }
    //Verificamos que el auto pertenece al usuario del token
    if (auto.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('Acceso no Autorizado, el auto no pertenece al usuario logueado')
    }

    await auto.deleteOne()
    res.status(200).json({ id: req.params.id })
})

module.exports = {
    getAutos,
    setAutos,
    updateAutos,
    deleteAutos
}