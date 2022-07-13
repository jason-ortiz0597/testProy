const Subcategoria = require('../../model/Producto/Subcategoria2');

exports.getAll = async (req, res) => {
    try {

        const subcategoria = await Subcategoria.find();
        if (subcategoria.length > 0) {
            res.json(subcategoria);
        } else {
            res.json({ message: 'No hay subcategorias' });
        }
    } catch (err) {
        res.json({ message: err });
    }
}

exports.getByName = async (req, res) => {
    try {
        const subcategoria = await Subcategoria.find({ nombre:{ $regex: req.params.nombre, $options: 'i' } });
        if (subcategoria.length > 0) {
            res.json(subcategoria);
        } else {
            res.json({ message: 'No hay subcategorias' });
        }
    } catch (err) {
        res.json({ message: err });
    }
}

exports.getActive = async (req, res) => {
    try {
        const subcategoria = await Subcategoria.find({ estado: true });
        if (subcategoria.length > 0) {
            res.json(subcategoria);
        } else {
            res.json({ message: 'No hay subcategorias' });
        }
    } catch (err) {
        res.json({ message: err });
    }
}

exports.create = async (req, res) => {
    try {
        const exsits = await Subcategoria.findOne({ nombre: req.body.nombre });        
        if (exsits) {
            res.json({ message: 'La subcategoria ya existe' });
        } else {
            const subcategoria = new Subcategoria(req.body);
            await subcategoria.save();
            res.json({ message: 'Subcategoria creada' });
        }

        
    } catch (err) {
        res.json({ message: err });
    }
}

exports.update = async (req, res) => {
    try {
        const subcategoria = await Subcategoria.findByIdAndUpdate(req.params.id, req.body);
        if (!subcategoria) {
            res.json({ message: 'No se encontro la subcategoria' });
        } else {
            res.json({ message: 'Subcategoria actualizada' });
        }
    } catch (err) {
        res.json({ message: err });
    }
}

exports.updateActive = async (req, res) => {
    try {
        const subcategoria = await Subcategoria.findByIdAndUpdate(req.params.id, { estado: req.body.estado });
        if (!subcategoria) {
            res.json({ message: 'No se encontro la subcategoria' });
        } else {
            res.json({ message: 'Subcategoria actualizada' });
        }
    } catch (err) {
        res.json({ message: err });
    }
}

exports.delete = async (req, res) => {
    try {
        const subcategoria = await Subcategoria.findByIdAndDelete(req.params.id);
        if (!subcategoria) {
            res.json({ message: 'No se encontro la subcategoria' });
        } else {
            res.json({ message: 'Subcategoria eliminada' });
        }
    } catch (err) {
        res.json({ message: err });
    }
}