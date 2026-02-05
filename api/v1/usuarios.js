import User from '../../models/users.js';


export default async function getUsuarios(req, res) {
    try {
        let usuarios = await User.find().select('-password -_id'); //quitamos el psswd por seguridad;
        res.status(200).json({ usuarios });
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los usuarios' })
    }

}

