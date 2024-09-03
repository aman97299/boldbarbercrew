import mongoose from "mongoose";

const bookingsSchema = mongoose.Schema({
    service: {
        type: Array,
        required: true,
    },
    appointmentDate: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    notes: {
        type: String,
        required: false,
        default: '-'
    },
    phone: {
        type: String,
        required: true,
    },

}, { timestamps: true })

const Bookings = mongoose.model("Bookings", bookingsSchema);

export default Bookings
