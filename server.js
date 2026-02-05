import 'dotenv/config';
import express from 'express';
import { getUsuarios } from './api/v1/usuarios.js';
import { hello } from './api/v1/hello.js';
import { saludo } from './api/v1/saludo.js';
import { connectDB } from './db.js';

const app = express();

const PORT = process.env.PORT;

const MONGO_CS = process.env.MONGO_CS;


//Conexion a MongoDB Atlas
if (!mongoose.connection.readyState) {
    await mongoose.connect(process.env.MONGO_CS);
}

//Middleware para JSON
app.use(express.json());



//RUTAS

app.get('/api/v1/usuarios', getUsuarios);
app.get('/api/v1/hello', hello);
app.get('/api/v1/saludo/:nombre', saludo);


