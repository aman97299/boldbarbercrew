import Bookings from "../models/booking.js"

export const addBookings = async (req, res) => {
    try {
        const { service, appointmentDate, name, email, notes, phone } = req.body
        const newBooking = new Bookings({ service, appointmentDate, name, email, notes, phone })
        const savedBooking = await newBooking.save()
        res.status(201).json(savedBooking)
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

export const getBookings = async (req, res, next) => {
    try {
        const bookings = await Bookings.find()
        res.status(200).json(bookings)
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
}