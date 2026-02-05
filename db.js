import mongoose from 'mongoose';

const MONGO_CS = process.env.MONGO_CS
if (!MONGO_CS) {
    throw new Error('Por favor proporciona una URI de MongoDB');
}

export const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_CS);
        console.log('Conexion exitosa a MongoDB');
    } catch (error) {
        console.error('Error conectando a MongoDB:', error);

    }
}