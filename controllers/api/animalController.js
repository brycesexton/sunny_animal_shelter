const Animal = require('../../models/animal')


exports.listAnimals = async (req, res) => {
    try {
      const animals = await Animal.find()
      res.json(animals)
    } catch (error) {
      res.status(500).send(error)
    }
  }

  exports.createAnimal = async (req, res) => {
    try {
      const newAnimal = new Animal(req.body)
      const savedAnimal = await newAnimal.save()
      res.status(201).json(savedAnimal)
    } catch (error) {
      res.status(500).send(error)
    }
  }

  exports.deleteAnimal = async (req, res) => {
    try {
      const { id } = req.params;
      const deletedAnimal = await Animal.findByIdAndDelete(id)
      if (!deletedAnimal) res.status(404).send("Animal not found")
      res.status(204).send()
    } catch (error) {
      res.status(500).send(error)
    }
  }

  exports.updateAnimal = async (req, res) => {
    try {
      const { id } = req.params
      const updatedAnimal = await Animal.findByIdAndUpdate(id, req.body, { new: true })
      if (!updatedAnimal) res.status(404).send("Animal not found")
      res.json(updatedAnimal)
    } catch (error) {
      res.status(500).send(error)
    }
  }