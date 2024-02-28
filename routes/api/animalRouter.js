const express = require('express')
const router = express.Router()
const animalCtrl = require('../../controllers/api/animalController')


router.post('/', animalCtrl.createAnimal)
router.get('/', animalCtrl.getAnimals)
router.delete('/:id', animalCtrl.deleteAnimal)
router.put('/:id', animalCtrl.updateAnimal)

module.exports = router