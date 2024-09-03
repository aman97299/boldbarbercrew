import Categories from "../models/categories.js"

export const addCategories = async (req, res) => {
    try {
        const { name, price, description } = req.body
        const file = req?.file?.originalname
        const newService = new Categories({ name, price, image: file, description })
        const savedUser = await newService.save()
        res.status(201).json(savedUser)
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

export const getCategories = async (req, res, next) => {
    try {
        const services = await Categories.find()
        res.status(200).json(services)
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
}

export const deleteCategory = async (req, res, next) => {
    try {
        const { id } = req?.body
        await Categories.deleteOne({ _id: id })
        res.status(200).json('Success')
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
}