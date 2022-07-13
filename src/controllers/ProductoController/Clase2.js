const Clase = require('../../model/Producto/Clase2');

exports.getAll = async (req, res) => {
    try {

        const clase = await Clase.find();
        if (clase.length > 0) {
            res.json(clase);
        } else {
            res.json({ message: 'No hay clases' });
        }
    } catch (err) {
        res.json({ message: err });
    }
}

exports.getByName = async (req, res) => {
    try {
        const clase = await Clase.find({ nombre:{ $regex: req.params.nombre, $options: 'i' } });
        if (clase.length > 0) {
            res.json(clase);
        } else {
            res.json({ message: 'No hay clases' });
        }
    } catch (err) {
        res.json({ message: err });
    }
}

exports.getActive = async (req, res) => {
    try {
        const clase = await Clase.find({ estado: true });
        if (clase.length > 0) {
            res.json(clase);
        } else {
            res.json({ message: 'No hay clases' });
        }
    } catch (err) {
        res.json({ message: err });
    }
}

exports.create = async (req, res) => {
    try {
        const exsits = await Clase.findOne({ nombre: req.body.nombre });        
        if (exsits) {
            res.json({ message: 'La clase ya existe' });
        } else {
            const clase = new Clase(req.body);
            await clase.save();
            res.json({ message: 'Clase creada' });
        }

        
    } catch (err) {
        res.json({ message: err });
    }
}

exports.update = async (req, res) => {
    try {
        const clase = await Clase.findByIdAndUpdate(req.params.id, req.body);
        if (!clase) {
            res.json({ message: 'No se encontro la clase' });
        } else {
            res.json({ message: 'Clase actualizada' });
        }
    } catch (err) {
        res.json({ message: err });
    }
}

exports.delete = async (req, res) => {
    try {
        const clase = await Clase.findByIdAndDelete(req.params.id);
        if (!clase) {
            res.json({ message: 'No se encontro la clase' });
        } else {
            res.json({ message: 'Clase eliminada' });
        }
    } catch (err) {
        res.json({ message: err });
    }
}

exports.updateActive = async (req, res) => {
    try {
        const clase = await Clase.findByIdAndUpdate(req.params.id, { estado: req.body.estado });
        if (!clase) {
            res.json({ message: 'No se encontro la clase' });
        } else {
            res.json({ message: 'Clase actualizada' });
        }
    } catch (err) {
        res.json({ message: err });
    }
}