const asyncHandler = require('express-async-handler')
const Auto = require('../models/autoModel')

const getAutos = asyncHandler( async (req, res) => {
    const autos = await Auto.find()
    res.status(200).json(autos)
})
// const setTareas = asyncHandler( async (req, res) => {
//     if(!req.body.texto){
//         // res.status(400).json({error: 'Favor de teclear una tarea'})
//         res.status(400)
//         throw new Error('Favor de teclear una tarea')
//     }
//     const tarea = await Tarea.create({
//         texto: req.body.texto
//     })
//     res.status(201).json(tarea)
// })
// const updateTareas = asyncHandler( async (req, res) => {
//     const tarea = await Tarea.findById(req.params.id)
//     if(!tarea){
//         res.status(400)
//         throw new Error('Tarea no encontrada')
//     }
//     const tareaModificada = await Tarea.findByIdAndUpdate(req.params.id, req.body, {new: true})
//     res.status(200).json({'message':tareaModificada})
// })
// const deleteTareas = asyncHandler( async (req, res) => {
//     const tarea = await Tarea.findById(req.params.id)
//     if(!tarea){
//         res.status(400)
//         throw new Error('Tarea no encontrada')
//     }
//     // await tarea.remove()
//     const tareaEliminada = await Tarea.findByIdAndRemove(req.params.id)
//     res.status(200).json({'message':`Tarea elimnada: ${req.params.id}`})
// })

module.exports = {
    getAutos
    // setTareas,
    // updateTareas,
    // deleteTareas
}