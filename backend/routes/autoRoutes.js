const express = require('express')
const router = express.Router()
const {getAutos, setAutos, updateAutos, deleteAutos} = require('../controllers/autoController')

router.get('/', getAutos)
router.post('/', setAutos)
router.put('/:id', updateAutos)
router.delete('/:id', deleteAutos)

module.exports = router