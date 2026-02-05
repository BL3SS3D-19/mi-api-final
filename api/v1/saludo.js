export default function saludo(req, res) {
    const nombre = req.params.nombre || req.query.nombre;
    if (!nombre) {
        res.status(400).json({ message: 'El parametro nombre es requerido' });
    }
    return res.status(200).json({ message: `Bienvenido a mi API, ${nombre}` });
}