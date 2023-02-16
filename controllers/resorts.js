const { Resort, Run } = require("../models")

const create = async (req, res) => {
  try {
    const resort = await Resort.create(req.body)
    res.status(200).json(resort)
  } catch (error) {
    res.status(500).json(error)
  }
}

const index = async (req, res) => {
  try {
    const resorts = await Resort.findAll()
    res.status(200).json(resorts)
  } catch (error) {
    res.status(500).json(error)
  }
}

const show = async (req, res) => {
  try {
    const resort = await Resort.findByPk(req.params.id)
    res.status(200).json(resort)
  } catch (error) {
    res.status(500).json(error)
  }
}

const update = async (req, res) => {
  try {
    const resort = await Resort.findByPk(req.params.id)
    resort.set(req.body)
    await resort.save()
    res.status(200).json(resort)
  } catch (error) {
    res.status(500).json(error)
  }
}

const deleteResort = async (req, res) => {
  try {
    const resort = await Resort.findByPk(req.params.id)
    await resort.destroy()
    res.status(200).json(resort)
  } catch (error) {
    res.status(500).json(error)
  }
}

const addRun = async (req, res) => {
  try {
    req.body.resortId = req.params.id
    const run = await Run.create(req.body)
    res.status(200).json(run)
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports = {
  create,
  index,
  show,
  update,
  delete: deleteResort,
  addRun
}
