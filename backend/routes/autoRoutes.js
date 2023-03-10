const express = require('express')
const router = express.Router()
const {getAutos} = require('../controllers/autoController')
// const {getTareas, setTareas, updateTareas, deleteTareas} = require('../controllers/tareaController')

router.get('/', getAutos)
// router.post('/', setTareas)
// router.put('/:id', updateTareas)
// router.delete('/:id', deleteTareas)

module.exports = router