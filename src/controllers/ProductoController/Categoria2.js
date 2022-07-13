const Categoria = require('../../model/Producto/Categoria2');


exports.getAll = async (req, res) => {
    try {

        const categoria = await Categoria.find();
        if (categoria.length > 0) {
            res.json(categoria);
        } else {
            res.json({ message: 'No hay categorias' });
        }
    } catch (err) {
        res.json({ message: err });
    }
}


exports.getByName = async (req, res) => {
    try {
        const categoria = await Categoria.find({ nombre:{ $regex: req.params.nombre, $options: 'i' } });
        if (categoria.length > 0) {
            res.json(categoria);
        } else {
            res.json({ message: 'No hay categorias' });
        }
    } catch (err) {
        res.json({ message: err });
    }
}

exports.getActive = async (req, res) => {
    try {
        const categoria = await Categoria.find({ estado: true });
        if (categoria.length > 0) {
            res.json(categoria);
        } else {
            res.json({ message: 'No hay categorias' });
        }
    } catch (err) {
        res.json({ message: err });
    }
}

exports.create = async (req, res) => {
    try {
        const exsits = await Categoria.findOne({ nombre: req.body.nombre });        
        if (exsits) {
            res.json({ message: 'La categoria ya existe' });
        } else {
            const categoria = new Categoria(req.body);
            await categoria.save();
            res.json({ message: 'Categoria creada' });
        }

        
    } catch (err) {
        res.json({ message: err });
    }
}


exports.update = async (req, res) => {
    try {
        const categoria = await Categoria.findByIdAndUpdate(req.params.id, req.body);
        if (categoria) {
            res.json({ message: 'Categoria actualizada' });
        } else {
            res.json({ message: 'No se encontro la categoria' });
        }
    } catch (err) {
        res.json({ message: err });
    }
}

exports.delete = async (req, res) => {
    try {
        const categoria = await Categoria.findByIdAndDelete(req.params.id);
        if (categoria) {
            res.json({ message: 'Categoria eliminada' });
        } else {
            res.json({ message: 'No se encontro la categoria' });
        }
    } catch (err) {
        res.json({ message: err });
    }
}

exports.updateActive = async (req, res) => {
    try {
        const categoria = await Categoria.findByIdAndUpdate(req.params.id, { estado: req.body.estado });
        if (categoria) {
            res.json({ message: 'Categoria actualizada' });
        } else {
            res.json({ message: 'No se encontro la categoria' });
        }
    } catch (err) {
        res.json({ message: err });
    }
}



