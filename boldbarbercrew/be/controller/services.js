import Services from "../models/services.js"

export const addServices = async (req, res) => {
    try {
        const { name, price, description } = req.body
        const file = req?.file?.originalname
        const newService = new Services({ name, price, image: file, description })
        const saved = await newService.save()
        res.status(201).json(saved)
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

export const getServices = async (req, res) => {
    try {
        const services = await Services.find()
        res.status(200).json(services)
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
}

export const deleteService = async (req, res, next) => {
    try {
        const { id } = req?.body
        await Services.deleteOne({ _id: id })
        res.status(200).json('Success')
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
}