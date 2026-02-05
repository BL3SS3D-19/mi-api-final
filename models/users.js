import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        nombre: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        edad: {
            type: Number,
            required: true,
            min: 0,
        },
        password: {
            type: String,
            required: true,
        },
    }

);

export default mongoose.model('User', userSchema, 'users');