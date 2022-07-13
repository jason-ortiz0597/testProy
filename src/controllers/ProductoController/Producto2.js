const Producto = require('../../model/Producto/Producto2');


exports.getAll = async (req, res) => {
    try {

        const producto = await Producto.find({})
            .populate('categoria', { nombre: 1 })
            .populate('subcategoria', { nombre: 1 })
            .populate('clase', { nombre: 1 })
        if (producto.length > 0) {
            res.json(producto);
        } else {
            res.json({ message: 'No hay productos' });
        }
    } catch (err) {
        res.json({ message: err });
    }
}


exports.create = async (req, res) => {
    try {
        const exist = await Producto.findOne({ nombre: req.body.nombre });
        if (exist) {
            res.json({ message: 'El producto ya existe' });
        } else {
            const producto = new Producto(req.body);
            await producto.save();
            res.json({ message: 'Producto creado' });
        }
    } catch (err) {
        res.json({ message: err });
    }
}

